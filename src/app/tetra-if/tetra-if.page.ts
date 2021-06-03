import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tetra-if',
  templateUrl: './tetra-if.page.html',
  styleUrls: ['./tetra-if.page.scss'],
})
export class TetraIfPage implements OnInit {

  items: any;
  nombre:"";
  
  

  lista = [{id:1, nombre:"Té Rojo Reducción Arándano 1L",image:"../../assets/productos/1.png"},
          {id: 4, nombre:"Néctar Mixto Frutas 1L",image:"../../assets/productos/4.png"},
          {id: 5, nombre:"Néctar UHT In Line Mixto Frutas 1 L",image:"../../assets/productos/5.jpg"},
          {id: 6, nombre:"Néctar de Manzana L TB",image:"../../assets/productos/6.jpg"},
          {id: 9, nombre:"Jugo Manzana Mora 946 ml GT",image:"../../assets/productos/9.jpg"},
          {id: 10, nombre:"Jugo Naranja TB 1lt 2 pack",image:"../../assets/productos/10.jpg"},
          {id: 11, nombre:"Frescoleche Milán Menta 250 ml",image:"../../assets/productos/11.jpg"},
          {id: 12, nombre:"Leche UHT 2% Productores de Dos Pinos ",image:"../../assets/productos/12.jpg"},
          {id: 13, nombre:"Leche Descremada 0% Coronado 1 L Coronado",image:"../../assets/productos/13.png"},
          {id: 14, nombre:"Leche con avena UHT lt 3.5%(",image:"../../assets/productos/14.jpg"},
          {id: 34, nombre:"Chocolate Tableta Morenito Mix 200 g-Gallito ",image:"../../assets/productos/34.jpg"},
          {id: 65, nombre:"Hellmann's® Queso Cheddar 1 L Hellmans",image:"../../assets/productos/65.png"},
          
    
          ];

  constructor(public alertController: AlertController) {
    this.initializeItems();
   }

  ngOnInit() {
  }
 
  initializeItems(){
    this.items = this.lista;

  }

  async viewList(id) {
    let vlista= this.lista.filter(function(e,i){return e.id==id})[0];

    let alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: vlista.nombre,
      subHeader:'Color de Basurero',
      message: 'Gris',
      buttons: ['Salir'] 
    });

    await alert.present();
  }

  getItems(ev:any){
    this.initializeItems();
    

    let val= ev.target.value;

    if (val && val.trim() !=""){
      this.items = this.items.filter((item)=> {
        return(item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);

      })
    }
  }
  
}
