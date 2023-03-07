import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../albums';
import { AlbumsService } from '../albums.service';
import { photos } from '../photos';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  album : Album;
  photos : photos[];

  constructor(private route :ActivatedRoute, private albumService :AlbumsService){
    this.album = {} as Album;
    this.photos = [{}] as photos[];
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      let id2 = params.get('id');
      if(id2){
        let id = +id2;
        this.albumService.getAlbum(id).subscribe((response)=>{
          this.album = response;
        },
        (error)=>{
          console.log(error);
        }
        );
        this.albumService.getPhotos(id).subscribe((response) => {
            this.photos = response.slice(0,4);
          },
          (error) => {
            console.log(error);
          }
        );
      }
    })
  }
  back() {
    window.location.href = `http://localhost:4200/albums/${this.album.id}`;
  }

}
