import { Component, OnInit } from '@angular/core';
import { TipoObjeto } from "./tipoobjeto";
import { Objeto } from "./objeto";
import { NgForm, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';
import firefox = require('selenium-webdriver/firefox');
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/* SIEMPRE HAY QUE DECLARAR ESTO EN EL FICHERO APP.MODULE.TS */
@Component({
  selector: 'listobj',
  templateUrl: './listadoObjetos.html',
  styles:[`
    .tareas {
      list-style-type:none;
    }
  `] 
  
})


export class ListadoObjeto   {

 
  objetos = objetosLista;
  estados = [ 'Excelente', 'Bueno', 'Aceptable', 'Malo', 'Hecho percha' ];



  constructor(private http: Http){
  
    this.refreshObjetos();
    
  }

 


  async refreshObjetos(){
    await this.http.get('https://obpja153012.herokuapp.com/api/objeto').subscribe(res => {

       /**tuve que poner corchetes y comillas o no andaba */
          this.objetos= JSON.parse(res["_body"]);
          console.log(' estoy en refres objetos', this.objetos)
        })
  }

  filtrarEstado(estadoObjetos:String){
    
         this.refreshObjetos();

        var listanueva =[];

        for (var i=0; i<this.objetos.length; i++)
        {
            if (this.objetos[i]["estadoObjeto"]==estadoObjetos)
            {
                listanueva.push(this.objetos[i]);
            }
        }

        this.objetos = listanueva;
      }
}
  




const objetosLista = [
  {}
];

