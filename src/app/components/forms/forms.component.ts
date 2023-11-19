import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnidadesService } from 'src/app/services/get-unidades.service';
import { Location } from '../types/location-interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

const 
export class FormsComponent implements OnInit{
  results: Location[] = [];
  filtredResults : Location[] = [];
  formGroup!: FormGroup;

  constructor(public formBuilder : FormBuilder,public unidadesService : GetUnidadesService) {

  }

  ngOnInit(): void {
    this.unidadesService.getAllUnidades().subscribe(
      data => {
        this.results = data.locations;
        this.filtredResults = data.locations
      }
    );
    this.formGroup = this.formBuilder.group({
      periodo : '',
      unidadesFechadas : true
    }) 
  }

    onSubmit() {
      if(!this.formGroup.value.unidadesFechadas) {
        this.filtredResults = this.results.filter(location => location.opened);
      } else {
        this.filtredResults = this.results;
      }

    }

    onClear() {
      this.formGroup.reset();
    }
}
