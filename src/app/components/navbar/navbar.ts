import { Component, Input } from '@angular/core';
interface NavItem{
  texto : string,
  status : string
}

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  @Input() itens: NavItem[] = []
}
