import { Injectable } from '@angular/core';
import {Cliente,Grupo} from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: Cliente[] = [];
  private grupos:Grupo[] = [];

  constructor() { 

    this.grupos = [
      {id:0,nombre:'Sin definir'},
      {id:1,nombre:'Sin definir'},
      {id:2,nombre:'Sin definir'},
      {id:3,nombre:'Sin definir'},
    ];
    this.clientes = [];
  }

  getGrupos(){
    return this.grupos;
  }

  getClientes(){
    return this.clientes;
  }

  agregarCliente(cliente:Cliente){
    this.clientes.push(cliente);
  }

  nuevoCliente():Cliente{
    return {
      id:this.clientes.length,
      nombre:'',
      cif:'',
      direccion:'',
      grupo:0
    };
  }
  
}
