import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SensorsPage} from '../sensors/sensors';
import {LoginPage} from '../login/login';
import {SignUpPage} from '../sign-up/sign-up';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToDash(){
  this.navCtrl.push(SensorsPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  login(){
    this.navCtrl.push(LoginPage);
    }
  
    signup(){
      this.navCtrl.push(SignUpPage);
}

}
