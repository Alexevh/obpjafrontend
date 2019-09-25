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
var AppComponentModObjeto = (function () {
    function AppComponentModObjeto(http) {
        this.http = http;
        this.objetos = objetosLista;
        this.modo = "alta";
        this.tipos = tiposLista;
        console.log('la concha de mi madre');
        this.refreshObjetos();
        this.vaciarObjetoElegido();
        console.log('la concha de mi madre 2', this.objetos);
    }
    AppComponentModObjeto.prototype.elegirObjeto = function (_objeto) {
        this.objetoElegido = _objeto;
    };
    AppComponentModObjeto.prototype.refreshObjetos = function () {
        var _this = this;
        this.http.get('https://obpja153012.herokuapp.com/api/objeto').subscribe(function (res) {
            /**tuve que poner corchetes y comillas o no andaba */
            _this.objetos = JSON.parse(res["_body"]);
            console.log(' estoy en refres objetos', _this.objetos);
        });
    };
    AppComponentModObjeto.prototype.editarObjeto = function (form) {
        var _this = this;
        var body = form.value;
        this.http.put('https://obpja153012.herokuapp.com/api/objeto/' + this.objetoElegido._id, body).subscribe(function (res) {
            console.log(res);
            _this.vaciarObjetoElegido();
            _this.refreshObjetos();
        });
    };
    AppComponentModObjeto.prototype.vaciarObjetoElegido = function () {
        var objeto = { "_id": "", "numeroOrden": 0, "tipoObjeto": "", "estadoObjeto": "", "descripcionObjeto": "" };
        this.objetoElegido = objeto;
    };
    AppComponentModObjeto.prototype.refreshTipos = function () {
        var _this = this;
        this.http.get('https://obpja153012.herokuapp.com/api/tipoobjeto').subscribe(function (res) {
            /**tuve que poner corchetes y comillas o no andaba */
            _this.tipos = JSON.parse(res["_body"]);
        });
    };
    return AppComponentModObjeto;
}()); /*fin  */
AppComponentModObjeto = __decorate([
    core_1.Component({
        selector: 'mod-obj',
        templateUrl: './app.mod.objeto.html',
        styles: ["\n    .tareas {\n      list-style-type:none;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponentModObjeto);
exports.AppComponentModObjeto = AppComponentModObjeto;
var objetosLista = [
    {}
];
var tiposLista = [
    {}
];
//# sourceMappingURL=app.component.modobjeto.js.map