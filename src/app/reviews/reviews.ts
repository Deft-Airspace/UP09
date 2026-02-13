import { Component, input } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews {
  img = input<string>();
  review = input<string>();
  username = input<string>();
}
