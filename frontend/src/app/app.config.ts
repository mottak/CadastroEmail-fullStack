import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch())]
};

// provideClientHydration -> rederiza apenas o que foi atualizado no db
// provideHttpClient(withFetch()) -> para conseguir fazer requisições ao back, pois estou usando renderização do lado do servidor