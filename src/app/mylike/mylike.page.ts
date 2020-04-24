import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-mylike',
  templateUrl: './mylike.page.html',
  styleUrls: ['./mylike.page.scss'],
})
export class MylikePage implements OnInit {

  constructor(public nav: NavController,public http:HttpClient) { }

  ngOnInit() {
  }
  back() {
    this.nav.back();
  }
  userId;//登录用户的ID
  uid;
  data;//盛放所有用户喜欢的作品信息
  FlagC;//盛放此用户所有收藏的作品id
  loveflag=[];//标志作品的心都是红色的
  collectflag=[];//标志作品是否收藏

  ionViewWillEnter(){
    this.userId=localStorage.getItem('userId');
    this.uid=localStorage.getItem('uid');
    this.http.post('/api/tabs/my/love',{"uid":this.uid}).subscribe(res=>{
      console.log("love",res);
      this.data=res;
      for(var k=0;k<this.data.length;k++){
        this.collectflag[k]=false;
        this.loveflag[k]=true;
      }
      this.http.post("/api/tabs/poem/collection",{"uid":this.uid}).subscribe(res=>{
        console.log("collection",res);
        this.FlagC=res;
        
        //判断收藏的
        for(var i=0;i<this.data.length;i++){
          for(var j=0;j<this.FlagC.length;j++){
            if(this.data[i].cid==this.FlagC[j].cid){
              this.collectflag[i]=true;
              break;
            }
          }
        }
      })
    })

    
  }
  //点赞
  dianZan(i){
    if(this.loveflag[i]==true){
      this.loveflag[i]=false;
      this.data[i].love--;
      this.http.post('/api/tabs/poem/delLove',{"uid":this.userId,"cid":this.data[i].cid}).subscribe(res=>{
        // console.log(res)
      })
    }else{
      this.loveflag[i]=true;
      this.data[i].love++;
      this.http.post('/api/tabs/poem/addLove',{"uid":this.userId,"cid":this.data[i].cid}).subscribe(res=>{
        // console.log(res)
      })
    }
  }
//收藏
  Collect(i){
    if(this.collectflag[i]==true){
      this.collectflag[i]=false;
      this.data[i].collection--;
      this.http.post('/api/tabs/poem/delCollect',{uid:this.userId,cid:this.data[i].cid}).subscribe(data=>{
        // console.log(data);
      });
    }else{
      this.collectflag[i]=true;
      this.data[i].collection++;
      this.http.post('/api/tabs/poem/addCollect',{uid:this.userId,cid:this.data[i].cid}).subscribe(data=>{
        // console.log(data);
      });
    }
  }
  //进入评论页
  Comment(i){
    localStorage.setItem('cid',this.data[i].cid);
    this.nav.navigateForward("/comment");
  }

}
