import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // slide选项
  slideOpts = {
    effect: 'flip'  //滑动效果
  };
  constructor() { }
}


