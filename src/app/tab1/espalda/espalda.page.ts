import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-espalda',
  templateUrl: './espalda.page.html',
  styleUrls: ['./espalda.page.scss'],
})
export class EspaldaPage implements OnInit {

  @ViewChild('espaldaEjercicios', { static: false }) slides: IonSlides;

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
