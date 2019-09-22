import { Component, Input } from '@angular/core';
import { TipoObjeto } from "./tipoobjeto";
import { NgForm, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';
import firefox = require('selenium-webdriver/firefox');
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'modtipo',
  templateUrl: './app.mtipo.html',
  styles:[`
    .tareas {
      list-style-type:none;
    }
  `] 
  
})


export class AppComponentModTipo { 
  
  titulo = 'Lista de Tareas';
  tipos = tiposLista;
  /* declaramos una variable de tipoObjeto, vamos a cargar el objeto que clickemos en la lista para borrar */
  tipoElegido:TipoObjeto;
  modo = "alta";

  constructor(private http: Http){
    this.vaciarTipoElegido();
    this.refreshTipos();

  }



  editarTipo(form: NgForm){
    
    const {value: body} = form;
    
    //var envio = {"nombreTipo":this.tipoElegido.nombreTipo, "codigoTipo":this.tipoElegido.codigoTipo}

    this.http.put('https://obpja153012.herokuapp.com/api/tipoobjeto/'+this.tipoElegido._id,body).subscribe(res => {
      console.log(res);
      this.refreshTipos();
      this.vaciarTipoElegido();
      

      
    })
  
  }


  vaciarTipoElegido()
  {
    var tipo = {"_id":"", "nombreTipo":"", "codigoTipo":""};
    this.tipoElegido = tipo;
  }

  elegirTipo(_tipo:TipoObjeto):void{
    this.tipoElegido = _tipo;
  }

  refreshTipos(){
    this.http.get('https://obpja153012.herokuapp.com/api/tipoobjeto').subscribe(res => {

     /**tuve que poner corchetes y comillas o no andaba */
        this.tipos = JSON.parse(res["_body"]);
      })
}

} /*fin  */

const tiposLista = [
    {}
  ];