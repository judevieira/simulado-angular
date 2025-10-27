import { KeyValuePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [KeyValuePipe],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  @Input() colunas : string[] = []
  @Input() dadosTabela : any[] = []

}
