import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/folder/home',
      icon: 'home'
      
    },
    {
      title: 'Calculator',
      url: '/folder/Calculator',
      icon: 'calculator'
    },
    {
      title: 'Mass Calculator',
      url: 'mass-calc-percent',
      icon: 'color-fill'
    },
    {
      title: 'Volume Calculator',
      url: 'volume-calculator',
      icon: 'beaker'
    },
    {
      title: 'Contact',
      url: 'contact',
      icon: 'mail'
    }
  ];

  constructor(
    private platform: Platform
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      SplashScreen.hide();
      StatusBar.show();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/home')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
