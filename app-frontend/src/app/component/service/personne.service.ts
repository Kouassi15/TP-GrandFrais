import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Personne } from '../model/personne';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})

export class PersonneService {

  // deletePersonne(id: number) {
  //   throw new Error('Method not implemented.');
  // }
  // deletepersonne(id: number) {
  //   throw new Error('Method not implemented.');
  // }


  constructor(private http: HttpClient) { }
  private bsaeUrl ='http://localhost:8080/';

  getAll(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.bsaeUrl+"personnes");
  }

  getById(id: any){
    console.log(id)
    return this.http.get(this.bsaeUrl+"personne/" + id);
  }

  create(data:any):Observable<Personne>{
    return this.http.post(this.bsaeUrl + "personne", data);
  }

  update(id: number ,personne:any){
    return this.http.put<Personne>(this.bsaeUrl+"personne/"+ id, personne);
  }

  delete(id: number){
    return this.http.delete(this.bsaeUrl+"deletePersonne/" + id);
  }

  
}
