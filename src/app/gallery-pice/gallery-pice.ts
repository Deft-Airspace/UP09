import { Component, input } from '@angular/core';

@Component({
  selector: 'app-gallery-pice',
  imports: [],
  templateUrl: './gallery-pice.html',
  styleUrl: './gallery-pice.scss',
})
export class GalleryPice {
  img = input<string>();
}
