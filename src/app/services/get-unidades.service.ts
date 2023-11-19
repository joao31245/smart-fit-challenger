import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnidadesResponse } from '../components/types/unidades-response-interface';

@Injectable({
  providedIn: 'root'
})
export class GetUnidadesService {
  readonly baseUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";
  constructor(private httpClient : HttpClient) { 

  }

  getAllUnidades() : Observable<UnidadesResponse> {
       return this.httpClient.get<UnidadesResponse>(this.baseUrl);
  }
}
