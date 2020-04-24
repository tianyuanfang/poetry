import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-mycollect',
  templateUrl: './mycollect.page.html',
  styleUrls: ['./mycollect.page.scss'],
})
export class MycollectPage implements OnInit {

  constructor(public nav: NavController,public http:HttpClient) { }

  ngOnInit() {
  }
  back() {
    this.nav.back();
  }
  userId;//登录用户的ID
  uid;
  data;//盛放所有用户喜欢的作品信息
  Flagl;//盛放此用户所有喜欢的作品id
  collectflag=[];//标志作品的星都是亮的
  loveflag=[];//标志作品是否喜欢

  ionViewWillEnter(){
    this.userId=localStorage.getItem('userId');
    this.uid=localStorage.getItem('uid');
    this.http.post('/api/tabs/my/collection',{"uid":this.uid}).subscribe(res=>{
      console.log("collection",res)
      this.data=res;
      for(var k=0;k<this.data.length;k++){
        this.loveflag[k]=false;
        this.collectflag[k]=true;
      }
      this.http.post("/api/tabs/poem/love",{"uid":this.uid}).subscribe(res=>{

        this.Flagl=res;
        
        //判断喜欢的
        for(var i=0;i<this.data.length;i++){
          for(var j=0;j<this.Flagl.length;j++){
            if(this.data[i].cid==this.Flagl[j].cid){
              this.loveflag[i]=true;
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
        
      })
    }else{
      this.loveflag[i]=true;
      this.data[i].love++;
      this.http.post('/api/tabs/poem/addLove',{"uid":this.userId,"cid":this.data[i].cid}).subscribe(res=>{
        
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
