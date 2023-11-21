import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UnidadesResponse } from '../components/types/unidades-response-interface';
import { Location } from '../components/types/location-interface';

@Injectable({
  providedIn: 'root'
})
export class GetUnidadesService {
  readonly baseUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";

  private unidadesSubject : BehaviorSubject<Location[]> = new BehaviorSubject<Location[]>([]);
  private todasUnidades$ : Observable<Location[]> = this.unidadesSubject.asObservable();
  private unidadesFiltradas : Location[] = [];



  constructor(private httpClient : HttpClient) { 
      this.httpClient.get<UnidadesResponse>(this.baseUrl).subscribe(data => {
        this.unidadesSubject.next(data.locations);
        this.unidadesFiltradas = data.locations;
      })
  }

  getTodasUnidades() : Observable<Location[]> {
       return this.todasUnidades$;
  }

  getUnidadesFiltradas() {
    return this.unidadesFiltradas;
  }

  setUnidadesFiltradas(unidades : Location[]) {
    this.unidadesFiltradas = unidades;
  }
}
