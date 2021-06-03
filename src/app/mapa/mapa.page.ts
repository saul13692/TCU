import { Component, OnInit,ViewChild } from '@angular/core';
import {LoadingController, IonSlides} from '@ionic/angular';

declare var google;

interface Marker {
  lat: number;
  lng: number;
  title: string;
  image: string;
  text: string;
  markerObj?: any;
}

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  infoWindowRef= null;

  mapRef = null;

  markers: Marker[] = [
    {
      lat:   9.9757138,
      lng: -84.8318928,
      title: 'Plaza el Pacifico',
      image: 'assets/imgs/20.jpg',
      text: 'Los primeros Jueves de cada mes la comunidad puede ir a dejar sus residuos separados frente a la plaza del pacifico, donde se lleva a cabo una campaña de recolección de reciclaje.'
    
    },
    {
      lat:   9.9918549,
      lng: -84.6678328,
      title: 'Municipalidad de Esparza',
      image: 'assets/imgs/22.jpg',
      text: 'Materiales:papel, cartón, envases tetra brik, latas de aluminio, hojalatas (latas de atun, etc), envases de vidrio, bolsas plásticas, envases plásticos (galones y botellas)'
    },
    {
      lat:   9.9817492,
      lng: -84.7223233,
      title: 'INOLASA',
      image: 'assets/imgs/21.jpg',
      text: 'Materiales: Botellas PET y HDPE'
    },
    {
      lat:  10.0918976,
      lng: -84.7290735,
      title: 'Municipalidad de Miramar',
      image: 'assets/imgs/23.jpg',
      text: 'Materiales: Papel,Cartón,Botellas Plásticas,Hojalta,Aluminio(envases),Tetra Pack,\n Galones'
    }
  ];

  constructor(
    private loadingCtrl: LoadingController) {
      this.infoWindowRef = new google.maps.InfoWindow(); }


  ngOnInit(){

    this.loadMap();
  }
  async loadMap() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const mapEle: HTMLElement = document.getElementById("map");
    const marker = this.markers[0]
    this.mapRef= new google.maps.Map(mapEle,{
      center:{lat: marker.lat, lng: marker.lng},
      zoom:17
    });
    google.maps.event
    .addListenerOnce(this.mapRef,"idle",() => {
      loading.dismiss();
      this.loadMarkers();
    });
   
  }
  private addMaker(itemMarker: Marker) {
    const marker = new google.maps.Marker({
      position: { lat: itemMarker.lat, lng: itemMarker.lng },
      map: this.mapRef,
      title: itemMarker.title
    });
    return marker;
  }
  private loadMarkers(){
    this.markers.forEach(marker => {
      const markerObj = this.addMaker(marker);
      marker.markerObj = markerObj;
    });
  }

  async onSlideDidChange() {
    const currentSlide = await this.slides.getActiveIndex();
    const marker = this.markers[currentSlide];
    this.mapRef.panTo({lat: marker.lat, lng: marker.lng});

    const markerObj = marker.markerObj;

    this.infoWindowRef.setContent(marker.title);
    this.infoWindowRef.open(this.mapRef, markerObj);
  }


}