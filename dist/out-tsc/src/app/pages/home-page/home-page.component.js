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
var Constants_1 = require("src/app/Constants");
var service_handler_service_1 = require("src/app/services/service-handler.service");
var home_page_services_service_1 = require("src/app/services/uiServices/home-page-services.service");
var articles_service_1 = require("src/app/services/uiServices/articles.service");
var moment = require("moment");
var schedule_service_1 = require("src/app/services/uiServices/schedule.service");
var router_1 = require("@angular/router");
var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(homeService, serviceHandeler, articlesService, scheduleService, router) {
        this.homeService = homeService;
        this.serviceHandeler = serviceHandeler;
        this.articlesService = articlesService;
        this.scheduleService = scheduleService;
        this.router = router;
        this.currentPrograms = [];
    }
    HomePageComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.getCurrentAndUpcoming();
                        return [4 /*yield*/, this.getContactDetails()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadArticles()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePageComponent.prototype.initView = function () {
        $(document).ready(function () {
            $('.navbar-nav li').click(function () {
                $(this).siblings('li').removeClass('active');
                $(this).addClass('active');
            });
            if ($(window).width() > 770) {
                $('header #demo').css('height', (($(window).width()) / 2) - 80);
            }
            else {
                $('header #demo').css('height', (($(window).width()) / 2));
            }
            $('.rio-promos').slick({
                dots: false,
                infinite: false,
                speed: 1200,
                slidesToShow: 5,
                slidesToScroll: 5,
                autoplay: false,
                autoplaySpeed: 2000,
                arrows: true,
                loop: false,
                responsive: [
                    {
                        breakpoint: 922,
                        settings: {
                            arrows: true,
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            speed: 900,
                        }
                    },
                    {
                        breakpoint: 700,
                        settings: {
                            arrows: true,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            speed: 900,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            arrows: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            speed: 900,
                        }
                    }
                ]
            });
            // $(window).on("scroll", function () {
            //   if ($(window).scrollTop() <= ($(".footer").offset().top) - 500) {
            //     $(".navbar").fadeIn(700, "linear");
            //   }
            //   else {
            //     $(".navbar").fadeOut(700, "linear");
            //   }
            // });
        });
        $(window).on("resize", function () {
            if ($(window).width() > 770) {
                $('header #demo').css('height', (($(window).width()) / 2) - 80);
            }
            else {
                $('header #demo').css('height', (($(window).width()) / 2));
            }
            //        $('header #demo').css('height', 'l' ); 
            //         $('.centered-div').css('left',($(window).width() - $('.centered-div').width())/2); 
        });
    };
    HomePageComponent.prototype.getContactDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, params, params2;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.homeService.getSettings()];
                    case 1:
                        _a.settings = _d.sent();
                        // console.log(this.settings.liveUrl);
                        this.videosUrl = this.settings.infoDaTa.videosUrl;
                        this.newsProgram = this.settings.newsPrograms;
                        // console.log("News Program-------------");
                        // console.log(this.newsProgram);
                        _b = this;
                        return [4 /*yield*/, this.homeService.getSpecialBanners()];
                    case 2:
                        // console.log("News Program-------------");
                        // console.log(this.newsProgram);
                        _b.specialBanners = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.homeService.getSpecialPrograms()];
                    case 3:
                        _c.specialPrograms = _d.sent();
                        this.specialPrograms = this.specialPrograms.filter(function (program) { return program.program != null && program.program != undefined; });
                        params = { "part": "snippet,contentDetails", "maxResults": "5", "playlistId": this.videosUrl, "key": Constants_1.Constants.YOUTUBE_API_KEY };
                        this.serviceHandeler.runService("https://www.googleapis.com/youtube/v3/playlistItems", "GET", null, null, null, params).subscribe(function (response) {
                            // console.log(response);
                            _this.programYoutubeVideos = response.items;
                            _this.bannerVideo = _this.programYoutubeVideos[0];
                            // console.log("Last item");
                            // console.log(this.bannerVideo);
                        }, function (error) {
                            // console.log(error);
                        });
                        params2 = { "part": "snippet,contentDetails", "maxResults": "1", "playlistId": this.newsProgram.playlistUrl, "key": Constants_1.Constants.YOUTUBE_API_KEY };
                        this.serviceHandeler.runService("https://www.googleapis.com/youtube/v3/playlistItems", "GET", null, null, null, params2).subscribe(function (response) {
                            // console.log(response);
                            _this.newsProgramVideo = response.items[0];
                            // console.log(this.newsProgramVideo);
                        }, function (error) {
                            // console.log(error);
                        });
                        if (!this.specialPrograms[0]) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getProgramsVideos(this.specialPrograms[0].program.playlistUrl, 1)];
                    case 4:
                        _d.sent();
                        _d.label = 5;
                    case 5:
                        if (!this.specialPrograms[1]) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.getProgramsVideos(this.specialPrograms[1].program.playlistUrl, 2)];
                    case 6:
                        _d.sent();
                        _d.label = 7;
                    case 7:
                        if (!this.specialPrograms[2]) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.getProgramsVideos(this.specialPrograms[2].program.playlistUrl, 3)];
                    case 8:
                        _d.sent();
                        _d.label = 9;
                    case 9:
                        if (!this.specialPrograms[3]) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.getProgramsVideos(this.specialPrograms[3].program.playlistUrl, 4)];
                    case 10:
                        _d.sent();
                        _d.label = 11;
                    case 11:
                        if (!this.specialPrograms[4]) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.getProgramsVideos(this.specialPrograms[4].program.playlistUrl, 5)];
                    case 12:
                        _d.sent();
                        _d.label = 13;
                    case 13:
                        if (!this.specialPrograms[5]) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.getProgramsVideos(this.specialPrograms[5].program.playlistUrl, 6)];
                    case 14:
                        _d.sent();
                        _d.label = 15;
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    HomePageComponent.prototype.liveStreamClicked = function () {
        // console.log("Live stream clicked");
    };
    HomePageComponent.prototype.loadArticles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.articlesService.getArticlesList(true)];
                    case 1:
                        _a.sportsArticles = _c.sent();
                        this.sportsArticles = this.sportsArticles.filter(function (article) { return article.isShowen; });
                        _b = this;
                        return [4 /*yield*/, this.articlesService.getArticlesList()];
                    case 2:
                        _b.articles = _c.sent();
                        this.articles = this.articles.filter(function (article) { return article.isShowen; });
                        return [4 /*yield*/, this.delay(1000)];
                    case 3:
                        _c.sent();
                        this.initView();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePageComponent.prototype.getPublishTime = function (time) {
        return time ? time.substr(time.indexOf("T") + 1, 5) : "";
    };
    HomePageComponent.prototype.getProgramsVideos = function (programPlayListId, programNum) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            var _this = this;
            return __generator(this, function (_a) {
                params = { "part": "snippet,contentDetails", "maxResults": "10", "playlistId": programPlayListId, "key": Constants_1.Constants.YOUTUBE_API_KEY, "h1": "ar" };
                this.serviceHandeler.runService("https://www.googleapis.com/youtube/v3/playlistItems", "GET", null, null, null, params).subscribe(function (response) {
                    // console.log(response);
                    switch (programNum) {
                        case 1:
                            _this.program1YoutubeVideos = response.items;
                            break;
                        case 2:
                            _this.program2YoutubeVideos = response.items;
                            break;
                        case 3:
                            _this.program3YoutubeVideos = response.items;
                            break;
                        case 4:
                            _this.program4YoutubeVideos = response.items;
                            break;
                        case 5:
                            _this.program5YoutubeVideos = response.items;
                            break;
                        case 6:
                            _this.program6YoutubeVideos = response.items;
                            break;
                    }
                }, function (error) {
                    // console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    HomePageComponent.prototype.getCurrentAndUpcoming = function () {
        return __awaiter(this, void 0, void 0, function () {
            var today, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        moment.locale('en');
                        today = moment().toISOString(true);
                        // console.log(today);
                        _a = this;
                        return [4 /*yield*/, this.scheduleService.getCurrentAndUpcoming(moment().toString().substr(0, 3), this.getPublishTime(today), moment(today).format("YYYY-MM-DD"))];
                    case 1:
                        // console.log(today);
                        _a.currentPrograms = _b.sent();
                        // console.log("Current schedule");
                        // console.log(this.currentPrograms);
                        this.currentPrograms = this.currentPrograms.filter(function (item) {
                            if (item.program) {
                                return item.program.isShowen;
                            }
                            else if (item.event) {
                                return item.event.isShowen;
                            }
                            else {
                                return false;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePageComponent.prototype.navigateToProgram = function (schedule) {
        if (schedule.program) {
            this.router.navigateByUrl("/program/" + schedule.program.id);
        }
    };
    HomePageComponent.prototype.onVidoeSelected = function (videoId) {
        this.currentVideoId = videoId;
    };
    HomePageComponent.prototype.changeBannerVideo = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.bannerVideo = null;
                        return [4 /*yield*/, this.delay(500)];
                    case 1:
                        _a.sent();
                        this.bannerVideo = item;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePageComponent.prototype.delay = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
            });
        });
    };
    HomePageComponent.prototype.translateDate = function (date) {
        moment.locale('ar');
        return moment(date).format("YYYY/MM/DD");
    };
    HomePageComponent = __decorate([
        core_1.Component({
            selector: 'app-home-page',
            templateUrl: './home-page.component.html',
            styleUrls: ['./home-page.component.css']
        }),
        __metadata("design:paramtypes", [home_page_services_service_1.HomePageServicesService,
            service_handler_service_1.ServiceHandlerProvider,
            articles_service_1.ArticlesService,
            schedule_service_1.ScheduleService,
            router_1.Router])
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;
//# sourceMappingURL=home-page.component.js.map