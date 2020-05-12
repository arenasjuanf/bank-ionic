import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, LoadingController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {TripDetailPage} from "../trip-detail/trip-detail";
import { DbService } from "../../services/db.service";
import { CheckoutTripPage } from "../checkout-trip/checkout-trip";

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {
  // list of trips
  public trips: any;
  cuentas: any = []; 

  constructor(
    public nav: NavController, 
    public tripService: TripService,
    private service: DbService,
    public alert: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,

  ) {
    // set sample data
    // this.trips = tripService.getAll();
    this.getAccounts();
  }

  getAccounts(event?){
    let loader = this.loadingCtrl.create({
      content: "Cargando Datos"
    });

    if(!event){
      loader.present();
    }
   
    
    const idUser = JSON.parse(localStorage.getItem('datosUsuario'));
    this.service.getUserAccounts(idUser['usuario']['id']).subscribe(
      result => {
        this.cuentas = result['mensaje']
        this.cuentas.forEach(element => {
          element['imgNumber'] = Math.floor(Math.random() * 8) + 1;
        });
        if(event){
          event.complete();
        }
        loader.dismiss();
      }, error => {
        console.log('error: ', error);
        loader.dismiss();
      }
    )
  }

  // view trip detail
  viewDetail(id) {
    this.nav.push(TripDetailPage, {id: id});
  }

  entrarACuenta(cuenta){

    let modal = this.alert.create({
      title: 'Ver cuenta' ,
      message: 'Ingresa Clave De La Cuenta ' + cuenta.id,
      inputs: [
        {
          name: 'Clave',
          type: 'password',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            
            if(modal['data']['inputs'][0]['value'] === cuenta.password){

              this.nav.push(CheckoutTripPage, cuenta);

            }else{

              let toast = this.toastCtrl.create({
                message: 'Clave Incorrecta',
                duration: 2000,
                position: 'bottom',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: false
              });
              toast.present();

            }

          }
        }
      ]
 
    });
    modal.present();
  }

  doRefresh(event){
    this.getAccounts(event);
  }

}
