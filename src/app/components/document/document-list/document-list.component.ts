import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { DocumentCardComponent } from '../../../shared/components';

import { DocumentLocalService } from '../../../providers';
import { DocumentLocalDto } from '../../../models';

@Component({
  selector: 'app-document-list',
  imports: [
    RouterModule,
    MatButtonModule, MatIconModule,
    DocumentCardComponent
  ],
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.scss'
})
export class DocumentListComponent {
  private _documentService = inject(DocumentLocalService);

  documentList: DocumentLocalDto[] = this._documentService.getAllDto();

  constructor() { }

}
