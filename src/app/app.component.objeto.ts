import { Component } from '@angular/core';
import { TipoObjeto } from "./tipoobjeto";
import { Objeto } from "./objeto";
import { NgForm, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';
import firefox = require('selenium-webdriver/firefox');
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/* SIEMPRE HAY QUE DECLARAR ESTO EN EL FICHERO APP.MODULE.TS */
@Component({
  selector: 'alta-obj',
  templateUrl: './app.objeto.html',
  styles:[`
    .tareas {
      list-style-type:none;
    }
  `] 
  
})


export class AppComponentObjeto { 
 
  objetos = objetosLista;
  /* declaramos una variable de tipoObjeto, vamos a cargar el objeto que clickemos en la lista para borrar */
  objetoElegido:Objeto;
  modo = "alta";
  tipos = tiposLista;

  constructor(private http: Http){
    this.vaciarObjetoElegido();
    this.refreshObjetos();
    this.refreshTipos();
   
  }

  elegirObjeto(_objeto:Objeto):void{
    this.objetoElegido = _objeto;
  }

  eliminarObjeto():void{
  

    this.http.delete('https://obpja153012.herokuapp.com/api/objeto/'+this.objetoElegido._id).subscribe(res => {

      this.refreshObjetos();

       })
     

  }

  onSubmit(form: NgForm){
    console.log(form.value);
    const { value: body } = form;
    this.http.post('https://obpja153012.herokuapp.com/api/objeto',body).subscribe(res => {
      console.log(res);

      this.refreshObjetos();  
    })
  
  }

  onSubmitEliminarObjeto(form: NgForm){
    
    this.http.delete('https://obpja153012.herokuapp.com/api/objeto/'+this.objetoElegido._id).subscribe(res => {

      this.vaciarObjetoElegido();
      this.refreshObjetos();

       })
  
  }

  refreshObjetos(){
      this.http.get('https://obpja153012.herokuapp.com/api/objeto').subscribe(res => {

       /**tuve que poner corchetes y comillas o no andaba */
          this.objetos= JSON.parse(res["_body"]);
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