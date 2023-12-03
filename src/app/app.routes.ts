import { Routes } from '@angular/router';
import {ArtworkComponent} from "./artwork/artwork.component";
import {ArtworkDetailComponent} from "./artwork-detail/artwork-detail.component";

export const routes: Routes = [
  {
    path: "", redirectTo:"/artworks", pathMatch: "full"
  },
  {
    path: "artworks", component: ArtworkComponent
  },
  {
    path: "artworks/:id", component: ArtworkDetailComponent
  }
];
