import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AnalysisPage} from '../analysis/analysis'

/**
 * Generated class for the SensorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 declare var google;

@IonicPage()
@Component({
  selector: 'page-sensors',
  templateUrl: 'sensors.html',
})
export class SensorsPage implements OnInit {
@ViewChild('map') mapElement: ElementRef;
  map: any;
 	sensors=[{name:'TEMPERATURE',description:'this is the temperature inside the house',ico_name:'thermometer'},
 			 {name:'GAS',description:'this is the percentage of methane detected inside the house',ico_name:'flame'},
 			 {name:'MOTION',description:'no description',ico_name:'walk'}

 			]

  latitude:number;
  longitude:number;
  /*
  marker:{
  latitude:number,
  longitude:number,
  draggable:true
  }
  */
  ngOnInit(){
  this.latitude=57.28;
  this.longitude=-2.28;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SensorsPage');
    this.loadMap();
  }
  goToDescribe(pname:string,pdesc:string){

  this.navCtrl.push(AnalysisPage, {pnamesensor:pname,pdescsensor:pdesc});

  }
  loadMap(){
 
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

}
}
