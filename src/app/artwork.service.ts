import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Artwork} from "./artwork";
import {ArtworkComponent} from "./artwork/artwork.component";

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  baseUrl: string = "https://api.artic.edu/api/v1/artworks"

  constructor(private http: HttpClient) { }

  getAllArtworks(): Observable<any> {
    return this.http.get(this.baseUrl);
  }


}
