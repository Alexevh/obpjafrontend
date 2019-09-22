import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* los componentes hay que declararlos aca o el sistema no los ve */
import { AppComponent }  from './app.component';
import { AppComponentModTipo }  from './app.component.modtipo';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, AppComponentModTipo],
  bootstrap:    [ AppComponent, AppComponentModTipo ]
})
export class AppModule { }
