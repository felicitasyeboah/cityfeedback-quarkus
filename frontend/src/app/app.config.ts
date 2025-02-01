import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection,} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      BrowserAnimationsModule,
      ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      }),
    ),
    // provideAnimations(), // Enables animations in the app
    // provideToastr({
    //   timeOut: 3000, // Default timeout for toasts
    //   positionClass: 'toast-bottom-right', // Position of the toast
    //   preventDuplicates: true, // Prevent duplicate toasts
    // }),
  ],
};
