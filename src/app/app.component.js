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
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.titulo = 'Lista de Tareas';
        this.tipos = tiposLista;
        this.modo = "alta";
        this.vaciarTipoElegido();
        this.refreshTipos();
    }
    AppComponent.prototype.elegirTipo = function (_tipo) {
        this.tipoElegido = _tipo;
    };
    AppComponent.prototype.eliminarTipo = function () {
        var _this = this;
        this.http.delete('https://obpja153012.herokuapp.com/api/tipoobjeto/' + this.tipoElegido._id).subscribe(function (res) {
            _this.refreshTipos();
        });
    };
    AppComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form.value);
        var body = form.value;
        this.http.post('https://obpja153012.herokuapp.com/api/tipoobjeto', body).subscribe(function (res) {
            console.log(res);
            _this.refreshTipos();
        });
    };
    AppComponent.prototype.onSubmitEliminarTipo = function (form) {
        var _this = this;
        this.http.delete('https://obpja153012.herokuapp.com/api/tipoobjeto/' + this.tipoElegido._id).subscribe(function (res) {
            _this.vaciarTipoElegido();
            _this.refreshTipos();
        });
    };
    AppComponent.prototype.refreshTipos = function () {
        var _this = this;
        this.http.get('https://obpja153012.herokuapp.com/api/tipoobjeto').subscribe(function (res) {
            /**tuve que poner corchetes y comillas o no andaba */
            _this.tipos = JSON.parse(res["_body"]);
        });
    };
    AppComponent.prototype.editarTipo = function (form) {
        var _this = this;
        var body = form.value;
        this.http.put('https://obpja153012.herokuapp.com/api/tipoobjeto/' + this.tipoElegido._id, body).subscribe(function (res) {
            console.log(res);
            _this.vaciarTipoElegido();
            _this.refreshTipos();
        });
    };
    AppComponent.prototype.onSubmit2 = function (buttonType, form) {
        if (buttonType === "Alta") {
            this.onSubmit(form);
        }
        if (buttonType === "Edicion") {
            this.editarTipo(form);
        }
    };
    AppComponent.prototype.vaciarTipoElegido = function () {
        var tipo = { "_id": "", "nombreTipo": "", "codigoTipo": "" };
        this.tipoElegido = tipo;
    };
    return AppComponent;
}()); /*fin  */
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.tipoobjeto.html',
        styles: ["\n    .tareas {\n      list-style-type:none;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
var tiposLista = [
    {}
];
//# sourceMappingURL=app.component.js.map