import { Component } from '@angular/core';
import { Album } from '../albums';
import { Albums } from '../fake-db';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
 albums : Album[];
 constructor(){
  this.albums =[];
 }
 ngOnInit(): void{
  this.albums = Albums;
 }

}
