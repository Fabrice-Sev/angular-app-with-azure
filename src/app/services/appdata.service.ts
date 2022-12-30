import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppdataService {

  backendUrl = "https://azure-node-app-backend.azurewebsites.net/api/route"

  constructor(private http: HttpClient) { }

  showAll(): Observable<[]>  {
    return this.http.get<[]>(this.backendUrl);
  }
  
}
