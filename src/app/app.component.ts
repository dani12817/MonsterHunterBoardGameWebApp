import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatListModule } from '@angular/material/list';
import { MATERIAL_TABLE } from '../db';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, MatListModule,
    //TranslatePipe, TranslateDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MonsterHunterBoardGameWebApp';

  constructor() {
    for (let index = 0; index < MATERIAL_TABLE.length; index++) {
      const element = MATERIAL_TABLE[index];
      if (element.id != index) {
        console.log("NO OK "+element.name);
      }
    }
  }
}
