import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit{
  results = [];
  
  formGroup!: FormGroup;

  constructor(private formBuilder : FormBuilder) {

  }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      periodo : '',
      unidadesFechadas : false
    }) 
  }

    onSubmit() {
      console.log(this.formGroup.value);
    }
    onClear() {
      this.formGroup.reset();
    }
}
