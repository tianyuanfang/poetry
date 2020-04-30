import { Component, OnInit } from '@angular/core';
import { NavController ,NavParams,ActionSheetController,AlertController} from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';//引入手机相机
// import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';//引入手机相册

@Component({
  selector: 'app-createpoem',
  templateUrl: './createpoem.page.html',
  styleUrls: ['./createpoem.page.scss'],
})
export class CreatepoemPage implements OnInit {

  userId;
  text;
  constructor(public nav: NavController,public http:HttpClient,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,) { 
    this.userId=localStorage.getItem("userId");
  }

  ngOnInit() {
  }

  back() {
    this.nav.back();
    console.log("返回");
  }
  save(){
    this.http.post('/api/tabs/poem/create',{'uid':this.userId,"content":this.text}).subscribe(res=>{
      console.log(res);
      this.nav.navigateForward("/poem");
  })
  }

  // avatar: string = "";  //图像的src
  // presentActionSheet() {
  //   let actionSheet = this.actionSheetCtrl.create({
  //     buttons: [{
  //       text: '拍照',
  //       role: 'takePhoto',
  //       handler: () => {
  //         this.takePicture();
  //       }
  //     }, {
  //       text: '从相册选择',
  //       role: 'chooseFromAlbum',
  //       handler: () => {
  //         this.chooseFromAlbum();
  //       }
  //     }, {
  //       text: '取消',
  //       role: 'cancel',
  //       handler: () => {
  //         console.log("cancel");
  //       }
  //     }]
  //   });

  //   actionSheet.present().then(value => {
  //     return value;
  //   });
  // }

  userLogo;
  // takePicture(){
  //   console.log("调用相机");
  //   //设置选项
  //   const options:CameraOptions = {
  //     quality:100,
  //     sourceType:this.camera.PictureSourceType.CAMERA,
  //     destinationType:this.camera.DestinationType.FILE_URI,
  //     encodingType:this.camera.EncodingType.JPEG,
  //     mediaType:this.camera.MediaType.PICTURE
  //   }
  //   var that=this;
  //   //获取图片
  //   this.camera.getPicture(options).then((imageDate)=>{
  //     //获取成功
  //     console.log(imageDate);
  //     if(imageDate){
  //       that.userLogo = this.webview.converFileSrc(imageDate);
  //     }
  //   },(err)=>{
  //     console.log("获取图片失败");
  //   });
  // }

  img; //存放照片
  takePhoto() {
    // const options: CameraOptions = {
    //   quality: 100,
    //   allowEdit: true,
    //   targetWidth: 200,
    //   targetHeight: 200,
    //   saveToPhotoAlbum: true,
    //   destinationType: this.camera.DestinationType.DATA_URL,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE
    // };
    // var that=this;
    // this.camera.getPicture(options).then(imageData => {
    //   console.log('Image URI: ' + imageData);
    //   that.img=document.getElementById('img');
    //   that.img.style.display="block";
    //   this.userLogo='data:image/jpeg;base64,'+imageData;
    // }, error => {
    //   console.log('Error: ' + error);
    // });
  }

  //从相册选择
  chooseFromAlbum() {
  //   const options: ImagePickerOptions = {
  //     //maximumImagesCount: 1,
  //     quality: 100,
  //     width: 200,
  //     height: 200,
  //     outputType:1
  //   };
  //  // var that=this;
  //   this.imagePicker.getPictures(options).then(imageData => {
  //       this.img=document.getElementById('img');
  //       this.img.style.display="block";
  //        this.avatar='data:image/jpeg;base64,'+imageData;
  //     // }
  //   }, error => {
  //     console.log('Error: ' + error);
  //   });
  }

//只能选一个图片
  presentAlert() {
    // let alert = this.alertCtrl.create({title: "上传失败", message: "只能选择一张图片作为头像哦", buttons: ["确定"]});
    // alert.present().then(value => {
    //   return value;
    // });
  }

}
