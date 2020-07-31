import { enableProdMode } from '@angular/core'; //Módulo Raíz
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; /*Indica a la WebPack que importe
el contenido de la carpeta ./app/.  */
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
