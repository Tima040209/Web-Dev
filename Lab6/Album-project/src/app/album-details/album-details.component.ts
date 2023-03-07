import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Album } from '../albums';
import { AlbumsService } from '../albums.service';
import { Albums } from '../fake-db';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit{
  album : Album;
  loaded: boolean;
  newTitle: string;
   constructor(private route : ActivatedRoute,private albumService :AlbumsService){
    this.album = {} as Album;
    this.loaded = true;
    this.newTitle="";
   }
   ngOnInit():void{
    //const id = Number(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params:ParamMap)=>{
      const id = Number(params.get('id'))
      //this.album = Albums.find((album : Album) => album.id ===id) as Album;
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album:Album)=>{
        this.album = album;
        this.loaded = true;
      })
    })

   }
   back(){
    window.location.href="http://localhost:4200/albums";
   }
   saveTitle() {
    this.albumService.updateAlbumTitle(this.album.id, this.newTitle).subscribe(
      (response) => {
        this.album.title = response.title;
        this.newTitle = "";
      }
    )
}
}