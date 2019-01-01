import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var google;
/**
 * Generated class for the AnalysisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-analysis',
  templateUrl: 'analysis.html',
})
export class AnalysisPage implements OnInit {
 sName:string;
 sDesc:string;
 sensor:{
 name:string,
 description:string,
 ico_name:string
 };
 tempdata=[['Time', 'Value'],
          ['2004',23],
          ['2005',18],
          ['2006',17],
          ['2007',18]];
  gasdata=[['Time', 'Value'],
          ['2000',23],
          ['2001',40],
          ['2002',20],
          ['2003',10]];
  motiondata=[['Time', 'Value'],
          ['2002',15],
          ['2003',11],
          ['2004',12],
          ['2005',14]];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit(){
  this.sName=this.navParams.get('pnamesensor');
  this.sDesc=this.navParams.get('pdescsensor');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnalysisPage');
  }
   drawChart() {
   var data;
   if (this.sName==="TEMPERATURE"){
        data = google.visualization.arrayToDataTable(this.tempdata);
        }
    else if(this.sName==="GAS"){
         data = google.visualization.arrayToDataTable(this.gasdata);
    }
    else{
     data=google.visualization.arrayToDataTable(this.motiondata);
    }

        var options = {
          title: 'variation of '+this.sName.toLowerCase()+' over time',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }

}
