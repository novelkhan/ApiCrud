import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Man } from './models/man.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ManService {

  constructor(private http: HttpClient) { }

  getAllmen(): Observable<Man[]> {
    return this.http.get<Man[]>(`${environment.manApiBaseUrl}/man`);
  }
}
