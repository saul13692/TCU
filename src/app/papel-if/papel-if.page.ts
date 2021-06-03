import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-papel-if',
  templateUrl: './papel-if.page.html',
  styleUrls: ['./papel-if.page.scss'],
})
export class PapelIfPage implements OnInit {
  items: any;
  
  

  lista = [{id:37, nombre:"Cono Krunchy Torta Chilena",image:"../../assets/productos/37.jpg"},
          {id: 40, nombre:"Mini Sandwich dos pinos ",image:"../../assets/productos/40.jpg"},
          {id: 29, nombre:"Mantequilla Sin Sal",image:"../../assets/productos/29.jpg"},

          
    
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
      message: 'Azul',
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
