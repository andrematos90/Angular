import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent {
  @Input() btnText! : string;
  momentForm!: FormGroup;

  ngOnInit():void{
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      image: new FormControl(''),
    });
  }

  get title(){
    return this.momentForm.get('ttile')!;
  }

  get description(){
    return this.momentForm.get('description')!;
  }

  submit(){
    if(this.momentForm.invalid){
      return;
    }
    console.log("enviou formulário")
  }
}
