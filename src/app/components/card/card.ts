import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Jogador } from '../../shared/models/Jogador';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {

  @Input() jogador: Jogador = {} as Jogador
  @Output() escalar = new EventEmitter<Jogador>()

  escalarJogador(){
    this.escalar.emit(this.jogador);
  }
 
}
