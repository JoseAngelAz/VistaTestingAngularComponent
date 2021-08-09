import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../clientes.service';
import {Cliente,Grupo} from '../cliente.model';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.scss']
})
export class AltaClienteComponent implements OnInit {
//El componente declara un par de propiedades, el cliente y el array de grupos.
  cliente!: Cliente;// no estoy seguro si va como array
  grupos: Grupo[] = [];

//instancia del servicio por dependecy inyection  
  constructor(private clientesService:ClientesService) { }
/*
Posteriormente se ejecuta ngOnInit().
En este punto ya se ha recibido el servicio de clientes,
por lo que lo puedo usar para generar los valores que
necesito en las propiedades del componente.
*/
  ngOnInit(): void {
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
  }
/**
 * El método nuevoCliente() es el que se ejecutará cuando,
 * desde el formulario de alta, se produzca el envío de datos.
 * En este código usamos el servicio clientesService,
 * para agregar el cliente y generar un cliente nuevo,
 * para que el usuario pueda seguir dando de alta clientes
 * sin machacar los clientes anteriormente creados.
 */
  nuevoCliente():void{
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.nuevoCliente();
  }

}
