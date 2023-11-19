import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnidadesService } from 'src/app/services/get-unidades.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit{
  results = [];
  
  formGroup!: FormGroup;

  constructor(public formBuilder : FormBuilder,public unidadesService : GetUnidadesService) {

  }

  ngOnInit(): void {
    this.unidadesService.getAllUnidades().subscribe(
      data => {
        console.log(data);
      }
    );
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
