import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Man } from './models/man.model';
import { environment } from 'src/environments/environment.development';
import { AddMan } from './models/add-man.model';

@Injectable({
  providedIn: 'root'
})
export class ManService {

  constructor(private http: HttpClient) { }

  getAllmen(): Observable<Man[]> {
    return this.http.get<Man[]>(`${environment.manApiBaseUrl}/man`);
  }

  addMan(model: AddMan): Observable<void> {
    return this.http.post<void>(`${environment.manApiBaseUrl}/man`, model);
  }
}
