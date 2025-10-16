import { BaseMapper } from "../../mappers";
import { BaseLocal } from "../../models";

export abstract class BaseLocalService<E extends BaseLocal, D> {
  protected _databaseTable: E[];

  protected _baseMapper: BaseMapper<E, D>;

  constructor(baseMapper: BaseMapper<E, D>, databaseTable: E[]) {
    this._baseMapper = baseMapper;
    this._databaseTable = databaseTable;
  }
    
  getAll() {
    return this._databaseTable;
  }

  getAllDto() {
    return this._baseMapper.modelToDtoList(this.getAll());
  }

}