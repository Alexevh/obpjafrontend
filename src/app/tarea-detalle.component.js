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
var tarea_1 = require("./tarea");
var TareaDetalleComponent = (function () {
    function TareaDetalleComponent() {
    }
    return TareaDetalleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", tarea_1.Tarea)
], TareaDetalleComponent.prototype, "tareaElegidaDetalle", void 0);
TareaDetalleComponent = __decorate([
    core_1.Component({
        selector: 'mi-tarea-detalle',
        template: "\n        <div *ngIf=\"tareaElegidaDetalle\">\n        <h2>{{tareaElegidaDetalle.tituloTarea}}</h2>\n        <div><label>{{tareaElegidaDetalle.id}}</label></div>\n        <div>\n            <label>Nombre:</label>\n            <input [(ngModel)]=\"tareaElegidaDetalle.tituloTarea\">\n        </div>\n        </div>\n    "
    })
], TareaDetalleComponent);
exports.TareaDetalleComponent = TareaDetalleComponent;
//# sourceMappingURL=tarea-detalle.component.js.map