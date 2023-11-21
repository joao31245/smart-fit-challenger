import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnidadesService } from 'src/app/services/get-unidades.service';
import { Location } from '../types/location-interface';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})


export class FormsComponent implements OnInit {
  @Output() submitEvent = new EventEmitter();
    
  results: Location[] = [];
  filtredResults: Location[] = [];
  formGroup!: FormGroup;

  constructor(public formBuilder: FormBuilder, public unidadesService: GetUnidadesService, public filterService : FilterService) {

  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      periodo: '',
      unidadesFechadas: true
    })
  }

  onSubmit() {
    this.unidadesService.getTodasUnidades().subscribe(
      data => {
        this.results = data;
        this.filtredResults = data;
      }
    );
   this.filtredResults = this.filterService.filtrar(this.results, this.formGroup.value.unidadesFechadas, this.formGroup.value.periodo);
   this.unidadesService.setUnidadesFiltradas(this.filtredResults);

   this.submitEvent.emit();
  }

  onClear() {
    this.formGroup.reset();
    this.filtredResults = [];
    this.results = [];
  }
}
