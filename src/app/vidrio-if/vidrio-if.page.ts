import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vidrio-if',
  templateUrl: './vidrio-if.page.html',
  styleUrls: ['./vidrio-if.page.scss'],
})
export class VidrioIfPage implements OnInit {
  items: any;
  
  

 lista = [{id: 56, nombre:"Fanta botella",image:"../../assets/productos/56.jpg"},
          {id: 57, nombre:"Coca botella",image:"../../assets/productos/57.jpg"},
          {id: 71, nombre:"cerveza corona ",image:"../../assets/productos/71.jpg"},
          {id: 72, nombre:"cerveza budweiser",image:"../../assets/productos/72.jpg"},
          {id: 73, nombre:"cerveza sltela atrios",image:"../../assets/productos/73.jpg"},
          {id: 74, nombre:"cerveza artesanal costarricense ",image:"../../assets/productos/74.jpg"},
               
    
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
      message: 'Verde',
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
