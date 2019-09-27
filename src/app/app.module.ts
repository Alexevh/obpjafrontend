import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* los componentes hay que declararlos aca o el sistema no los ve */
import { AppComponent }  from './app.component';
import { AppComponentModTipo }  from './app.component.modtipo';
import { AppComponentObjeto } from "./app.component.objeto";
import { ModObjeto }  from "./modObjeto";
import { ListadoObjeto }  from "./app.component.listadoobjetos";

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, AppComponentModTipo, AppComponentObjeto, ModObjeto, ListadoObjeto],
  bootstrap:    [ AppComponent, AppComponentModTipo, AppComponentObjeto, ModObjeto, ListadoObjeto],
})
export class AppModule { }
