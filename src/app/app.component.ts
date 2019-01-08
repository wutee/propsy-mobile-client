import {Component, OnInit} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {AuthService} from './components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menu: MenuController,
    private authService: AuthService
  ) {
    this.initializeApp();

  }

  goto(path: string): void {
    this.menu.close();
    this.router.navigate([path]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

  ngOnInit() {
    // this.router.events.subscribe((event: RouterEvent) => {
    //   if (event instanceof NavigationEnd && event.url === '/login') {
    //     this.menuCtrl.enable(false);
    //   }
    // });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
