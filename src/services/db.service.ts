import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { LoginPage } from "../pages/login/login";
import { App } from "ionic-angular";
//import { HomePage } from "../pages/home/home";

@Injectable(
)
export class DbService {
    urlBase = 'http://127.0.0.1:8000/api/';
    dataUser = {};
    constructor(
        private http: HttpClient,
        public app: App
        //public nav: NavController
    ) {
        
    }

    construirRuta(opcion: string) {
        return this.urlBase + opcion;
    }

    iniciarSesion(documento, clave) {
        const credenciales = 'login/' + documento + '/' + clave;
        return this.http.get(this.construirRuta(credenciales));
    }

    checkearSesion() {
        if (localStorage.getItem('logged') && localStorage.getItem('datosUsuario')) {
            return true;
        } else {
            return false;
        }
    }

    cerrarSesion() {
        localStorage.setItem('logged', 'false');
        localStorage.removeItem('datosUsuario');
        return true;
        //this.nav.setRoot(LoginPage);
        //this.router.navigateByUrl('/login');
    }

    getUserAccounts(idUser) {
        return this.http.get(this.construirRuta('cuentas/listar/' + idUser));
    }

    crearCodigo(datos){
        return this.http.post(this.construirRuta('codigo/crear'), datos)
    }

}
