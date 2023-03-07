import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Album } from './albums';
import { photos } from './photos';

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
  getPhotos(id:number):Observable<photos[]>{
    return this.client.get<photos[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  }
  updateAlbumTitle(id: number, newTitle: string): Observable<any> {
    return this.client.put(`https://jsonplaceholder.typicode.com/albums/${id}`, { title: newTitle })
      .pipe(catchError((error) => throwError(error)));
  }
}
