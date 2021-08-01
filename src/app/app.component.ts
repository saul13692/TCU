import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Busqueda', url: '/busqueda', icon: 'search' },
    { title: 'Mapa', url: '/mapa', icon: 'map' },
    { title: 'Horarios', url: '/horarios', icon: 'timer' },
    { title: 'Paginas', url: '/compa', icon: 'newspaper' },
    { title: 'Contacto', url: '/contacto', icon: 'person' }, /* Aqui estan las listas de las paginas principales
    de igual forma se coloca su direccón para ser utilizada cuando se selecciona*/
  ];
  
  public labels = [
    { title: 'Plastico', ruta: '/plastico', icon: 'search'}, 
    { title: 'Carton', ruta: '/compa', icon: 'search'}, 
    { title: 'Papel', ruta: '/mapa', icon: 'search'},
  ]; // Estos labels no están en función, pero de igual forma se pueden habilitar
  
  constructor() {}
  
  
}
