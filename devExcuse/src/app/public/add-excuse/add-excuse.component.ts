import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExcuseService } from 'src/app/_services/excuse.service';

@Component({
  selector: 'app-add-excuse',
  templateUrl: './add-excuse.component.html'
})
export class AddExcuseComponent{
  
  constructor(private excuseService: ExcuseService) { }

  Msgerror = '';

  // Form with Validator
  excuseForm = new FormGroup({
    code: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100000)]),
    tag: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]*'), Validators.maxLength(1000)]),
    message: new FormControl('', [Validators.required, Validators.maxLength(1000)])
  });

  onSave(): void {
    this.Msgerror = '';
    
    if(this.excuseForm.valid){
      this.excuseService.create(this.excuseForm.value).subscribe({
        error: (err: any) => {
          this.Msgerror = err.error;
        } 
      });
    }
    else {
      this.Msgerror = "Le formulaire n'est pas valide";
    } 
  }
  

}
