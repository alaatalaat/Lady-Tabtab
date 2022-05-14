import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  faceData(){
    return this.http.get('../../assets/json/face.json');
  }

  bodyData(){
    return this.http.get('../../assets/json/body.json');
  }

  hairData(){
    return this.http.get('../../assets/json/hair.json');
  }
}
