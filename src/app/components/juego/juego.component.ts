import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/interfaces/juego.interface';
import * as JUEGOS from './../../../assets/data/juegos.json';
@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css'],
})
export class JuegoComponent implements OnInit {
  juegos!: Juego[];

  constructor() {}

  ngOnInit(): void {
    this.juegos = JUEGOS as any
  }
}
