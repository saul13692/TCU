import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-metal-if',
  templateUrl: './metal-if.page.html',
  styleUrls: ['./metal-if.page.scss'],
})
export class MetalIfPage implements OnInit {
  items: any;
  
  

 lista = [{id: 32, nombre:"Tableta Guayabita",image:"../../assets/productos/32.jpg"},
          {id: 33, nombre:"Chocolate Gallito Corazón Almendra",image:"../../assets/productos/33.jpg"},
          {id: 38, nombre:"Helado Mmmio",image:"../../assets/productos/38.jpg"},
          {id: 39, nombre:"Cremoleta dos pinos ",image:"../../assets/productos/39.jpg"},
          {id: 41, nombre:"Leche Pinito En Polvo",image:"../../assets/productos/41.jpg"},
          {id: 42, nombre:"Leche Inline en Polvo",image:"../../assets/productos/42.png"},
          {id: 43, nombre:"Leche Delactomy en Polvo",image:"../../assets/productos/43.png"},
          {id: 44, nombre:"Leche Cre-C en Polvo",image:"../../assets/productos/44.png"},
          {id: 45, nombre:"Leche en Polvo Coronado",image:"../../assets/productos/45.png"},
          {id: 47, nombre:"Galleta mackay mantequilla ",image:"../../assets/productos/47.jpg"},
          {id: 48, nombre:"Chocolate en polvo milo nestle",image:"../../assets/productos/48.jpg"},
          {id: 49, nombre:"Chocolate en polvo Nesquik ",image:"../../assets/productos/49.jpg"},
          {id: 50, nombre:"Barra de chocolate super 8 nestle ",image:"../../assets/productos/50.jpg"},
          {id: 51, nombre:"Tableta de chocolate sahne-nuss nestle ",image:"../../assets/productos/51.jpg"},
          {id: 52, nombre:"Tableta de chocolate nestle frutos secos ",image:"../../assets/productos/52.jpg"},
               
    
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

