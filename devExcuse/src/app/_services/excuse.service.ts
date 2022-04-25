import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExcuseService {

  private baseUrl = `${environment.apiUrl}/excuse`;
  constructor(private http: HttpClient) { }
  
  // create excuse
  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  // get random excuse
  getRandom(message: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/${message}`);
  }

  //get excuse by code
  get(code: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/http_code/${code}`);
  }
}
