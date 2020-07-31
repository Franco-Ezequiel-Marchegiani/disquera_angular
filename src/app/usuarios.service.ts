import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  getUsuarios(){
    
    return this.http.get('https://randomuser.me/api/?results=25')
  }
  save(data){
    return this.http.post("http://localhost:3000/productos",data)
  }
}
