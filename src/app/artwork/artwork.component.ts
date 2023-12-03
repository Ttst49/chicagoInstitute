import {Component} from '@angular/core';
import {Artwork} from "../artwork";
import {ArtworkService} from "../artwork.service";
import {RouterLink} from "@angular/router";
import { NgForOf} from "@angular/common";

@Component({
  selector: 'app-artwork',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
  ],
  templateUrl: './artwork.component.html',
  styleUrl: './artwork.component.css'
})
export class ArtworkComponent {

  artworks :Artwork[] = []
  errorMessage!:string
  tmpArtworks:any

  constructor(private ArtworkService:ArtworkService) {
    this.getAllArtworks()
  }


  getAllArtworks(){
    this.ArtworkService.getAllArtworks().subscribe({
      next: (artworksFromFetch )=>{
        this.tmpArtworks = artworksFromFetch.data
        this.tmpArtworks.forEach((artwork: Artwork)=>{
          artwork = {
            id: artwork.id,
            title: artwork.title,
            image_id : artwork.image_id,
            artist_title : artwork.artist_title,
          }
          this.artworks.push(artwork)
        })},
      error: (error)=>{
        this.errorMessage = error
      }
    })
  }

  getImageForArtworkFromId(id:string){
    return "https://www.artic.edu/iiif/2/"+id+"/full/843,/0/default.jpg"
  }


  getArtworkById(id:number){
    return this.artworks.find((artwork:Artwork)=>artwork.id == id)!
  }


}
