import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Moment } from '../Moment';


@Injectable({
  providedIn: 'root'
})
export class MomentService {

    constructor(private http: HttpClient) {  }

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(`http://localhost:3333/api/moments`, formData);
  }

  }