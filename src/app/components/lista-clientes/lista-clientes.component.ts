import { Component, OnInit } from '@angular/core';
import { ClienteService } from "../../services/cliente.service";
import { Cliente, Grupo } from "../../interfaces/cliente";

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss']
})
export class ListaClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService:ClienteService) { }

  ngOnInit() {
    this.clientes = this.clienteService.getClientes();
  }



}
