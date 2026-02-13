import { Component } from '@angular/core';
import { GalleryPice } from '../gallery-pice/gallery-pice';
import { Reviews } from '../reviews/reviews';

@Component({
  selector: 'app-section5',
  imports: [GalleryPice, Reviews],
  templateUrl: './section5.html',
  styleUrl: './section5.scss',
})
export class Section5 {}
