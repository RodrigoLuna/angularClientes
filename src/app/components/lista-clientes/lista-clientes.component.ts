import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente, Grupo } from '../../interfaces/cliente';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss']
})
export class ListaClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  clientes$: Observable<Cliente[]>;
  clientesSubscritpion: Subscription;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clientes$ = this.clienteService.getClientes$();
    this.clientesSubscritpion = this.clientes$.subscribe(clientes => this.clientes = clientes);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.clientesSubscritpion.unsubscribe();
  }
}
