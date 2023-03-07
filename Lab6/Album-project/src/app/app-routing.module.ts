import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumsComponent } from './albums/albums.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { "path": "home", component:HomeComponent},
  { "path": "about", component:AboutComponent},
  { "path": "albums",component:AlbumsComponent},
  { "path": "albums/:id", component:AlbumDetailsComponent},
  { "path": "", redirectTo : "home", pathMatch:"full"},
  {  path : "**", component: ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
