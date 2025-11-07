import { Injectable } from "@angular/core";

import { BaseMapper } from "..";

import { DocumentLocal, DocumentLocalDto } from "../../models";

@Injectable({
  providedIn: 'root'
})
export class DocumentLocalMapper extends BaseMapper<DocumentLocal, DocumentLocalDto> {

    public dtoToModel(dto: DocumentLocalDto) : DocumentLocal {
        throw new Error("not Implemented")
    }

    public modelToDto(model: DocumentLocal) : DocumentLocalDto {
        return {
            ...model
        };
    }

}