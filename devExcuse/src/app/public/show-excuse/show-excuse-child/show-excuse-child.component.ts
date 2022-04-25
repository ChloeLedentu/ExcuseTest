import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ExcuseService } from 'src/app/_services/excuse.service';
import { Excuse } from 'src/app/model/excuse.model';

@Component({
  selector: 'app-show-excuse-child',
  templateUrl: 'show-excuse-child.component.html'
})
export class ShowExcuseChildComponent {

  constructor(private excuseService: ExcuseService) {
  }

  @Input() excuse!: Excuse;
  @Output() loader = new EventEmitter<number>();

  // **  Button Event  **
  newExcuse(): void {
    // Loader
    // random number convert into second
    this.loader.emit(Math.floor((Math.random() * (5-1) + 1)*1000));

    // random excuse
    this.excuseService.getRandom(this.excuse.message!).subscribe({
      next: (data: any) => {
        this.excuse.tag = data["tag "];
        this.excuse.message = data["message "];
        this.excuse.code = data["code "];
      },
      error: (err) => {
        console.log(err.error);
      }
    });
  }
}
