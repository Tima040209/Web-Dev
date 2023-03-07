import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../albums';
import { Albums } from '../fake-db';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent {
  album : Album;
   constructor(private route : ActivatedRoute){
    this.album = {} as Album;
   }
   ngOnInit():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.album = Albums.find((album : Album) => album.id ===id) as Album;
   }
}
