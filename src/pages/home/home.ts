import {Component} from "@angular/core";
import {NavController, PopoverController, LoadingController} from "ionic-angular";
import * as moment from 'moment';
import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";
import { DbService } from "../../services/db.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  fecha;
  cantidad = 0;
  constructor(
    public nav: NavController, 
    public popoverCtrl: PopoverController,
    public service: DbService,
    public loadingCtrl: LoadingController
  ) {
    this.fecha = moment().locale('es').format('LL');
    this.getCuentas();
  }

  getCuentas(){
    let loader = this.loadingCtrl.create({
      content: "Cargando Datos"
    });
    loader.present();

    this.service.getUserAccounts(this.service.dataUser.id).subscribe(
      result => {
        if(result['mensaje']){
          this.cantidad = result['mensaje'].length
        }
        loader.dismiss();
      }, error => {
        loader.dismiss();
        console.log(error)
      }
    )
  }

  // to go account page
  goToAccount() {
    this.nav.push(SettingsPage);
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

}

//
