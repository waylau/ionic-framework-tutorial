import { Component } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  msg: string = "";
  filePath: string = "https://static.yximgs.com/s1/videos/www_main-059ce9beee.mp4";//"file:///storage/emulated/0/DCIM/Camera/VID_20190319_152907.mp4"; // 视频路径
  
  constructor(private videoPlayer: VideoPlayer) { }

  playVideo() {
    this.videoPlayer.play(this.filePath).then(() => {
      console.log('video completed');
      this.msg = 'video completed';
    }).catch(err => {
      console.log(err);
      this.msg = 'err';
    });
  }

  closeVideo() {
    this.videoPlayer.close();
  }
}