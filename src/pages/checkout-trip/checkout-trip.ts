import {Component} from "@angular/core";
import {NavController, LoadingController, ToastController, NavParams, AlertController} from "ionic-angular";
import { DbService } from "../../services/db.service";
import { TripsPage } from "../trips/trips";


@Component({
  selector: 'page-checkout-trip',
  templateUrl: 'checkout-trip.html'
})
export class CheckoutTripPage {
  // trip data
  // number of adults
  // date

  data: any;
  monto;
  constructor(
    public modalCtrl: AlertController,
    public dbService: DbService,
    public nav: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private navParams: NavParams) {
    // set sample data
    this.data = this.navParams.data;
  }


  generarCodigo (){

    let loader = this.loadingCtrl.create({
      content: "Espera Por Favor"
    });
    loader.present();

    const objCodigo = {
      saldo: this.monto,
      codigo: new Date().getTime(),
      estado: 1,
      fk_cuenta: this.data.id
    }


    this.dbService.crearCodigo(objCodigo).subscribe(
      result => {
        if(result['success']){
          loader.dismiss();
          this.modalCodigo(objCodigo);
        }
      },
      error => {
        console.log('error: ', error);
      }
    )
  }

  modalCodigo(datos) {
    let modal = this.modalCtrl.create({
      title: 'Código: ' + datos.codigo,
      message: "Monto: "+ datos.saldo,
      buttons: [
        {
          text: 'Cerrar',
          handler: data => {
            //this.nav.setRoot(TripsPage);
            this.nav.pop();
          }
        }
      ]
    });
    modal.present();
  }
}
