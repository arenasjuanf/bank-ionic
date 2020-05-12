import { Component, ViewChild } from "@angular/core";
import { Platform, Nav, NavController, App } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { LoginPage } from "../pages/login/login";
import { DbService } from "../services/db.service";
import { TripsPage } from "../pages/trips/trips";
import { HomePage } from "../pages/home/home";

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  userData = {};
  appMenuItems: Array<MenuItem>;

  constructor(
    private app: App,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard,
    public service : DbService
  ) {
    
    this.initializeApp();
    this.appMenuItems = [
      { title: 'Mis Cuentas', component: TripsPage, icon: 'card' },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      this.check();
      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      /* //*** Control Keyboard
      this.keyboard.disableScroll(true); */
    });
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot();
    this.nav.push(page.component, {});
  }

  logout() {
    if(this.service.cerrarSesion()){
      this.nav.setRoot(LoginPage);
    }
  }

  check(){
    if (this.service.checkearSesion()){
      //this.nav.setRoot(HomePage);
      this.navCtrl.setRoot(HomePage);
    }
  }

  get navCtrl(): NavController {
    return this.app.getActiveNav();
  }

}
