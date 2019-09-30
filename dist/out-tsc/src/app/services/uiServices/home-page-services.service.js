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
var HomePageServicesService = /** @class */ (function () {
    function HomePageServicesService(serviceHadler) {
        this.serviceHadler = serviceHadler;
    }
    HomePageServicesService.prototype.getSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": Constants_1.Constants.SETTINGS_QUERY }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.settings) {
                                resolve(response.data.settings[0]);
                            }
                            else {
                                reject("Failed to load channel settings");
                            }
                        }, function (error) {
                            // console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    HomePageServicesService.prototype.getSpecialPrograms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                //K.A: all is needed in home view is program name and id
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var query = "query{\n        specialPrograms(orderBy: orderd_ASC){\n          id,\n          orderd,\n          program{\n            id,\n            name,\n            playlistUrl\n          }\n        }\n      }";
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.specialPrograms) {
                                resolve(response.data.specialPrograms);
                            }
                            else {
                                reject("Failed to specialPrograms");
                            }
                        }, function (error) {
                            // console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    HomePageServicesService.prototype.getSpecialBanners = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var query = "query{\n        specialBanners(orderBy: orderd_ASC){\n          id,\n          orderd,\n          program{\n            id,\n            name,\n            webBanner\n          }\n          event{\n            id,\n            name,\n            banner\n          }\n        }\n      }";
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.specialBanners) {
                                resolve(response.data.specialBanners);
                            }
                            else {
                                reject("Failed to specialBanners");
                            }
                        }, function (error) {
                            // console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    HomePageServicesService.prototype.getPrograms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                //K.A: all is needed in home view is program name and id
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var query = "query{ programs {id,name}}";
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.programs) {
                                resolve(response.data.programs);
                            }
                            else {
                                reject("Failed to programs");
                            }
                        }, function (error) {
                            // console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    HomePageServicesService.prototype.updateLogo = function (settingsId, logoKey, logoUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            var _this = this;
            return __generator(this, function (_a) {
                query = "mutation{\n      updateSetting(where:{id:\"" + settingsId + "\"},data:{\n        " + logoKey + ":\"" + logoUrl + "\"\n      }){\n        " + logoKey + "\n      }\n    }";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.updateSetting) {
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
    HomePageServicesService.prototype.updateSetting = function (settingsId, settingKey, settingValue) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            var _this = this;
            return __generator(this, function (_a) {
                query = "mutation{\n      updateSetting(where:{id:\"" + settingsId + "\"},data:{\n        " + settingKey + ":\"" + settingValue + "\"\n      }){\n        " + settingKey + "\n      }\n    }";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.updateSetting) {
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
    HomePageServicesService.prototype.updateNewsProgram = function (settingsId, newsProgramId) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            var _this = this;
            return __generator(this, function (_a) {
                query = "mutation{\n      updateSetting(where:{id:\"" + settingsId + "\"},data:{\n        newsPrograms:{\n          connect:{\n            id:\"" + newsProgramId + "\"\n          }\n        }\n      }){\n        newsPrograms{\n          id,\n          name\n        }\n      }\n    }";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.updateSetting) {
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
    HomePageServicesService.prototype.updateAppsUrl = function (settingsId, androidUrl, iosUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            var _this = this;
            return __generator(this, function (_a) {
                query = "mutation{\n      updateSetting(where:{id:\"" + settingsId + "\"},data:{\n        infoDaTa:{\n          update:{\n            iosUrl:\"" + iosUrl + "\",\n            andUrl:\"" + androidUrl + "\"\n          }\n        }\n      }){\n        infoDaTa{\n          andUrl,\n          iosUrl\n        }\n      }\n    }";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.updateSetting) {
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
    HomePageServicesService.prototype.updateSpecialBanners = function (settingsId, firstBannerId, secondBannerId, thirdBannerId, fourthBannerId, fivethBannerId, sixthBannerId, priviousBanners) {
        return __awaiter(this, void 0, void 0, function () {
            var disconnectQuery, query;
            var _this = this;
            return __generator(this, function (_a) {
                disconnectQuery = "[]";
                switch (priviousBanners.length) {
                    case 0:
                        break;
                    case 1:
                        disconnectQuery = "[{id:\"" + priviousBanners[0].id + "\"}]";
                        break;
                    case 2:
                        disconnectQuery = "[{id:\"" + priviousBanners[0].id + "\"}, {id:\"" + priviousBanners[1].id + "\"}]";
                        break;
                    case 3:
                        disconnectQuery = "[{id:\"" + priviousBanners[0].id + "\"}, {id:\"" + priviousBanners[1].id + "\"}, {id:\"" + priviousBanners[2].id + "\"}]";
                        break;
                    case 4:
                        disconnectQuery = "[{id:\"" + priviousBanners[0].id + "\"}, {id:\"" + priviousBanners[1].id + "\"}, {id:\"" + priviousBanners[2].id + "\"}, {id:\"" + priviousBanners[3].id + "\"}]";
                        break;
                    case 5:
                        disconnectQuery = "[{id:\"" + priviousBanners[0].id + "\"}, {id:\"" + priviousBanners[1].id + "\"}, {id:\"" + priviousBanners[2].id + "\"}, {id:\"" + priviousBanners[3].id + "\"}, {id:\"" + priviousBanners[4].id + "\"}]";
                        break;
                    case 6:
                        disconnectQuery = "[{id:\"" + priviousBanners[0].id + "\"}, {id:\"" + priviousBanners[1].id + "\"}, {id:\"" + priviousBanners[2].id + "\"}, {id:\"" + priviousBanners[3].id + "\"}, {id:\"" + priviousBanners[4].id + "\"},{id:\"" + priviousBanners[5].id + "\"}]";
                        break;
                }
                query = "mutation{\n      updateSetting(where:{id:\"" + settingsId + "\"},data:{\n        specialBanners:{\n          disconnect:" + disconnectQuery + "\n        }\n      }){\n        specialBanners{\n          id,name\n        }\n      }\n    }";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.updateSetting) {
                                var query2 = "mutation{\n            updateSetting(where:{id:\"" + settingsId + "\"},data:{\n              specialBanners:{\n                connect:[{id:\"" + firstBannerId + "\"},{id:\"" + secondBannerId + "\"},{id:\"" + thirdBannerId + "\"},{id:\"" + fourthBannerId + "\"},{id:\"" + fivethBannerId + "\"},{id:\"" + sixthBannerId + "\"}]\n              }\n            }){\n              specialBanners{\n                id,name\n              }\n            }\n          }";
                                _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query2 }).subscribe(function (response) {
                                    // console.log(response);
                                    if (response.data && response.data.updateSetting) {
                                        resolve(true);
                                    }
                                    else {
                                        reject("Please check your internet connection");
                                    }
                                }, function (error) {
                                    // console.log(error);
                                    reject("Please check your internet connection");
                                });
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
    HomePageServicesService.prototype.updateSpecialPrograms = function (settingsId, firstProgramId, secondProgramId, thirdProgramId, fourthProgramId, fivethProgramId, sixthProgramId, priviousPrograms) {
        return __awaiter(this, void 0, void 0, function () {
            var disconnectQuery, query;
            var _this = this;
            return __generator(this, function (_a) {
                disconnectQuery = "[]";
                switch (priviousPrograms.length) {
                    case 0:
                        break;
                    case 1:
                        disconnectQuery = "[{id:\"" + priviousPrograms[0].id + "\"}]";
                        break;
                    case 2:
                        disconnectQuery = "[{id:\"" + priviousPrograms[0].id + "\"}, {id:\"" + priviousPrograms[1].id + "\"}]";
                        break;
                    case 3:
                        disconnectQuery = "[{id:\"" + priviousPrograms[0].id + "\"}, {id:\"" + priviousPrograms[1].id + "\"}, {id:\"" + priviousPrograms[2].id + "\"}]";
                        break;
                    case 4:
                        disconnectQuery = "[{id:\"" + priviousPrograms[0].id + "\"}, {id:\"" + priviousPrograms[1].id + "\"}, {id:\"" + priviousPrograms[2].id + "\"}, {id:\"" + priviousPrograms[3].id + "\"}]";
                        break;
                    case 5:
                        disconnectQuery = "[{id:\"" + priviousPrograms[0].id + "\"}, {id:\"" + priviousPrograms[1].id + "\"}, {id:\"" + priviousPrograms[2].id + "\"}, {id:\"" + priviousPrograms[3].id + "\"}, {id:\"" + priviousPrograms[4].id + "\"}]";
                        break;
                    case 6:
                        disconnectQuery = "[{id:\"" + priviousPrograms[0].id + "\"}, {id:\"" + priviousPrograms[1].id + "\"}, {id:\"" + priviousPrograms[2].id + "\"}, {id:\"" + priviousPrograms[3].id + "\"}, {id:\"" + priviousPrograms[4].id + "\"},{id:\"" + priviousPrograms[5].id + "\"}]";
                        break;
                }
                query = "mutation{\n      updateSetting(where:{id:\"" + settingsId + "\"},data:{\n        specialPrograms:{\n          disconnect:" + disconnectQuery + "\n        }\n      }){\n        specialPrograms{\n          id,name\n        }\n      }\n    }";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.updateSetting) {
                                var query2 = "mutation{\n            updateSetting(where:{id:\"" + settingsId + "\"},data:{\n              specialPrograms:{\n                connect:[{id:\"" + firstProgramId + "\"},{id:\"" + secondProgramId + "\"},{id:\"" + thirdProgramId + "\"},{id:\"" + fourthProgramId + "\"},{id:\"" + fivethProgramId + "\"},{id:\"" + sixthProgramId + "\"}]\n              }\n            }){\n              specialPrograms{\n                id,name\n              }\n            }\n          }";
                                _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query2 }).subscribe(function (response) {
                                    // console.log(response);
                                    if (response.data && response.data.updateSetting) {
                                        resolve(true);
                                    }
                                    else {
                                        reject("Please check your internet connection");
                                    }
                                }, function (error) {
                                    // console.log(error);
                                    reject("Please check your internet connection");
                                });
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
    HomePageServicesService.prototype.updateVideos = function (settingsId, videosUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            var _this = this;
            return __generator(this, function (_a) {
                query = "mutation{\n      updateSetting(\n        where:{id:\"" + settingsId + "\"},\n        data:{\n          infoDaTa:{\n            update:{\n              videosUrl:\"" + videosUrl + "\"\n            }\n          }\n        }\n      ){\n        infoDaTa{\n          videosUrl\n        }\n      }\n    }";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.updateSetting) {
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
    HomePageServicesService.prototype.updateContactInfo = function (settingsId, phone, email, address) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            var _this = this;
            return __generator(this, function (_a) {
                query = "mutation{\n      updateSetting(\n        where:{id:\"" + settingsId + "\"},\n        data:{\n          infoDaTa:{\n            update:{\n              phone: " + parseInt(phone) + ",\n              address:\"" + address + "\",\n              email:\"" + email + "\"\n            }\n          }\n        }\n      ){\n        infoDaTa{\n          phone,\n          address,\n          email\n        }\n      }\n    }";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.updateSetting) {
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
    HomePageServicesService.prototype.updateAboutUs = function (settingsId, aboutUsText) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            var _this = this;
            return __generator(this, function (_a) {
                query = "mutation{updateSetting(where:{id:\"" + settingsId + "\"},data:{infoDaTa:{update:{aboutUs:\"" + this.escapeDoubleQuotes(aboutUsText) + "\"}}}){infoDaTa{aboutUs}}}";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.updateSetting) {
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
    HomePageServicesService.prototype.updateTerms = function (settingsId, terms) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            var _this = this;
            return __generator(this, function (_a) {
                query = "mutation{updateSetting(where:{id:\"" + settingsId + "\"},data:{infoDaTa:{update:{termsOfUse:\"" + this.escapeDoubleQuotes(terms) + "\"}}}){infoDaTa{termsOfUse}}}";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.updateSetting) {
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
    HomePageServicesService.prototype.updatePolicy = function (settingsId, policy) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            var _this = this;
            return __generator(this, function (_a) {
                query = "mutation{updateSetting(where:{id:\"" + settingsId + "\"},data:{infoDaTa:{update:{policy:\"" + this.escapeDoubleQuotes(policy) + "\"}}}){infoDaTa{policy}}}";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.updateSetting) {
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
    HomePageServicesService.prototype.getLinksList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var query = "query{\n        links{\n          id,\n          name,\n          icon,\n          url\n        }\n      }";
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.links) {
                                resolve(response.data.links);
                            }
                            else {
                                reject("Failed to load links");
                            }
                        }, function (error) {
                            // console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    HomePageServicesService.prototype.getTeam = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var query = "query{\n        presenters{\n          id,\n          name,\n          position,\n          cv,\n          image\n        }\n      }";
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.presenters) {
                                resolve(response.data.presenters);
                            }
                            else {
                                reject("Failed to load team members");
                            }
                        }, function (error) {
                            // console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    HomePageServicesService.prototype.searchArticles = function (searchKeyword) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var query = "query{\n        search(keyword:\"" + searchKeyword + "\"){\n          id,\n          name,\n          writer,\n          caption,\n          publishDate,\n          publishTime,\n          article,\n          images,\n          videos,\n          isShowen,\n          type\n        }\n      }";
                        _this.serviceHadler.runService(Constants_1.Constants.BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            // console.log(response);
                            if (response.data && response.data.search) {
                                resolve(response.data.search);
                            }
                            else {
                                reject("Failed to search");
                            }
                        }, function (error) {
                            // console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    HomePageServicesService.prototype.escapeDoubleQuotes = function (str) {
        return str.replace(/\\([\s\S])|(")/g, "\\$1$2"); // thanks @slevithan!
    };
    HomePageServicesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [service_handler_service_1.ServiceHandlerProvider])
    ], HomePageServicesService);
    return HomePageServicesService;
}());
exports.HomePageServicesService = HomePageServicesService;
//# sourceMappingURL=home-page-services.service.js.map