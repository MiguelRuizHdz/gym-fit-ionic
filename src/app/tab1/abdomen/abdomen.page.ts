import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-abdomen',
  templateUrl: './abdomen.page.html',
  styleUrls: ['./abdomen.page.scss'],
})
export class AbdomenPage implements OnInit {

  @ViewChild('abdomenEjercicios', { static: false }) slides: IonSlides;

  slideOpts = {
    watchSlidesProgress: true,
  };

  constructor() { }

  ionViewDidEnter() {
    this.slides.lockSwipes(true);
  }

  ngOnInit() {
  }

  siguiente(){
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }
  atras(){
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }
}
