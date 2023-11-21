import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GetUnidadesService } from './services/get-unidades.service';
import { Location } from './components/types/location-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mostrarLista = new BehaviorSubject(false);
  lista : Location[] = [];

  constructor(private unidadeService: GetUnidadesService) {

  }

  public onSubmit() {
    this.mostrarLista.next(true);
    this.lista = this.unidadeService.getUnidadesFiltradas();
    console.log(this.lista);
  }
}
