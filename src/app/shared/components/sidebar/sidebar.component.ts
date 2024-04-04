import { Component } from '@angular/core';

interface MenuItem {
  title: string,
  route: string,
}

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
    public reactiveMenu:MenuItem[]= [
      {title:'Basicos', route: './reactive/basic'},
      {title:'Dinámicos', route: './reactive/dynamic'},
      {title:'Switches', route: './reactive/switches'},
    ];

  public authMenU:MenuItem[]= [
    {title:'Registro', route: './auth'}
  ];

}
