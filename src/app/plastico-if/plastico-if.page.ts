import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-plastico-if',
  templateUrl: './plastico-if.page.html',
  styleUrls: ['./plastico-if.page.scss'],
})
export class PlasticoIfPage implements OnInit {
  items: any;
  
  
 lista = [{id: 2, nombre:"Gaseosa Cotuba Cero 2 L",image:"../../assets/productos/2.png"},
          {id: 3, nombre:"Agua Purificada Alma 1 L",image:"../../assets/productos/3.png"},
          {id: 7, nombre:"Té Blanco Frutal Fibra 2.2 L",image:"../../assets/productos/7.jpg"},
          {id: 8, nombre:"Té Frío Limón 2.2 L(",image:"../../assets/productos/8.jpg"},
          {id: 15, nombre:"Leche Pasteurizada 2% 1 gl",image:"../../assets/productos/15.jpg"},
          {id: 16, nombre:"Queso Americano 192 g",image:"../../assets/productos/16.png"},
          {id: 17, nombre:"Queso Cottage 310 g",image:"../../assets/productos/17.jpg"},
          {id: 18, nombre:"Queso Rallado Cheddar 225 g",image:"../../assets/productos/18.png"},
          {id: 19, nombre:"Queso Crema 350 g",image:"../../assets/productos/19.jpg"},
          {id: 20, nombre:"Queso Tipo Turrialba 500 gr",image:"../../assets/productos/20.jpg"},
          {id: 21, nombre:"Yogurt Griego Plus Fresa Banano 200 ml",image:"../../assets/productos/21.jpg"},
          {id: 22, nombre:"Yogurt Deligurt Batido Griego Original 150 gr",image:"../../assets/productos/22.jpg"},
          {id: 23, nombre:"Yogurt Arándano 500g",image:"../../assets/productos/23.png"},
          {id: 24, nombre:"Yogurt Batido Lula Pecaditos 120 gr",image:"../../assets/productos/24.jpg"},
          {id: 25, nombre:"Yogurt Líquido Piña - Coco 750 ml",image:"../../assets/productos/25.png"},
          {id: 26, nombre:"Natilla taza",image:"../../assets/productos/26.jpg"},
          {id: 27, nombre:"Natilla La Granja Doy Pack 400gr",image:"../../assets/productos/27.jpg"},
          {id: 31, nombre:"Confite Morenito 50 und",image:"../../assets/productos/31.png"},
          {id: 35, nombre:"Helado +Proteína Chocochips 252 g",image:"../../assets/productos/35.png"},
          {id: 36, nombre:"Helado Coronado Crema 1/4 gl",image:"../../assets/productos/36.png"},
          {id: 53, nombre:"Fuze te ",image:"../../assets/productos/53.png"},
          {id: 55, nombre:"Fanta botella ",image:"../../assets/productos/55.jpg"},
          {id: 58, nombre:"Fanta botella ",image:"../../assets/productos/58.jpg"},
          {id: 61, nombre:"Coca botella",image:"../../assets/productos/61.jpg"},
          {id: 62, nombre:"Powerade botella",image:"../../assets/productos/62.jpg"},
               
    
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
      subHeader:"Color de Basurero",
      message: 'Amarillo',
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


