import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public selectedItemMenu: string = '';

  public sidebarItems = [
    { label: 'Classificação', icon: 'label', url: 'brasileirao/tabela' },
    { label: 'Equipes', icon: 'label', url: 'brasileirao/times' },
    { label: 'Simulador', icon: 'label', url: 'brasileirao/simulador' },
    { label: 'Rodadas', icon: 'label', url: 'brasileirao/rodadas' },
  ]
  constructor() { }

  ngOnInit(): void {

    const menu = localStorage.getItem('menuSelecionado');
    if (menu)
      this.selectedItemMenu = menu;
    else
      this.selectedItemMenu = 'Classificação';

  }

  onSelectedItemMenu = (item: string): void => {
    this.selectedItemMenu = item;
    localStorage.setItem('menuSelecionado', item);
  }
}
