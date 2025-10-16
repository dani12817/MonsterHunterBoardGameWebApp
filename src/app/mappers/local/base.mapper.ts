import { BaseModel } from "../../models";

export abstract class BaseMapper<E extends BaseModel, D> {

    public abstract dtoToModel(dto: D) : E;

    public dtoToModelList(list: D[]) : E[] {
        let modelList: E[] = [];
        for (const dto of list) {
            modelList.push(this.dtoToModel(dto));
        }
        return modelList;
    }

    public abstract modelToDto(model: E) : D;

    public modelToDtoList(list: E[]) : D[] {
        let dtoList: D[] = [];
        for (const model of list) {
            dtoList.push(this.modelToDto(model));
        }
        return dtoList;
    }

}