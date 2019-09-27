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
  objetos2 = this.objetos;
  estados = [ 'Excelente', 'Bueno', 'Aceptable', 'Malo', 'Hecho percha' ];



  constructor(private http: Http){
  
    this.refreshObjetos();
    this.objetos2 = this.objetos;
  }

 


   refreshObjetos(){
    this.delay(6000);
     this.http.get('https://obpja153012.herokuapp.com/api/objeto').subscribe(res => {

       /**tuve que poner corchetes y comillas o no andaba */
          this.objetos= JSON.parse(res["_body"]);
          console.log(' estoy en refres objetos', this.objetos)
        })
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}
  
  filtrarEstado(estadoObjetos:String){
    


         this.objetos2 = this.objetos;
         this.delay(3000);
        var listanueva =[];

        for (var i=0; i<this.objetos2.length; i++)
        {
            if (this.objetos2[i]["estadoObjeto"]==estadoObjetos)
            {
                listanueva.push(this.objetos2[i]);
            }
        }

        this.objetos2 = listanueva;
      }
}
  




const objetosLista = [
  {}
];

