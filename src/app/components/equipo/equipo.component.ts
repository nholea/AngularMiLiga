import { Component, Input, OnInit } from '@angular/core';

import { Jugador } from './../../interfaces/jugador.interface';
import { Equipo } from './../../interfaces/equipo.interface';

import JUGADORES from './../../../assets/data/jugadores.json';
import EQUIPOS from './../../../assets/data/equipos.json';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css'],
})
export class EquipoComponent implements OnInit {
  @Input()
  nombre: string = 'Felinos';
  status: boolean = false;
  jugadores!: Jugador[];
  equipos!: Equipo[];

  jugador: Jugador = {
    nombre: 'Sergio',
    edad: 35,
    apodo: 'Felino',
    foto: 'imagen.jpg',
    posicion: 'Delantero',
    estado: false,
  };

  step: number = 0;
  presupuesto: number = 18000000;
  actualizacion = new Date();
  aficionados: number = 1500320;
  busqueda: any = '';
  constructor() {}

  ngOnInit(): void {
    this.nombre = 'Piratas';

    this.jugadores = JUGADORES as any;
    this.equipos = EQUIPOS as any;
  }

  agregarJugador(): void {
    let jugador = 'Sergio';
    jugador = 'Iván';

    this.jugador.nombre = jugador;
  }

  actualizarEstado(jugador: Jugador, i: number, event: boolean) {
    jugador.estado = event;
    this.step = i;
  }

  activarJugador(jugador: Jugador) {
    jugador.estado = true;
  }

  mostrarDatos(i: number) {
    this.step = i;
  }
}
