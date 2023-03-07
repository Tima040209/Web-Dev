import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private client:HttpClient) { }
  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>("https://jsonplaceholder.typicode.com/albums")
  } 
  getAlbum(id:number):Observable<Album>{
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }
  addAlbum(album : Album):Observable<Album>{
    return this.client.post<Album>('https://jsonplaceholder.typicode.com/albums',album)
  }
}
