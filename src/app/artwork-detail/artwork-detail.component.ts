import {Component, inject} from '@angular/core';
import {ArtworkComponent} from "../artwork/artwork.component";
import {Artwork} from "../artwork";
import {ActivatedRoute} from "@angular/router";
import {NgIf} from "@angular/common";
import {ArtworkService} from "../artwork.service";

@Component({
  selector: 'app-artwork-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  providers: [ArtworkComponent],
  templateUrl: './artwork-detail.component.html',
  styleUrl: './artwork-detail.component.css'
})
export class ArtworkDetailComponent {

  artwork!: Artwork
  route : ActivatedRoute = inject(ActivatedRoute)
  artworkService : ArtworkService = inject(ArtworkService)
  errorMessage!:string


  constructor() {
    let id = this.route.snapshot.params["id"]
    this.getArtworkById(id)
  }

  getArtworkById(id:string){
    this.artworkService.getOneArtwork(id).subscribe({
      next: (artworkFromFetch )=>{
        this.artwork = {
            id: artworkFromFetch.data.id,
            title: artworkFromFetch.data.title,
            image_id: artworkFromFetch.data.image_id,
            artist_title: artworkFromFetch.data.artist_title,
          }
        console.log(this.artwork)
        },
      error: (error)=>{
        this.errorMessage = error
      }
    })
  }

  getImageForArtworkFromId(id:string){
    return this.artworkService.getImageForArtworkFromId(id)
  }


}
