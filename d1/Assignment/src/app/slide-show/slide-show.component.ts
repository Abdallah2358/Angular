import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})

export class SlideShowComponent {
  imgs = [
    'https://images.unsplash.com/photo-1680509146561-a9bbf1629812?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
    'https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=1080&q=80',
    'https://images.unsplash.com/photo-1611918126831-0a8352d6196f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=1080&q=80',
    'https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=1080&q=80'
  ]

   interval :any;

  imgIndex = 0;
  nextImg = () => {
    this.imgIndex = (this.imgIndex + 1) % this.imgs.length;

  }
  prevImg = () => {
    this.imgIndex = (this.imgIndex + this.imgs.length - 1) % this.imgs.length;
  }
  slideShow = () => {
    this.interval = setInterval(() => {
      this.nextImg();
    },1500);
  }
  stopShow = () => {
    clearInterval(this.interval);
  }
}
