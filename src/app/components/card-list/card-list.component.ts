import { Component, Input, OnInit } from '@angular/core';
import { GetUnidadesService } from 'src/app/services/get-unidades.service';
import { Location } from '../types/location-interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})


export class CardListComponent implements OnInit {

  @Input() unidadesFiltradas : Location[] = [];

  constructor() {
    
  }
  ngOnInit(): void {
    console.log(this.unidadesFiltradas);
  }
  

}
