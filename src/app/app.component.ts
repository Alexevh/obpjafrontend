import { Component } from '@angular/core';
import { TipoObjeto } from "./tipoobjeto";
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import firefox = require('selenium-webdriver/firefox');

@Component({
  selector: 'my-app',
  templateUrl: './app.tipoobjeto.html',
  styles:[`
    .tareas {
      list-style-type:none;
    }
  `] 
  
})

export class AppComponent { 
  titulo = 'Lista de Tareas';
  tipos = tiposLista;


  /* declaramos una variable de tipoObjeto, vamos a cargar el objeto que clickemos en la lista para borrar */
  tipoElegido:TipoObjeto;

  constructor(private http: Http){

  }

  elegirTipo(_tipo:TipoObjeto):void{
    this.tipoElegido = _tipo;
  }

  eliminarTipo():void{
  
    this.http.delete('https://obpja153012.herokuapp.com/api/tipoobjeto/'+this.tipoElegido._id).subscribe(res => {

      this.refreshTipos();

       })
     

  }

  onSubmit(form: NgForm){
    console.log(form.value);
    const { value: body } = form;
    this.http.post('https://obpja153012.herokuapp.com/api/tipoobjeto',body).subscribe(res => {
      console.log(res);

      this.refreshTipos();  
    })
  
  }

  onSubmitEliminarTipo(form: NgForm){
    
    this.http.delete('https://obpja153012.herokuapp.com/api/tipoobjeto/'+this.tipoElegido._id).subscribe(res => {

      this.refreshTipos();

       })
  
  }

  refreshTipos(){
      this.http.get('https://obpja153012.herokuapp.com/api/tipoobjeto').subscribe(res => {

       /**tuve que poner corchetes y comillas o no andaba */
          this.tipos = JSON.parse(res["_body"]);
        })
  }
}



const tiposLista = [
  {}
];
