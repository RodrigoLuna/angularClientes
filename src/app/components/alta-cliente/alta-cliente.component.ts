import { Component, OnInit } from '@angular/core';
import { Cliente, Grupo } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.scss']
})
export class AltaClienteComponent implements OnInit {

  cliente: Cliente;
  grupos: Grupo[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.cliente = this.clienteService.nuevoCliente();
    this.grupos = this.clienteService.getGrupos();
  }

  nuevoCliente(): void {
    this.clienteService.agregarCliente(this.cliente);
    this.cliente = this.clienteService.nuevoCliente();
  }


}
