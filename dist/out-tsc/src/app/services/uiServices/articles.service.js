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
var service_handler_service_1 = require("../service-handler.service");
var Constants_1 = require("src/app/Constants");
var ArticlesService = /** @class */ (function () {
    function ArticlesService(serviceHadler) {
        this.serviceHadler = serviceHadler;
    }
    ArticlesService.prototype.getArticlesList = function (isSport, count) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var query = isSport ? "query{\n        sportsArticles(first:" + (count ? count : 50) + ",where:{isShowen:true},orderBy:publishDate_DESC){\n          id,\n          name,\n          writer,\n          caption,\n          publishDate,\n          publishTime,\n          article,\n          images,\n          videos,\n          isShowen\n        }\n      }" : "query{\n        articles(first:" + (count ? count : 50) + ",where:{isShowen:true},orderBy:publishDate_DESC){\n          id,\n          name,\n          writer,\n          caption,\n          publishDate,\n          publishTime,\n          article,\n          images,\n          videos,\n          isShowen\n        }\n      }";
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.sportsArticles) {
                                resolve(response.data.sportsArticles);
                            }
                            else if (response.data && response.data.articles) {
                                resolve(response.data.articles);
                            }
                            else {
                                reject("Failed to load articles");
                            }
                        }, function (error) {
                            // console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    ArticlesService.prototype.deleteArticle = function (articleId, isSport) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var query = isSport ? "mutation{\n        deleteSportsArticle(where:{id:\"" + articleId + "\"}){\n         id,\n         name\n       }\n       }" : "mutation{\n        deleteArticle(where:{id:\"" + articleId + "\"}){\n         id,\n         name\n       }\n       }";
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.deleteSportsArticle) {
                                resolve(true);
                            }
                            else if (response.data && response.data.deleteArticle) {
                                resolve(true);
                            }
                            else {
                                reject("Please check your internet connection");
                            }
                        }, function (error) {
                            // console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    ArticlesService.prototype.getArticleDetails = function (articleId, isSport) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var query = isSport ? "query{\n        sportsArticle(where:{id:\"" + articleId + "\"}){\n          id,\n          name,\n          writer,\n          caption,\n          publishDate,\n          publishTime,\n          article,\n          images,\n          videos,\n          isShowen\n        }\n      }" : "query{\n        article(where:{id:\"" + articleId + "\"}){\n          id,\n          name,\n          writer,\n          caption,\n          publishDate,\n          publishTime,\n          article,\n          images,\n          videos,\n          isShowen\n        }\n      }";
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.sportsArticle) {
                                resolve(response.data.sportsArticle);
                            }
                            else if (response.data && response.data.article) {
                                resolve(response.data.article);
                            }
                            else {
                                reject("Failed to load article");
                            }
                        }, function (error) {
                            // console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    ArticlesService.prototype.createArticle = function (article, isSport) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // console.log(article);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var queryKey = isSport ? "createSportsArticle" : "createArticle";
                        var query = "mutation{\n        " + queryKey + "(data:{\n          name:\"" + article.name + "\",\n          writer:\"" + article.writer + "\",\n          caption:\"" + article.caption + "\",\n          publishDate:\"" + article.publishDate + "\",\n          publishTime:\"" + article.publishTime + "\",\n          article:\"" + _this.escapeDoubleQuotes(article.article) + "\",\n          videos:\"" + article.videos + "\",\n          isShowen:false,\n          images:{\n            set:[\n              \"" + article.images[0] + "\"\n            ]\n          },\n          \n        }){\n          id\n        }\n      }";
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.createSportsArticle) {
                                resolve(true);
                            }
                            else if (response.data && response.data.createArticle) {
                                resolve(true);
                            }
                            else {
                                reject("Please check your internet connection");
                            }
                        }, function (error) {
                            // console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    ArticlesService.prototype.updatedArticle = function (article, isSport) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // console.log(article);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var queryKey = isSport ? "updateSportsArticle" : "updateArticle";
                        var query = "mutation{\n        " + queryKey + "(\n          where:{id:\"" + article.id + "\"},\n          data:{\n          name:\"" + article.name + "\",\n          writer:\"" + article.writer + "\",\n          caption:\"" + article.caption + "\",\n          publishDate:\"" + article.publishDate + "\",\n          publishTime:\"" + article.publishTime + "\",\n          article:\"" + _this.escapeDoubleQuotes(article.article) + "\",\n          videos:\"" + article.videos + "\",\n          isShowen:" + article.isShowen + ",\n          images:{\n            set:[\n              \"" + article.images[0] + "\"\n            ]\n          },\n          \n        }){\n          id\n        }\n      }";
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.updateSportsArticle) {
                                resolve(true);
                            }
                            else if (response.data && response.data.updateArticle) {
                                resolve(true);
                            }
                            else {
                                reject("Please check your internet connection");
                            }
                        }, function (error) {
                            // console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    ArticlesService.prototype.changeArticleAppearanceStatus = function (articleId, status, isSport) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var queryKey = isSport ? "updateSportsArticle" : "updateArticle";
                        var query = "mutation{\n        " + queryKey + "(\n          where:{id:\"" + articleId + "\"},\n          data:{isShowen: " + status + "}\n        ){\n          id,\n          name,\n          isShowen\n        }\n      }";
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.updateSportsArticle) {
                                resolve(true);
                            }
                            else if (response.data && response.data.updateArticle) {
                                resolve(true);
                            }
                            else {
                                reject("Please check your internet connection");
                            }
                        }, function (error) {
                            // console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    ArticlesService.prototype.escapeDoubleQuotes = function (str) {
        return str.replace(/\\([\s\S])|(")/g, "\\$1$2"); // thanks @slevithan!
    };
    ArticlesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [service_handler_service_1.ServiceHandlerProvider])
    ], ArticlesService);
    return ArticlesService;
}());
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map