import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import {EventService} from'../services/event.service';//监听事件广播：引入

@Component({
  selector: 'app-poem',
  templateUrl: './poem.page.html',
  styleUrls: ['./poem.page.scss'],
})
export class PoemPage  {
  //声明事件广播
  constructor(public nav:NavController,public http:HttpClient,public eventService: EventService){
    
  }
  
  selections=[{imgsrc:"../../assets/icon/01.jpg",imgname:"诗经全集"},{imgsrc:"../../assets/icon/02.jpg",imgname:"楚辞全集"},{imgsrc:"../../assets/icon/03.jpg",imgname:"道德经"},{imgsrc:"../../assets/icon/04.jpg",imgname:"千家诗"},
              {imgsrc:"../../assets/icon/05.jpg",imgname:"唐诗三百首"},{imgsrc:"../../assets/icon/06.jpg",imgname:"宋词三百首"},{imgsrc:"../../assets/icon/07.jpg",imgname:"元曲三百首"},{imgsrc:"../../assets/icon/08.jpg",imgname:"给孩子的诗"},
              {imgsrc:"../../assets/icon/09.jpg",imgname:"古诗十九首"},{imgsrc:"../../assets/icon/10.jpg",imgname:"乐府诗集"},{imgsrc:"../../assets/icon/11.jpg",imgname:"古文观止"},{imgsrc:"../../assets/icon/12.jpg",imgname:"周易"}];
  theme=[{imgsrc:"../../assets/icon/13.jpg",imgname:"爱"},{imgsrc:"../../assets/icon/14.jpg",imgname:"禅"},{imgsrc:"../../assets/icon/15.jpg",imgname:"茶"},{imgsrc:"../../assets/icon/16.jpg",imgname:"酒"},
              {imgsrc:"../../assets/icon/17.jpg",imgname:"战争"},{imgsrc:"../../assets/icon/18.jpg",imgname:"离别"},{imgsrc:"../../assets/icon/19.jpg",imgname:"悼亡"},{imgsrc:"../../assets/icon/20.jpg",imgname:"思乡"},
              {imgsrc:"../../assets/icon/21.jpg",imgname:"孤独"},{imgsrc:"../../assets/icon/22.jpg",imgname:"壮志"},{imgsrc:"../../assets/icon/23.jpg",imgname:"田园"},{imgsrc:"../../assets/icon/24.jpg",imgname:"边塞"}];
  scene=[{imgsrc:"../../assets/icon/25.jpg",imgname:"春"},{imgsrc:"../../assets/icon/26.jpg",imgname:"夏"},{imgsrc:"../../assets/icon/27.jpg",imgname:"秋"},{imgsrc:"../../assets/icon/28.jpg",imgname:"冬"},
              {imgsrc:"../../assets/icon/29.jpg",imgname:"梅"},{imgsrc:"../../assets/icon/30.jpg",imgname:"桃"},{imgsrc:"../../assets/icon/31.jpg",imgname:"荷"},{imgsrc:"../../assets/icon/32.jpg",imgname:"菊"},
              {imgsrc:"../../assets/icon/33.jpg",imgname:"山"},{imgsrc:"../../assets/icon/34.jpg",imgname:"水"},{imgsrc:"../../assets/icon/35.jpg",imgname:"日"},{imgsrc:"../../assets/icon/36.jpg",imgname:"月"}];
  num;//自己发表的作品数
  data;//承载返回的信息
  cid;//作品id
  userId;//登录用户的id
  Flag0;//盛放该用户点赞的作品id
  Flag1;//盛放该用户收藏的作品id
  flag0=[];//标记该作品本用户是否点赞
  flag1=[];//标记该作品本用户是否收藏

  ngOnInit() {
//回应广播事件
    this.eventService.eventEmitter.on('useraction', () => {
      console.log("接收成功");
      //更新数据 方法 内容
      //用户本人发布作品数量
    this.http.post('/api/tabs/poem/num',{"uid":1}).subscribe(res=>{
      console.log(res[0]['count(*)']);
      this.num=res[0]['count(*)'];
  })
  //所有用户和系统推荐的作品信息
  this.http.get("/api/tabs/poem/article").subscribe(res=>{
    console.log('返回到作品首页',res);
    this.data=res;
    for(var k=0;k<this.data.length;k++){
      this.flag0[k]=false;
      this.flag1[k]=false;
    }
    this.http.post("/api/tabs/poem/love",{"uid":this.userId}).subscribe(res=>{
      this.Flag0=res;
      console.log('0',this.Flag0);
      //判断喜欢的
      for(var i=0;i<this.Flag0.length;i++){
        for(var j=0;j<this.data.length;j++){
          if(this.Flag0[i].cid==this.data[j].cid){
            this.flag0[j]=true;
          }
        }
      }
      this.http.post("/api/tabs/poem/collection",{"uid":this.userId}).subscribe(res=>{
        console.log('1',res);
        this.Flag1=res;
        
        //判断收藏的
        for(var i=0;i<this.Flag1.length;i++){
          for(var j=0;j<this.data.length;j++){
            if(this.Flag1[i].cid==this.data[j].cid){
              this.flag1[j]=true;
            }
          }
        }
      })
    })
  })

    });
  }


  ionViewWillEnter(){
    this.userId=localStorage.getItem("userId");
    


    //用户本人发布作品数量
    this.http.post('/api/tabs/poem/num',{"uid":1}).subscribe(res=>{
        console.log(res[0]['count(*)']);
        this.num=res[0]['count(*)'];
    })
    //所有用户和系统推荐的作品信息
    this.http.get("/api/tabs/poem/article").subscribe(res=>{
      console.log('返回到作品首页',res);
      this.data=res;
      for(var k=0;k<this.data.length;k++){
        this.flag0[k]=false;
        this.flag1[k]=false;
      }
      this.http.post("/api/tabs/poem/love",{"uid":this.userId}).subscribe(res=>{
        this.Flag0=res;
        console.log('0',this.Flag0);
        //判断喜欢的
        for(var i=0;i<this.Flag0.length;i++){
          for(var j=0;j<this.data.length;j++){
            if(this.Flag0[i].cid==this.data[j].cid){
              this.flag0[j]=true;
            }
          }
        }
        this.http.post("/api/tabs/poem/collection",{"uid":this.userId}).subscribe(res=>{
          console.log('1',res);
          this.Flag1=res;
          
          //判断收藏的
          for(var i=0;i<this.Flag1.length;i++){
            for(var j=0;j<this.data.length;j++){
              if(this.Flag1[i].cid==this.data[j].cid){
                this.flag1[j]=true;
              }
            }
          }
        })
      })
    })

  }            

  
  
  //分类和创作交换
  isActive=0; 
  isClick(i){
    this.isActive=i;
  }
//点赞和取消赞
  dianZan(i){
    this.cid=this.data[i].cid;
    console.log(this.cid);
    if(this.flag0[i]==true){
      this.flag0[i]=false;
      this.data[i].love--;
      this.http.post('/api/tabs/poem/delLove',{uid:this.userId,cid:this.cid}).subscribe(data=>{
        console.log(data);
      });
    }else{
      this.flag0[i]=true;
      this.data[i].love++;
      this.http.post('/api/tabs/poem/addLove',{uid:this.userId,cid:this.cid}).subscribe(data=>{
        console.log(data);
      });
    }
  }
//收藏和取消收藏
Collect(i){
  this.cid=this.data[i].cid;
  if(this.flag1[i]==true){
    this.flag1[i]=false;
    this.data[i].collection--;
    this.http.post('/api/tabs/poem/delCollect',{uid:this.userId,cid:this.cid}).subscribe(data=>{
      console.log(data);
    });
  }else{
    this.flag1[i]=true;
    this.data[i].collection++;
    this.http.post('/api/tabs/poem/addCollect',{uid:this.userId,cid:this.cid}).subscribe(data=>{
      console.log(data);
    });
  }
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
 //用户主页 
  userDetail(i){
    localStorage.setItem('uid',this.data[i].uid);
    this.nav.navigateForward("/myself");
  }
//进入评论页
  Comment(i){
    localStorage.setItem('cid',this.data[i].cid);
    this.nav.navigateForward("/comment");
  }
//进入创作诗词页
  goCreate(){
    this.nav.navigateForward("/createpoem");
  }

  gopoemlist1(i){
    localStorage.setItem('classify','selections');
    localStorage.setItem('poemimg',this.selections[i].imgsrc);
    localStorage.setItem('poemlist',this.selections[i].imgname);
    this.nav.navigateForward("/poemlist");
  }
  gopoemlist2(i){
    localStorage.setItem('classify','theme');
    localStorage.setItem('poemimg',this.theme[i].imgsrc);
    localStorage.setItem('poemlist',this.theme[i].imgname);
    this.nav.navigateForward("/poemlist");
  }
  gopoemlist3(i){
    localStorage.setItem('classify','scene');
    localStorage.setItem('poemimg',this.scene[i].imgsrc);
    localStorage.setItem('poemlist',this.scene[i].imgname);
    this.nav.navigateForward("/poemlist");
  }
}
