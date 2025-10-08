
import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

@Injectable()
export class CommonMethods {
    public static dialogConfig(width: string, panelClass: string, data?: any): MatDialogConfig<any> {
        return {width: width, panelClass: panelClass, data: data, disableClose: true}
    }

}