import {Component, inject} from '@angular/core';
import {ArtworkComponent} from "../artwork/artwork.component";
import {Artwork} from "../artwork";
import {ActivatedRoute} from "@angular/router";
import {NgIf} from "@angular/common";

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

  artwork: Artwork
  route : ActivatedRoute = inject(ActivatedRoute)
  artworkComponent : ArtworkComponent = inject(ArtworkComponent)

  constructor() {
    let id = this.route.snapshot.params["id"]
    this.artwork = this.artworkComponent.getArtworkById(id)


  }



}
