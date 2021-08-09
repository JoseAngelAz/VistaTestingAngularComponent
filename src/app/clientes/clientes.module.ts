import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ClientesService } from './clientes.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AltaClienteComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AltaClienteComponent
  ],
  providers:[
    ClientesService,
    FormsModule
  ]
})
export class ClientesModule { }
