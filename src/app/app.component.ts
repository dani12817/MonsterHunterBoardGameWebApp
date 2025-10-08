import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatListModule } from '@angular/material/list';

import { MATERIAL_TABLE } from '../db/material';
import { MONSTER_TABLE } from '../db/monster';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

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

  material = MATERIAL_TABLE;
  monster = MONSTER_TABLE;

  constructor() {
    for (let index = 0; index < this.material.length; index++) {
      this.material[index].id = index+1;
    }


    for (const mons of this.monster) {
      mons.gathering?.forEach(g => {
        for (let index = 0; index < g.materials.length; index++) {
          if (g.materials[index] > 30) {
            g.materials[index] = g.materials[index]+1;
          }
        }
        /*g.materials?.forEach(m => {
          if (m > 30) {
            m++;
          }
        });*/
      });

      for (let index = 0; index < mons.materials.length; index++) {
        if (mons.materials[index] > 30) {
          mons.materials[index] = mons.materials[index]+1;
        }
      }
    }

    console.log(this.material);
    console.log("MONSTER_TABLE", MONSTER_TABLE);
  }
}
