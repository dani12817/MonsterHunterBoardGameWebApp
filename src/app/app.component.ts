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

}
