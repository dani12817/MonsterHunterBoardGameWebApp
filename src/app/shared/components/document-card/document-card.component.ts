import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { DocumentLocalDto } from '../../../models';

@Component({
  selector: 'document-card',
  imports: [
    RouterModule,
    MatButtonModule, MatIconModule
  ],
  templateUrl: './document-card.component.html',
  styleUrl: './document-card.component.scss'
})
export class DocumentCardComponent {
  @Input({ required: true }) document!: DocumentLocalDto;
}
