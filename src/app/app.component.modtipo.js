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
var AppComponentModTipo = (function () {
    function AppComponentModTipo(http) {
        this.http = http;
        this.titulo = 'Lista de Tareas';
        this.tipos = tiposLista;
        this.modo = "alta";
        this.vaciarTipoElegido();
        this.refreshTipos();
    }
    AppComponentModTipo.prototype.editarTipo = function (form) {
        var _this = this;
        var body = form.value;
        console.log('body', body);
        console.log('tipoElegido', this.tipoElegido);
        //var envio = {"nombreTipo":this.tipoElegido.nombreTipo, "codigoTipo":this.tipoElegido.codigoTipo}
        this.http.put('https://obpja153012.herokuapp.com/api/tipoobjeto/' + this.tipoElegido._id, body).subscribe(function (res) {
            console.log(res);
            _this.refreshTipos();
            _this.vaciarTipoElegido();
        });
    };
    AppComponentModTipo.prototype.vaciarTipoElegido = function () {
        var tipo = { "_id": "", "nombreTipo": "", "codigoTipo": "" };
        this.tipoElegido = tipo;
    };
    AppComponentModTipo.prototype.elegirTipo = function (_tipo) {
        this.tipoElegido = _tipo;
        console.log("tipo ", _tipo);
    };
    AppComponentModTipo.prototype.refreshTipos = function () {
        var _this = this;
        this.http.get('https://obpja153012.herokuapp.com/api/tipoobjeto').subscribe(function (res) {
            /**tuve que poner corchetes y comillas o no andaba */
            _this.tipos = JSON.parse(res["_body"]);
        });
    };
    return AppComponentModTipo;
}()); /*fin  */
AppComponentModTipo = __decorate([
    core_1.Component({
        selector: 'modtipo',
        templateUrl: './app.mtipo.html',
        styles: ["\n    .tareas {\n      list-style-type:none;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponentModTipo);
exports.AppComponentModTipo = AppComponentModTipo;
var tiposLista = [
    {}
];
//# sourceMappingURL=app.component.modtipo.js.map