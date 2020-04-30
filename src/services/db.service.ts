import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable(
)
export class DbService {
    urlBase = 'http://127.0.0.1:8000/api/';
    constructor(
        private http: HttpClient
    ) {
        console.log('entra');
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
        //this.router.navigateByUrl('/login');
    }

}
