import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MapasService } from './services/mapas.service';


import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDsm3TyQpnqgp4dYgFzqRzcRZcBc0vf9yY'
    }),
    FormsModule
  ],
  providers: [MapasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
