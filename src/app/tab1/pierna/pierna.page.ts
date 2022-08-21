import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-pierna',
  templateUrl: './pierna.page.html',
  styleUrls: ['./pierna.page.scss'],
})
export class PiernaPage implements OnInit {

  @ViewChild('piernaEjercicios', { static: false }) slides: IonSlides;

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
