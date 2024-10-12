import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonActionSheet, IonButtons, IonItem, IonToggle } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { camera, moon, sunnyOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonActionSheet, IonButtons, IonItem, IonToggle],
})
export class HomePage implements OnInit{

  public imageSrc: string | undefined = '';
  public isDarkMode = false;
  public actionSheetButtons = [
    {
      text: 'Importar desde la galería',
      data: {
        action: 'import',
      },
    },
    {
      text: 'Abrir la camara',
      data: {
        action: 'photo',
      },
    },
    {
      text: 'Cerrar',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  constructor() {
    addIcons({ camera, moon, sunnyOutline});
  }

  ngOnInit() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize the dark palette based on the initial
    // value of the prefers-color-scheme media query
    this.initializeDarkPalette(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkPalette(mediaQuery.matches));
  }

  logResult(ev: { detail: any; }) {
    switch(ev.detail.data.action){
      case 'import':
        this.takePicture();
        break;
      case 'photo':
        this.takePicture();
        break;
      default:
        break;
    }
  }

  // Check/uncheck the toggle and update the palette based on isDark
  initializeDarkPalette(isDark: boolean) {
    this.toggleDarkPalette(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark palette
  toggleChange() {
    this.toggleDarkPalette(!this.isDarkMode);
  }

  // Add or remove the "ion-palette-dark" class on the html element
  toggleDarkPalette(shouldAdd: boolean) {
    this.isDarkMode = shouldAdd
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }


  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    const imageUrl = image.webPath;
    this.imageSrc = imageUrl;
  };
}
