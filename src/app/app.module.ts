import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* los componentes hay que declararlos aca o el sistema no los ve */
import { AppComponent }  from './app.component';
import { AppComponentModTipo }  from './app.component.modtipo';
import { AppComponentObjeto } from "./app.component.objeto";
import { AppComponentModObjeto}  from "./app.component.modobjeto"

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, AppComponentModTipo, AppComponentObjeto, AppComponentModObjeto],
  bootstrap:    [ AppComponent, AppComponentModTipo, AppComponentObjeto, AppComponentModObjeto ]
})
export class AppModule { }
