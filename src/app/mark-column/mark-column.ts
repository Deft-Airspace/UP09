import { Component, input } from '@angular/core';

@Component({
  selector: 'app-mark-column',
  imports: [],
  templateUrl: './mark-column.html',
  styleUrl: './mark-column.scss',
})
export class MarkColumn {
  htext = input<string>();
  imgmark = input<string>();
  ptext = input<string>();
}
