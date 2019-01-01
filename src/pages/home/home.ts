import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegisterPage} from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
slides=[
{
	title:"welcome to your safe home",
	description:"The application that ensures your <b>safety</b>",
	image:"../../assets/hm.png"
},
{
	title:"It is recommended !",
	description:"It is highly recommended that <b>all your family members</b> subscribe to our application for more efficient use",
	image:"../..assets/rc.png"
},
{
	title:"thank you for your confidence",
	description:"This application is brought to you by Mr.Abid and Mr.Darghouthi",
	image:"../../assets/logo.png"
}

]

  constructor(public navCtrl: NavController) {

  }
  goToRegister(){
  	this.navCtrl.push(RegisterPage);
  }

}
