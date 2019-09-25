"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
/* SIEMPRE HAY QUE DECLARAR ESTO EN EL FICHERO APP.MODULE.TS */
var AppComponentObjeto = (function () {
    function AppComponentObjeto(http) {
        this.http = http;
        this.objetos = objetosLista;
        this.modo = "alta";
        this.tipos = tiposLista;
        this.vaciarObjetoElegido();
        this.refreshObjetos();
        this.refreshTipos();
    }
    AppComponentObjeto.prototype.elegirObjeto = function (_objeto) {
        this.objetoElegido = _objeto;
    };
    AppComponentObjeto.prototype.eliminarObjeto = function () {
        var _this = this;
        this.http.delete('https://obpja153012.herokuapp.com/api/objeto/' + this.objetoElegido._id).subscribe(function (res) {
            _this.refreshObjetos();
        });
    };
    AppComponentObjeto.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form.value);
        var body = form.value;
        this.http.post('https://obpja153012.herokuapp.com/api/objeto', body).subscribe(function (res) {
            console.log(res);
            _this.refreshObjetos();
        });
    };
    AppComponentObjeto.prototype.onSubmitEliminarObjeto = function (form) {
        var _this = this;
        this.http.delete('https://obpja153012.herokuapp.com/api/objeto/' + this.objetoElegido._id).subscribe(function (res) {
            _this.vaciarObjetoElegido();
            _this.refreshObjetos();
        });
    };
    AppComponentObjeto.prototype.refreshObjetos = function () {
        var _this = this;
        this.http.get('https://obpja153012.herokuapp.com/api/objeto').subscribe(function (res) {
            /**tuve que poner corchetes y comillas o no andaba */
            _this.objetos = JSON.parse(res["_body"]);
        });
    };
    AppComponentObjeto.prototype.editarObjeto = function (form) {
        var _this = this;
        var body = form.value;
        this.http.put('https://obpja153012.herokuapp.com/api/objeto/' + this.objetoElegido._id, body).subscribe(function (res) {
            console.log(res);
            _this.vaciarObjetoElegido();
            _this.refreshObjetos();
        });
    };
    AppComponentObjeto.prototype.vaciarObjetoElegido = function () {
        var objeto = { "_id": "", "numeroOrden": 0, "tipoObjeto": "", "estadoObjeto": "", "descripcionObjeto": "" };
        this.objetoElegido = objeto;
    };
    AppComponentObjeto.prototype.refreshTipos = function () {
        var _this = this;
        this.http.get('https://obpja153012.herokuapp.com/api/tipoobjeto').subscribe(function (res) {
            /**tuve que poner corchetes y comillas o no andaba */
            _this.tipos = JSON.parse(res["_body"]);
        });
    };
    return AppComponentObjeto;
}()); /*fin  */
AppComponentObjeto = __decorate([
    core_1.Component({
        selector: 'alta-obj',
        templateUrl: './app.objeto.html',
        styles: ["\n    .tareas {\n      list-style-type:none;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponentObjeto);
exports.AppComponentObjeto = AppComponentObjeto;
var objetosLista = [
    {}
];
var tiposLista = [
    {}
];
//# sourceMappingURL=app.component.objeto.js.map