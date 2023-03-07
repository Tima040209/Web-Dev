import { Component, OnInit } from '@angular/core';
import { topBarItem,topBarItems } from '../top-bar-items';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent {
  topBarItems= [...topBarItems];

}
