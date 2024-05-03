import { Cliente } from './../interfaces/Cliente';
import { ObservableLike } from './../../../node_modules/dot-prop/node_modules/type-fest/source/observable-like.d';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { application } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  add(clienteAdd: Cliente) {
    throw new Error('Method not implemented.');
  }
  private clientesUrl = "http://localhost:3000/clientes";
  constructor(private http: HttpClient) { }

  //Esta lista virá da API
  clientes:Cliente[] = [];


  listar(): Observable<Cliente[]>{

    return this.http.get<Cliente[]>(this.clientesUrl) as Observable<Cliente[]>;
    //return this.clientes;
  }

  getById(id:string) : Observable<Cliente>
  {
     return this.http.get(`${this.clientesUrl}/${id}`) as Observable<Cliente>
  }

  remover(id:string){
  //   const cliente = this.clientes.find(c => c.id == id);

  //   if(cliente){
  //      const index = this.clientes.indexOf(cliente);
  //      this.clientes.splice(index,1);
  //   }
  return this.http.delete(`${this.clientesUrl}/${id}`)
  }


   httpHeader = {
    headers:{
      "Content-Type":"application/json"
    }
  };


  atualizar(cliente:Cliente){
  
 return this.http.put(`${this.clientesUrl}/${cliente.id}`,cliente,this.httpHeader)

  }

  adicionar(cliente:Cliente){
  

    return this.http.post(this.clientesUrl,cliente,this.httpHeader)

    // this.clientes.push(cliente);
  }
}
