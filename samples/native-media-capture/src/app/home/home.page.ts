import { Component } from '@angular/core';
import { MediaCapture, MediaFile, CaptureError, CaptureAudioOptions, CaptureVideoOptions, CaptureImageOptions } from '@ionic-native/media-capture/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  msg: string = "";

  constructor(private mediaCapture: MediaCapture) { }

  captureAudio() {
    let options: CaptureAudioOptions = { limit: 1 };// 连续录制的次数
    this.mediaCapture.captureAudio(options)
      .then(
        (mediaFiles: MediaFile[]) => {
          for (let i = 0, len = mediaFiles.length; i < len; i++) {
            let fullPath = mediaFiles[i].fullPath;
            let name = mediaFiles[i].name;
            let type = mediaFiles[i].type;
            let lastModifiedDate = mediaFiles[i].lastModifiedDate;
            let size = mediaFiles[i].size;

            console.log("fullPath: " + fullPath);
            console.log("name: " + name);
            console.log("type: " + type);
            console.log("lastModifiedDate: " + lastModifiedDate);
            console.log("lastModifiedDate: " + lastModifiedDate);
            console.log("size: " + size);

            this.msg = "fullPath: " + fullPath +
              "name: " + name +
              "type: " + type +
              "lastModifiedDate: " + lastModifiedDate +
              "lastModifiedDate: " + lastModifiedDate +
              "size: " + size;

          }
        }),
      (err: CaptureError) => {
        console.error(err);
        this.msg = "Camera issue" + err;
      }
      ;
  }

  captureImage() {
    let options: CaptureImageOptions = { limit: 1 };// 连续录制的次数
    this.mediaCapture.captureImage(options)
      .then(
        (mediaFiles: MediaFile[]) => {
          for (let i = 0, len = mediaFiles.length; i < len; i++) {
            let fullPath = mediaFiles[i].fullPath;
            let name = mediaFiles[i].name;
            let type = mediaFiles[i].type;
            let lastModifiedDate = mediaFiles[i].lastModifiedDate;
            let size = mediaFiles[i].size;

            console.log("fullPath: " + fullPath);
            console.log("name: " + name);
            console.log("type: " + type);
            console.log("lastModifiedDate: " + lastModifiedDate);
            console.log("lastModifiedDate: " + lastModifiedDate);
            console.log("size: " + size);

            this.msg = "fullPath: " + fullPath +
              "name: " + name +
              "type: " + type +
              "lastModifiedDate: " + lastModifiedDate +
              "lastModifiedDate: " + lastModifiedDate +
              "size: " + size;

          }
        }),
      (err: CaptureError) => {
        console.error(err);
        this.msg = "Camera issue" + err;
      }
      ;
  }

  captureVideo() {
    let options: CaptureVideoOptions = { limit: 1 };// 连续录制的次数
    this.mediaCapture.captureVideo(options)
      .then(
        (mediaFiles: MediaFile[]) => {
          for (let i = 0, len = mediaFiles.length; i < len; i++) {
            let fullPath = mediaFiles[i].fullPath;
            let name = mediaFiles[i].name;
            let type = mediaFiles[i].type;
            let lastModifiedDate = mediaFiles[i].lastModifiedDate;
            let size = mediaFiles[i].size;

            console.log("fullPath: " + fullPath);
            console.log("name: " + name);
            console.log("type: " + type);
            console.log("lastModifiedDate: " + lastModifiedDate);
            console.log("lastModifiedDate: " + lastModifiedDate);
            console.log("size: " + size);

            this.msg = "fullPath: " + fullPath +
              "name: " + name +
              "type: " + type +
              "lastModifiedDate: " + lastModifiedDate +
              "lastModifiedDate: " + lastModifiedDate +
              "size: " + size;

          }
        }),
      (err: CaptureError) => {
        console.error(err);
        this.msg = "Camera issue" + err;
      }
      ;
  }

}