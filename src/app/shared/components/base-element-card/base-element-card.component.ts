import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { BaseDto } from '../../../models';

@Component({
  selector: 'base-element-card',
  imports: [
    RouterModule,
    MatButtonModule, MatIconModule,
    TranslatePipe
  ],
  templateUrl: './base-element-card.component.html',
  styleUrl: './base-element-card.component.scss'
})
export class BaseElementCardComponent {
  @Input({ required: true }) element!: BaseDto;
  @Input() actionLabel: string = "actions.show.card";

  @Output() action = new EventEmitter<number>();

  actionMethod() {
    this.action.emit();
  }
}
