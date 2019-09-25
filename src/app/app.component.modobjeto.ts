import { Component, OnInit } from '@angular/core';
import { TipoObjeto } from "./tipoobjeto";
import { Objeto } from "./objeto";
import { NgForm, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';
import firefox = require('selenium-webdriver/firefox');
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/* SIEMPRE HAY QUE DECLARAR ESTO EN EL FICHERO APP.MODULE.TS */
@Component({
  selector: 'mod-obj',
  templateUrl: './app.mod.objeto.html',
  styles:[`
    .tareas {
      list-style-type:none;
    }
  `] 
  
})


export class AppComponentModObjeto   {

 
  objetos = objetosLista;
  /* declaramos una variable de tipoObjeto, vamos a cargar el objeto que clickemos en la lista para borrar */
  objetoElegido:Objeto;
  modo = "alta";
  tipos = tiposLista;

  constructor(private http: Http){
    
    console.log('la concha de mi madre');
    this.refreshObjetos();
    this.vaciarObjetoElegido();
    console.log('la concha de mi madre 2', this.objetos);

    
    
    
  }

  elegirObjeto(_objeto:Objeto):void{
    this.objetoElegido = _objeto;
  }



  refreshObjetos(){
      this.http.get('https://obpja153012.herokuapp.com/api/objeto').subscribe(res => {

       /**tuve que poner corchetes y comillas o no andaba */
          this.objetos= JSON.parse(res["_body"]);
          console.log(' estoy en refres objetos', this.objetos)
        })
  }



  editarObjeto(form: NgForm){
    
    const { value: body } = form;
    

    this.http.put('https://obpja153012.herokuapp.com/api/objeto/'+this.objetoElegido._id,body).subscribe(res => {
      console.log(res);
      
      this.vaciarObjetoElegido();

      this.refreshObjetos();  
    })
  
  }

  


vaciarObjetoElegido()
{
  var objeto = {"_id":"", "numeroOrden":0, "tipoObjeto":"", "estadoObjeto":"", "descripcionObjeto": ""};
  this.objetoElegido = objeto;
}


refreshTipos(){
    this.http.get('https://obpja153012.herokuapp.com/api/tipoobjeto').subscribe(res => {

     /**tuve que poner corchetes y comillas o no andaba */
        this.tipos = JSON.parse(res["_body"]);
      })
}

} /*fin  */


const objetosLista = [
  {}
];

const tiposLista = [
    {}
  ];