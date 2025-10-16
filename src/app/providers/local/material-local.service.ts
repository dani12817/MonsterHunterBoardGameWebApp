import { inject, Injectable } from "@angular/core";

import { BaseLocalService } from "..";
import { MaterialLocalMapper } from "../../mappers";
import { MaterialLocal, MaterialLocalDto } from "../../models";

import { MATERIAL_TABLE } from "../../../db";

@Injectable({
  providedIn: 'root'
})
export class MaterialLocalService extends BaseLocalService<MaterialLocal, MaterialLocalDto> {

    constructor() {
        super(inject(MaterialLocalMapper), MATERIAL_TABLE);
    }

}