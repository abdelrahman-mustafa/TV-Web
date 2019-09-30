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
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
/*
  Generated class for the ServiceHandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceHandlerProvider = /** @class */ (function () {
    function ServiceHandlerProvider(http) {
        this.http = http;
        // console.log('Hello ServiceHandlerProvider Provider');
    }
    /**
     * Created by K.A.
     * App services handler, takes service parameters and returns http observable
     * @param url service url
     * @param method service method e.g. "GET" & "POST"
     * @param token user's token to be authorized for excecuting service, if null noting will be sent
     * @param request request body.
     * @param specialHeaders Special headers if needed.
     */
    ServiceHandlerProvider.prototype.runService = function (url, method, token, request, specialHeaders, params) {
        var headers;
        if (specialHeaders) {
            headers = specialHeaders;
        }
        else {
            headers = {
                "Content-Type": "application/json"
            };
            if (token) {
                headers.Authorization = "Bearer " + token;
            }
        }
        var requestOptions = {
            body: request,
            headers: headers,
            params: params,
        };
        return this.http.request(method, url, requestOptions);
    };
    ServiceHandlerProvider = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ServiceHandlerProvider);
    return ServiceHandlerProvider;
}());
exports.ServiceHandlerProvider = ServiceHandlerProvider;
//# sourceMappingURL=service-handler.service.js.map