import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app'; // Asegúrate que tu clase en app.ts se llame 'App'

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));