import { inject, Injectable } from "@angular/core";

import { BaseLocalService } from "..";
import { DocumentLocalMapper } from "../../mappers";
import { DocumentLocal, DocumentLocalDto } from "../../models";

import { DOCUMENT_TABLE } from "../../../db";

@Injectable({
  providedIn: 'root'
})
export class DocumentLocalService extends BaseLocalService<DocumentLocal, DocumentLocalDto> {

  constructor() {
    super(inject(DocumentLocalMapper), DOCUMENT_TABLE);
  }

}