import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { EventService } from'../services/event.service';//此页面消失的时候发送广播：引入

@Component({
  selector: 'app-myself',
  templateUrl: './myself.page.html',
  styleUrls: ['./myself.page.scss'],
})
export class MyselfPage implements OnInit {

  // public eventService: EventService;//声明
  constructor(public nav: NavController,public http:HttpClient,public eventService: EventService) { }

  ngOnInit() {
  }
  back() {
    this.eventService.eventEmitter.emit('useraction');
    this.nav.back();
    // this.nav.navigateForward("/poem");
    // this.nav.navigateBack("/poem?reload=T");//返回上个页面，路由添加刷新参数

  }

  uid;//进入主页的用户id
  userId;//登录用户id
  user;//盛放传回的用户信息
  data;//盛放传回的文章信息
  article;//盛放传回的文章
  cid;//标记作品
  Flag0;//盛放该用户点赞的作品id
  Flag1;//盛放该用户收藏的作品id
  flag0=[];//标记该作品本用户是否点赞
  flag1=[];//标记该作品本用户是否收藏
  flagAttention=false;//标记该用户是否关注
  attention;//盛放关注的人
  ele;//标记元素
  ionViewWillEnter(){
    this.userId=localStorage.getItem('userId');
    this.uid=localStorage.getItem('uid');
    
    //判断是否关注
    this.http.post('/api/tabs/my/attention',{'uid':this.userId}).subscribe(res=>{
      console.log('attention',res);
      this.attention=res;
      for(var i=0;i<this.attention.length;i++){
        if(this.uid==this.attention[i].uid){
          this.flagAttention=true;
          document.getElementsByClassName('attention')[0].innerHTML = "已关注";
        }
      }
    })

    this.http.post('/api/tabs/my',{'uid':this.uid}).subscribe(res=>{
      console.log(res[0]);
      this.user=res[0];
    })
    
    this.http.post('/api/tabs/my/creation',{'uid':this.uid}).subscribe(res=>{
      console.log(res);
      this.data=res;
      this.article=this.data.article;
      console.log("article",this.data.article);
      for(var k=0;k<this.article.length;k++){
        this.flag0[k]=false;
        this.flag1[k]=false;
      }
      this.http.post("/api/tabs/poem/love",{"uid":this.userId}).subscribe(res=>{
        this.Flag0=res;
        console.log('0',this.Flag0);
        //判断喜欢的
        for(var i=0;i<this.Flag0.length;i++){
          for(var j=0;j<this.article.length;j++){
            if(this.Flag0[i].cid==this.article[j].cid){
              this.flag0[j]=true;
            }
          }
        }
        this.http.post("/api/tabs/poem/collection",{"uid":this.userId}).subscribe(res=>{
          console.log('1',res);
          this.Flag1=res;
          
          //判断收藏的
          for(var i=0;i<this.Flag1.length;i++){
            for(var j=0;j<this.article.length;j++){
              if(this.Flag1[i].cid==this.article[j].cid){
                this.flag1[j]=true;
              }
            }
          }
        })
      })
    })
  }

  //关注和取消关注
  follow(){
    console.log("关注了吗")
    if(this.flagAttention==true){
      document.getElementsByClassName('attention')[0].innerHTML = "关注";
      this.http.post('/api/tabs/my/delAttention',{"uid":this.userId,"aid":this.uid}).subscribe(res=>{
        // console.log(res)
      })
    }else{
      document.getElementsByClassName('attention')[0].innerHTML = "已关注";
      this.http.post('/api/tabs/my/addAttention',{"uid":this.userId,"aid":this.uid}).subscribe(res=>{
        // console.log(res)
      })
    }
    this.flagAttention=!this.flagAttention;
  }

  
  //删除作品
  del(cid,i){
    var ul=document.getElementById("ul");
    var li=ul.childNodes;
    console.log(li);
    ul.removeChild(li[i+1]);
    this.http.post('/api/tabs/poem/delCreate',{"cid":cid}).subscribe(res=>{
      // console.log(res)
    })
  }

  //点赞和取消赞
  dianZan(i){
    this.cid=this.article[i].cid;
    console.log(this.cid);
    if(this.flag0[i]==true){
      this.flag0[i]=false;
      this.article[i].love--;
      this.http.post('/api/tabs/poem/delLove',{uid:this.userId,cid:this.cid}).subscribe(data=>{
        console.log(data);
      });
    }else{
      this.flag0[i]=true;
      this.article[i].love++;
      this.http.post('/api/tabs/poem/addLove',{uid:this.userId,cid:this.cid}).subscribe(data=>{
        console.log(data);
      });
    }
  }
  //收藏和取消收藏
  Collect(i){
    this.cid=this.article[i].cid;
    if(this.flag1[i]==true){
      this.flag1[i]=false;
      this.article[i].collection--;
      this.http.post('/api/tabs/poem/delCollect',{uid:this.userId,cid:this.cid}).subscribe(data=>{
        console.log(data);
      });
    }else{
      this.flag1[i]=true;
      this.article[i].collection++;
      this.http.post('/api/tabs/poem/addCollect',{uid:this.userId,cid:this.cid}).subscribe(data=>{
        console.log(data);
      });
    }
  }

  //进入评论页
  Comment(i){
    localStorage.setItem('cid',this.article[i].cid);
    this.nav.navigateForward("/comment");
  }
  //去该用户关注的页
  goAttention(){
    localStorage.setItem('flag','user');
    this.nav.navigateForward("/myfollow");
  }
  //去该用户收藏的页
  goCollection(){
    localStorage.setItem('flag','user');
    this.nav.navigateForward("/mycollect");
  }

  flag=false;
  hideList;
  showList(i){ //控制下拉列表的显示与隐藏
    this.hideList=document.getElementsByClassName('hideList');
    if(this.flag==false){
      this.hideList[i].style.display='block';
    }else{
      this.hideList[i].style.display='none';
    }
    this.flag=!this.flag;
  }
}
