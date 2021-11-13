import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroLetra',
})
export class FiltroLetraPipe implements PipeTransform {
  transform(jugadores: any[], value: string): any {
    if (jugadores.length == 0 || !jugadores) {
      return jugadores;
    }
    return jugadores.filter(
      (jugador) =>
        jugador.nombre.toLowerCase().indexOf(value.toLowerCase()) >= 0
    );
  }
}
