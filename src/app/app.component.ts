import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'test16';
  items = [
    {
      title: 'About',
      link: '/about'
    },
    {
      title: 'Skills',
      link: '/skills'
    },
    {
      title: 'Hobbies',
      link: '/hobbies'
    }
    
  ];
}
