import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { GatheringPhaseDto } from '../../../models';

@Component({
  selector: 'gathering-card',
  imports: [
    RouterModule,
    MatButtonModule, MatIconModule,
    TranslatePipe
  ],
  templateUrl: './gathering-card.component.html',
  styleUrl: './gathering-card.component.scss'
})
export class GatheringCardComponent {
  protected readonly _dialog = inject(MatDialog);

  @Input({ required: true }) gathering!: GatheringPhaseDto;

}
