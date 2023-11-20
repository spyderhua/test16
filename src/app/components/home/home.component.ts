import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items = [
    {
      title: 'About',
    },
    {
      title: 'Skills',
    },
    {
      title: 'Hobbies',
    }
  ];
}
