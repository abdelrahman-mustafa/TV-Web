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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moment = require("moment");
var home_page_services_service_1 = require("src/app/services/uiServices/home-page-services.service");
var mixer;
var platform_browser_1 = require("@angular/platform-browser");
var Constants_1 = require("src/app/Constants");
var service_handler_service_1 = require("src/app/services/service-handler.service");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(homeService, sanitizer, serviceHandeler) {
        this.homeService = homeService;
        this.sanitizer = sanitizer;
        this.serviceHandeler = serviceHandeler;
        this.searchKeyword = "";
    }
    SearchComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.homeService.getSettings()];
                    case 1:
                        _a.setttings = _b.sent();
                        this.channelId = this.setttings.channelId;
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.searchArticles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.homeService.searchArticles(this.searchKeyword)];
                    case 1:
                        _a.articles = _b.sent();
                        this.articles = this.articles.map(function (article) {
                            var newArticle = article;
                            newArticle.article = _this.sanitizer.bypassSecurityTrustHtml(article.article);
                            return newArticle;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.searchVidoes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            var _this = this;
            return __generator(this, function (_a) {
                params = {
                    part: "snippet",
                    maxResults: "50",
                    channelId: this.channelId,
                    type: "video",
                    q: this.searchKeyword,
                    key: Constants_1.Constants.YOUTUBE_API_KEY
                };
                this.serviceHandeler
                    .runService("https://www.googleapis.com/youtube/v3/search", "GET", null, null, null, params)
                    .subscribe(function (response) {
                    // console.log(response);
                    _this.vidoes = response.items;
                    // console.log(this.vidoes);
                    $(document).ready(function () {
                        mixer = mixitup("#Container", {
                            load: {
                                filter: ".Sub"
                            }
                        });
                    });
                }, function (error) {
                    // console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    SearchComponent.prototype.search = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (mixer != undefined) {
                            mixer.destroy();
                        }
                        return [4 /*yield*/, this.searchArticles()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.searchVidoes()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        if (mixer != undefined) {
            mixer.destroy();
        }
    };
    SearchComponent.prototype.getSharingLink = function (articleId, articleType) {
        return Constants_1.Constants.SHARING_URL + "/articleDetails/" + articleType + "/" + articleId;
    };
    SearchComponent.prototype.translateDate = function (date) {
        moment.locale('ar');
        return moment(date).format("YYYY/MM/DD");
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: "app-search",
            templateUrl: "./search.component.html",
            styleUrls: ["./search.component.css"],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [home_page_services_service_1.HomePageServicesService,
            platform_browser_1.DomSanitizer,
            service_handler_service_1.ServiceHandlerProvider])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map