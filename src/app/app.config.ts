import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideAnimations(),
    provideToastr(),

    // Toastr providers
    provideAnimations(),
    provideToastr({
      timeOut: 4000,
      preventDuplicates: true,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'decreasing',
      newestOnTop: true,
    }),
  ]
};
