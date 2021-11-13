import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Jugador } from './../../interfaces/jugador.interface';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css'],
})
export class JugadorComponent implements OnInit {
  @Input('jugador')
  jugador!: Jugador;

  @Input()
  equipo: string = 'Sin equipo';

  @Output('onActivate')
  estado: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  desactivar() {
    this.estado.emit(false);
  }
}
