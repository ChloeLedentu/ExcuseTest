import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Excuse } from 'src/app/model/excuse.model';
import { ExcuseService } from 'src/app/_services/excuse.service';

@Component({
    selector: 'app-detail-excuse',
    templateUrl: './detail-excuse.component.html'
})

export class DetailExcuseComponent implements OnInit {

    code?: number;
    excuse!: Excuse;
    MsgError = '';
    
    constructor(private excuseService: ExcuseService, private route: ActivatedRoute){ 
    }


    ngOnInit(): void {
        //route -> get code number 
        this.route.params.subscribe((params : any) => {
            this.code = +params['http_code'];
         });

         //if code is not number -> redirection
        if(this.code === undefined || this.code === null)
         window.location.href = '/lost';
        
        //get excuse 
        this.excuseService.get(this.code!).subscribe({
            next: (data: any) => {
              this.excuse = data;
              
            },
            error: (err: any) => {
              this.MsgError = err.error;
              window.location.href = '/lost';
            }
          });
    }

    
    
}
