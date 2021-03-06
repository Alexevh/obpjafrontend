"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
/* los componentes hay que declararlos aca o el sistema no los ve */
var app_component_1 = require("./app.component");
var app_component_modtipo_1 = require("./app.component.modtipo");
var app_component_objeto_1 = require("./app.component.objeto");
var modObjeto_1 = require("./modObjeto");
var app_component_listadoobjetos_1 = require("./app.component.listadoobjetos");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, app_component_modtipo_1.AppComponentModTipo, app_component_objeto_1.AppComponentObjeto, modObjeto_1.ModObjeto, app_component_listadoobjetos_1.ListadoObjeto],
        bootstrap: [app_component_1.AppComponent, app_component_modtipo_1.AppComponentModTipo, app_component_objeto_1.AppComponentObjeto, modObjeto_1.ModObjeto, app_component_listadoobjetos_1.ListadoObjeto],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map