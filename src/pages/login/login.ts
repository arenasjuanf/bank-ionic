import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";
import { DbService } from "../../services/db.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public nav: NavController,
    public forgotCtrl: AlertController, 
    public menu: MenuController, 
    public toastCtrl: ToastController,
    private dbService: DbService,
    private formBuilder: FormBuilder

  ) {
    this.initForm();
    this.menu.swipeEnable(false);
  }


  private formulario: FormGroup;

  initForm(){
    this.formulario = this.formBuilder.group({
      documento: ['', Validators.required],
      clave: ['', Validators.required],
    });
  }


  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    const documento = this.formulario.get('documento').value;
    const clave = this.formulario.get('clave').value;
    this.dbService.iniciarSesion(documento,clave).subscribe(
      result => {
        if(result['success']){
          localStorage.setItem('logged', 'true');
          localStorage.setItem('datosUsuario', JSON.stringify(result));
          this.nav.setRoot(HomePage);
        }
      }, error => {
        console.log('error: ', error);
      }
    )
    //
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
