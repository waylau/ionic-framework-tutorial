# 播放视频

本节演示，如何在Ionic应用中播放视频。

借助 `com.moust.cordova.videoplayer`. 插件，可以实现利用移动设备中播放视频。

## 初始化应用

```
ionic start native-video-player blank --cordova
```

其中`native-video-player`是我们自定义的应用名称。`--cordova`指定了项目将集成 Cordova 框架。


使用`ionic serve`来验证应用是否可以正常启动。

## 安装插件

```
ionic cordova plugin add cordova-plugin-videoplayer

npm install @ionic-native/video-player
```


## 实现播放视频

添加组件

```html
<button class="button button-dark" (click)="playVideo()">播放视频</button>
<ion-label>{{msg}}</ion-label>
```

playVideo 方法定义如下：

```ts
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
```

其中，closeVideo为关闭视频的方法。