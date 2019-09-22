import { Component } from '@angular/core';
import { TipoObjeto } from "./tipoobjeto";
import { NgForm, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';
import firefox = require('selenium-webdriver/firefox');
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  modo = "alta";

  constructor(private http: Http){
    this.vaciarTipoElegido();
    this.refreshTipos();
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

      this.vaciarTipoElegido();
      this.refreshTipos();

       })
  
  }

  refreshTipos(){
      this.http.get('https://obpja153012.herokuapp.com/api/tipoobjeto').subscribe(res => {

       /**tuve que poner corchetes y comillas o no andaba */
          this.tipos = JSON.parse(res["_body"]);
        })
  }



  editarTipo(form: NgForm){
    
    const { value: body } = form;
    

    this.http.put('https://obpja153012.herokuapp.com/api/tipoobjeto/'+this.tipoElegido._id,body).subscribe(res => {
      console.log(res);
      this.vaciarTipoElegido();

      this.refreshTipos();  
    })
  
  }

  onSubmit2(buttonType: String, form: NgForm): void {
    if(buttonType==="Alta") {
        this.onSubmit(form);
    }
    if(buttonType==="Edicion"){
        this.editarTipo(form);
    }
}


vaciarTipoElegido()
{
  var tipo = {"_id":"", "nombreTipo":"", "codigoTipo":""};
  this.tipoElegido = tipo;
}

} /*fin  */


const tiposLista = [
  {}
];
