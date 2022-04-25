import { Component, ViewChild } from '@angular/core';
import { Excuse } from 'src/app/model/excuse.model';

@Component({
    selector: 'app-show-excuse',
    templateUrl: './show-excuse.component.html'
})

export class ShowExcuseComponent {

    showElement = true;
    
    //init excuse
    excuse = [
        new Excuse({
            tag: 'Ma super application',
            code: 0,
            message: 'Le message correspondant'
        })
    ];

    //loader before show message
    loader(event: any): void {
        this.showElement = false;
        setTimeout(() => {
            this.showElement = true;
          }, event);
        
    }
    
}
