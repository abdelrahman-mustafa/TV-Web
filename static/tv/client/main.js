(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Constants.ts":
/*!******************************!*\
  !*** ./src/app/Constants.ts ***!
  \******************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");

var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].IP + "/api";
    Constants.YOUTUBE_API_KEY = "AIzaSyB4eQ-1at4gTWuQXpCcCrGOeE_utW3HOBc";
    Constants.SETTINGS_QUERY = "query{\n        settings{\n          id,\n          logo,\n          articlesIcon,\n          programIcon,\n          teamIcon,\n          sportsArticleIcon,\n          infoDaTa{\n            id,\n            address,\n            phone,\n            email,\n            aboutUs,\n            policy,\n            termsOfUse,\n            fbUrl,\n            twUrl,\n            ytUrl,\n            instUrl,\n            iosUrl,\n            andUrl,\n            videosUrl,\n            links{\n              id,\n              name,\n              url,\n              icon\n            }\n          },\n          newsPrograms{\n            id,\n            name,  \n          },\n          specialBanners{\n              id,\n            name,\n          },\n          specialPrograms{\n              id,\n            name,\n          },\n          liveUrl,\n          videoIcon,\n        }\n      }";
    return Constants;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_live_stream_live_stream_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/live-stream/live-stream.component */ "./src/app/pages/live-stream/live-stream.component.ts");
/* harmony import */ var _pages_programs_schedule_programs_schedule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/programs-schedule/programs-schedule.component */ "./src/app/pages/programs-schedule/programs-schedule.component.ts");
/* harmony import */ var _pages_programs_programs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/programs/programs.component */ "./src/app/pages/programs/programs.component.ts");
/* harmony import */ var _pages_articles_articles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/articles/articles.component */ "./src/app/pages/articles/articles.component.ts");
/* harmony import */ var _pages_sports_sports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/sports/sports.component */ "./src/app/pages/sports/sports.component.ts");
/* harmony import */ var _pages_video_video_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/video/video.component */ "./src/app/pages/video/video.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/contact-us/contact-us.component */ "./src/app/pages/contact-us/contact-us.component.ts");
/* harmony import */ var _pages_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/team/team.component */ "./src/app/pages/team/team.component.ts");
/* harmony import */ var _pages_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/article-details/article-details.component */ "./src/app/pages/article-details/article-details.component.ts");
/* harmony import */ var _pages_program_details_program_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/program-details/program-details.component */ "./src/app/pages/program-details/program-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"] },
    { path: 'live', component: _pages_live_stream_live_stream_component__WEBPACK_IMPORTED_MODULE_3__["LiveStreamComponent"] },
    { path: 'schedule', component: _pages_programs_schedule_programs_schedule_component__WEBPACK_IMPORTED_MODULE_4__["ProgramsScheduleComponent"] },
    { path: 'programs', component: _pages_programs_programs_component__WEBPACK_IMPORTED_MODULE_5__["ProgramsComponent"] },
    { path: 'articles', component: _pages_articles_articles_component__WEBPACK_IMPORTED_MODULE_6__["ArticlesComponent"] },
    { path: 'sports', component: _pages_sports_sports_component__WEBPACK_IMPORTED_MODULE_7__["SportsComponent"] },
    { path: 'video', component: _pages_video_video_component__WEBPACK_IMPORTED_MODULE_8__["VideoComponent"] },
    { path: 'aboutUs', component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"] },
    { path: 'contactUs', component: _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__["ContactUsComponent"] },
    { path: 'team', component: _pages_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"] },
    { path: 'articleDetails/:type/:id', component: _pages_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_12__["ArticleDetailsComponent"] },
    { path: 'program/:id', component: _pages_program_details_program_details_component__WEBPACK_IMPORTED_MODULE_13__["ProgramDetailsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/esm5/ngx-youtube-player.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_live_stream_live_stream_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/live-stream/live-stream.component */ "./src/app/pages/live-stream/live-stream.component.ts");
/* harmony import */ var _pages_programs_schedule_programs_schedule_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/programs-schedule/programs-schedule.component */ "./src/app/pages/programs-schedule/programs-schedule.component.ts");
/* harmony import */ var _pages_programs_programs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/programs/programs.component */ "./src/app/pages/programs/programs.component.ts");
/* harmony import */ var _pages_articles_articles_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/articles/articles.component */ "./src/app/pages/articles/articles.component.ts");
/* harmony import */ var _pages_sports_sports_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/sports/sports.component */ "./src/app/pages/sports/sports.component.ts");
/* harmony import */ var _pages_video_video_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/video/video.component */ "./src/app/pages/video/video.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/contact-us/contact-us.component */ "./src/app/pages/contact-us/contact-us.component.ts");
/* harmony import */ var _pages_team_team_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/team/team.component */ "./src/app/pages/team/team.component.ts");
/* harmony import */ var _services_service_handler_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/service-handler.service */ "./src/app/services/service-handler.service.ts");
/* harmony import */ var _pages_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/article-details/article-details.component */ "./src/app/pages/article-details/article-details.component.ts");
/* harmony import */ var _pages_program_details_program_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/program-details/program-details.component */ "./src/app/pages/program-details/program-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
                _pages_live_stream_live_stream_component__WEBPACK_IMPORTED_MODULE_8__["LiveStreamComponent"],
                _pages_programs_schedule_programs_schedule_component__WEBPACK_IMPORTED_MODULE_9__["ProgramsScheduleComponent"],
                _pages_programs_programs_component__WEBPACK_IMPORTED_MODULE_10__["ProgramsComponent"],
                _pages_articles_articles_component__WEBPACK_IMPORTED_MODULE_11__["ArticlesComponent"],
                _pages_sports_sports_component__WEBPACK_IMPORTED_MODULE_12__["SportsComponent"],
                _pages_video_video_component__WEBPACK_IMPORTED_MODULE_13__["VideoComponent"],
                _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_14__["AboutUsComponent"],
                _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__["ContactUsComponent"],
                _pages_team_team_component__WEBPACK_IMPORTED_MODULE_16__["TeamComponent"],
                _pages_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_18__["ArticleDetailsComponent"],
                _pages_program_details_program_details_component__WEBPACK_IMPORTED_MODULE_19__["ProgramDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_2__["YoutubePlayerModule"]
            ],
            providers: [
                _services_service_handler_service__WEBPACK_IMPORTED_MODULE_17__["ServiceHandlerProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg     navbar-inverse\" dir=\"rtl\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"assets/imgs/logo.png\" class=\"logo\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\">\n\n      <i class=\"fas fa-bars bar\" aria-hidden=\"true\"></i>\n\n    </span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse  \" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav   links\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\">الرئيسية <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/live\">البث المباشر</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link lead\" routerLink=\"/schedule\">جدول البرامج</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/programs\">برامجنا</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/articles\">مواضيع</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sports\">رياضة</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/video\">فيديو</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav   ul_icons\">\n      <li class=\"nav-item li_icons\">\n        <!--    <i class=\"fab fa-instagram icons\"></i>-->\n        <img src=\"assets/imgs/instgram.png\" style=\"    border-radius: 5px;\n  margin-bottom: 4px;\n  width: 85%;\">\n      </li>\n      <li class=\"nav-item li_icons\">\n        <!--   <i class=\"fab fa-youtube icons\"></i>-->\n        <img src=\"assets/imgs/youtube.jpg\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 59%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-twitter-square icons\"></i>-->\n        <img src=\"assets/imgs/twiiter.png\" style=\"    border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 55%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-facebook-square icons\"></i>-->\n        <img src=\"assets/imgs/facebook.png\" style=\"        border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 60%;\">\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <a href=\"search.html\">\n          <!--    <i class=\"fas fa-search icons\"></i>-->\n          <img src=\"assets/imgs/search.png\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 30px;\n  width: 39%;\">\n\n        </a>\n      </li>\n\n\n\n\n\n\n    </ul>\n\n  </div>\n\n\n</nav>\n\n\n<main role=\"main\">\n  <div class=\"contained\">\n    <div class=\"video\">\n      <div class=\"row about_row\">\n\n        <div class=\"col-lg-3 d-none d-lg-block  \tads_col\"> <img src=\"assets/imgs/sale1.jpg\" class=\"ads float-right\"\n            style=\"margin-right: 12.5%;\"></div>\n        <div class=\"col-lg-6 col-md-12 about\">\n          <div class=\"special\">\n            <div class=\"about_logo\">\n              <img src=\"assets/imgs/logo.png\" class=\"new_img2 img-responsive\">\n            </div>\n\n            <div [innerHTML]=\"aboutUs\" style=\"text-align:right\"></div>\n\n          </div>\n        </div>\n\n\n\n        <div class=\"col-lg-3 d-none d-lg-block  ads_col\"><img src=\"assets/imgs/sale1.jpg\" class=\"ads float-left\" style=\"margin-left: 12.5%;\"></div>\n\n      </div>\n\n    </div>\n\n\n\n\n\n    <!-- Fooooterrrrrrrrrrr  -->\n\n\n\n\n    <div class=\"footer\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6  col-xs-12 footer_apps\">\n          <div>\n            <p> حمل تطبيق الوسط </p>\n            <img src=\"assets/imgs/appstore.png\"> <img src=\"assets/imgs/google-play.png\">\n          </div>\n\n        </div>\n\n        <div class=\"col-lg-5  offest-lg-8 col-md-6  col-sm-6 col-xs-12 footer_map\">\n\n\n          <div>\n            <p>خريطه الموقع</p>\n            <p> <a routerLink=\"/\">الرئيسية</a> <a routerLink=\"/live\">البث&nbsp;المباشر</a>\n              <a routerLink=\"/schedule\">جدول&nbsp;البرامج</a> <a routerLink=\"/programs\">برامجنا</a>\n              <a routerLink=\"/articles\">مواضيع</a>\n\n              <a routerLink=\"/sports\">رياضة</a> <a routerLink=\"/video\">فيديو</a> <a routerLink=\"/aboutUs\" class=\"active\">عن&nbsp;الوسط</a>\n              <a routerLink=\"/contactUs\">تواصل&nbsp;معنا</a> <a routerLink=\"/team\">الفريق</a>\n            </p>\n          </div>\n        </div>\n        <hr>\n\n\n\n\n\n\n\n\n\n\n\n      </div>\n      <div class=\"row footer_row_p2\">\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_icons\">\n          <img src=\"assets/imgs/facebook.png\">\n          <img src=\"assets/imgs/twiiter.png\">\n          <img src=\"assets/imgs/youtube.jpg\">\n          <img src=\"assets/imgs/instgram.png\">\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_dev\">\n\n          DEVELOPED BY: LIBYANA MEDIA PRODUCTION\n\n        </div>\n        <div class=\"col-lg-4   col-md-4  col-sm-4 col-xs-12  footer_copy\">\n\n\n\n          <p>جميع الحقوق الملكية تابعة لشبكة الوسط</p>\n\n        </div>\n\n\n\n\n\n\n\n\n\n\n\n\n      </div>\n\n      <span class=\"clearfix\"></span>\n\n      <div class=\"col-lg-12  col-md-12  col-xs-12  \" style=\"text-align: center\">\n\n      </div>\n\n\n    </div>\n\n\n  </div>\n\n\n\n\n\n</main>\n"

/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.ts ***!
  \******************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/navigation.service */ "./src/app/services/navigation.service.ts");
/* harmony import */ var src_app_services_uiServices_home_page_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/uiServices/home-page-services.service */ "./src/app/services/uiServices/home-page-services.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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




var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent(navigationService, homeService, sanitizer) {
        this.navigationService = navigationService;
        this.homeService = homeService;
        this.sanitizer = sanitizer;
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        this.navigationService.setNavigationLink = "aboutUs";
        this.getContactDetails();
    };
    AboutUsComponent.prototype.getContactDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.homeService.getSettings()];
                    case 1:
                        _a.settings = _b.sent();
                        this.aboutUs = this.sanitizer.bypassSecurityTrustHtml(this.settings.infoDaTa.aboutUs);
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/pages/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/pages/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"], src_app_services_uiServices_home_page_services_service__WEBPACK_IMPORTED_MODULE_2__["HomePageServicesService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/pages/article-details/article-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/article-details/article-details.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/article-details/article-details.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/article-details/article-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg     navbar-inverse\" dir=\"rtl\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"assets/imgs/logo.png\" class=\"logo\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\">\n\n      <i class=\"fas fa-bars bar\" aria-hidden=\"true\"></i>\n\n    </span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse  \" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav   links\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" routerLink=\"/\">الرئيسية <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/live\">البث المباشر</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link lead\" routerLink=\"/schedule\">جدول البرامج</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/programs\">برامجنا</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/articles\">مواضيع</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sports\">رياضة</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/video\">فيديو</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav   ul_icons\">\n      <li class=\"nav-item li_icons\">\n        <!--    <i class=\"fab fa-instagram icons\"></i>-->\n        <img src=\"assets/imgs/instgram.png\" style=\"    border-radius: 5px;\n  margin-bottom: 4px;\n  width: 85%;\">\n      </li>\n      <li class=\"nav-item li_icons\">\n        <!--   <i class=\"fab fa-youtube icons\"></i>-->\n        <img src=\"assets/imgs/youtube.jpg\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 59%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-twitter-square icons\"></i>-->\n        <img src=\"assets/imgs/twiiter.png\" style=\"    border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 55%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-facebook-square icons\"></i>-->\n        <img src=\"assets/imgs/facebook.png\" style=\"        border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 60%;\">\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <a href=\"search.html\">\n          <!--    <i class=\"fas fa-search icons\"></i>-->\n          <img src=\"assets/imgs/search.png\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 30px;\n  width: 39%;\">\n\n        </a>\n      </li>\n\n\n\n\n\n\n    </ul>\n\n  </div>\n\n\n</nav>\n\n\n<main role=\"main\">\n  <div class=\"contained\">\n    <div class=\"video\">\n      <div class=\"row Subjects_row  Subjects2_row live_broadcast_row\">\n\n        <div class=\"col-lg-3 d-none d-lg-block  \tads_col\"> <img src=\"assets/imgs/sale1.jpg\" class=\"ads float-right\"\n            style=\"margin-right: 12.5%;\"></div>\n        <div class=\"col-lg-6 col-md-12 Subjects\">\n          <div class=\"live_broadcast\">\n            <youtube-player *ngIf=\"selectedArticle.videos != null && selectedArticle.videos != ''\" class=\"new_img2 img-responsive\"\n              height=\"400\" width=\"120%\" [videoId]=\"selectedArticle.videos\"></youtube-player>\n            <img *ngIf=\"selectedArticle.videos == null || selectedArticle.videos == ''\" src=\"{{selectedArticle.images[0]}}\"\n              class=\"new_img2 img-responsive\">\n          </div>\n          <div class=\"special\">\n            <div class=\"Subjects_description\">\n              <p>{{selectedArticle.caption}}</p>\n              <h6>{{selectedArticle.publishDate | date}} {{selectedArticle.publishTime}}</h6>\n              <p>{{selectedArticle.writer}}</p>\n              <span class=\"share_icons\">\n\n                <img src=\"assets/imgs/twitter1.png\"><img src=\"assets/imgs/facebook1.png\">\n                <p class=\"share_word\"> :مشاركة</p>\n\n              </span>\n              <h6 style=\"text-decoration: underline\">{{selectedArticle.name}}</h6>\n\n              <p [innerHTML]=\"articleBody\">\n              </p>\n\n            </div>\n\n\n\n\n\n            <div class=\"col-xs-12 section_col2\">\n              <!--                   <i class=\"fa fa-minus section_bar\" aria-hidden=\"true\"></i>-->\n              <p>المزيد من المواضيع</p>\n            </div>\n\n            <div class=\"row Subjects_box\" *ngFor=\"let article of articles\">\n\n              <div class=\"col-lg-9 col-md-8 col-xs-12\">\n                <span class=\"share_icons\">\n                  <img src=\"assets/imgs/share.png\">\n\n                </span>\n                <h4>{{article.name}}</h4>\n                <h6> {{article.publishDate | date}} </h6>\n                <p [innerHTML]=\"article.article\">\n                </p>\n              </div>\n              <div class=\"col-lg-3 col-md-4 col-xs-12\">\n                <a routerLink=\"/articleDetails/{{articleType}}/{{article.id}}\">\n                  <img src=\"{{article.images[0]}}\" class=\"new_img2 img-responsive\">\n                </a>\n              </div>\n\n            </div>\n\n          </div>\n          <!-- <div class=\"col-xs-12\" style=\"text-align: center;margin-top: 8px;\"> <button class=\"btn\">المزيد</button></div> -->\n\n        </div>\n\n\n\n\n        <div class=\"col-lg-3 d-none d-lg-block  ads_col\"><img src=\"assets/imgs/sale1.jpg\" class=\"ads float-left\" style=\"margin-left: 12.5%;\"></div>\n\n      </div>\n\n    </div>\n\n\n\n\n\n    <!-- Fooooterrrrrrrrrrr  -->\n\n\n\n\n    <div class=\"footer\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6  col-xs-12 footer_apps\">\n          <div>\n            <p> حمل تطبيق الوسط </p>\n            <img src=\"assets/imgs/appstore.png\"> <img src=\"assets/imgs/google-play.png\">\n          </div>\n\n        </div>\n\n        <div class=\"col-lg-5  offest-lg-8 col-md-6  col-sm-6 col-xs-12 footer_map\">\n\n\n          <div>\n            <p>خريطه الموقع</p>\n            <p> <a routerLink=\"/\">الرئيسية</a> <a routerLink=\"/live\">البث&nbsp;المباشر</a>\n              <a routerLink=\"/schedule\">جدول&nbsp;البرامج</a> <a routerLink=\"/programs\">برامجنا</a>\n              <a routerLink=\"/articles\" [ngClass]=\"{'active': articleType == 'article', 'inActive': articleType != 'article'}\">مواضيع</a>\n\n              <a routerLink=\"/sports\" [ngClass]=\"{'active': articleType == 'sports', 'inActive': articleType != 'sports'}\">رياضة</a>\n              <a routerLink=\"/video\">فيديو</a> <a routerLink=\"/aboutUs\">عن&nbsp;الوسط</a>\n              <a routerLink=\"/contactUs\">تواصل&nbsp;معنا</a> <a routerLink=\"/team\">الفريق</a>\n            </p>\n          </div>\n        </div>\n        <hr>\n\n\n\n      </div>\n      <div class=\"row footer_row_p2\">\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_icons\">\n          <img src=\"assets/imgs/facebook.png\">\n          <img src=\"assets/imgs/twiiter.png\">\n          <img src=\"assets/imgs/youtube.jpg\">\n          <img src=\"assets/imgs/instgram.png\">\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_dev\">\n\n          DEVELOPED BY: LIBYANA MEDIA PRODUCTION\n\n        </div>\n        <div class=\"col-lg-4   col-md-4  col-sm-4 col-xs-12  footer_copy\">\n\n\n\n          <p>جميع الحقوق الملكية تابعة لشبكة الوسط</p>\n\n        </div>\n\n\n      </div>\n\n      <span class=\"clearfix\"></span>\n\n      <div class=\"col-lg-12  col-md-12  col-xs-12  \" style=\"text-align: center\">\n\n      </div>\n\n\n    </div>\n\n\n  </div>\n\n\n\n\n\n</main>\n"

/***/ }),

/***/ "./src/app/pages/article-details/article-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/article-details/article-details.component.ts ***!
  \********************************************************************/
/*! exports provided: ArticleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleDetailsComponent", function() { return ArticleDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_uiServices_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/uiServices/articles.service */ "./src/app/services/uiServices/articles.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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




var ArticleDetailsComponent = /** @class */ (function () {
    function ArticleDetailsComponent(route, articlesServices, sanitizer) {
        this.route = route;
        this.articlesServices = articlesServices;
        this.sanitizer = sanitizer;
        this.selectedArticle = {
            article: "",
            caption: "",
            images: [""],
            publishDate: "",
            publishTime: "",
            videos: "",
            isShowen: false,
            writer: "",
            name: ""
        };
    }
    ArticleDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.articleId = params.id;
            _this.articleType = params.type;
            console.log(_this.articleId + " " + _this.articleType);
            _this.getArticleDetails();
            _this.loadArticles();
        });
    };
    ArticleDetailsComponent.prototype.getArticleDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.articlesServices.getArticleDetails(this.articleId, this.articleType == "sports")];
                    case 1:
                        _a.selectedArticle = _b.sent();
                        this.selectedArticle.publishTime = this.selectedArticle.publishTime.substr(this.selectedArticle.publishTime.indexOf("T") + 1, 5);
                        this.articleBody = this.sanitizer.bypassSecurityTrustHtml(this.selectedArticle.article);
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticleDetailsComponent.prototype.loadArticles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.articlesServices.getArticlesList(this.articleType == "sports")];
                    case 1:
                        _a.articles = _b.sent();
                        this.articles = this.articles.filter(function (article) { return article.isShowen && article.id != _this.articleId; });
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
    ArticleDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-details',
            template: __webpack_require__(/*! ./article-details.component.html */ "./src/app/pages/article-details/article-details.component.html"),
            styles: [__webpack_require__(/*! ./article-details.component.css */ "./src/app/pages/article-details/article-details.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_uiServices_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], ArticleDetailsComponent);
    return ArticleDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/articles/articles.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/articles/articles.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/articles/articles.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/articles/articles.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg     navbar-inverse\" dir=\"rtl\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"assets/imgs/logo.png\" class=\"logo\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\">\n\n      <i class=\"fas fa-bars bar\" aria-hidden=\"true\"></i>\n\n    </span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse  \" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav   links\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" routerLink=\"/\">الرئيسية <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/live\">البث المباشر</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link lead\" routerLink=\"/schedule\">جدول البرامج</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/programs\">برامجنا</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/articles\">مواضيع</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sports\">رياضة</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/video\">فيديو</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav   ul_icons\">\n      <li class=\"nav-item li_icons\">\n        <!--    <i class=\"fab fa-instagram icons\"></i>-->\n        <img src=\"assets/imgs/instgram.png\" style=\"    border-radius: 5px;\n  margin-bottom: 4px;\n  width: 85%;\">\n      </li>\n      <li class=\"nav-item li_icons\">\n        <!--   <i class=\"fab fa-youtube icons\"></i>-->\n        <img src=\"assets/imgs/youtube.jpg\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 59%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-twitter-square icons\"></i>-->\n        <img src=\"assets/imgs/twiiter.png\" style=\"    border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 55%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-facebook-square icons\"></i>-->\n        <img src=\"assets/imgs/facebook.png\" style=\"        border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 60%;\">\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <a href=\"search.html\">\n          <!--    <i class=\"fas fa-search icons\"></i>-->\n          <img src=\"assets/imgs/search.png\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 30px;\n  width: 39%;\">\n\n        </a>\n      </li>\n\n\n\n\n\n\n    </ul>\n\n  </div>\n\n\n</nav>\n\n\n<main role=\"main\">\n  <div class=\"contained\">\n    <div class=\"video\">\n      <div class=\"row Subjects_row\">\n\n        <div class=\"col-lg-3 d-none d-lg-block  \tads_col\"> <img src=\"assets/imgs/sale1.jpg\" class=\"ads float-right\"\n            style=\"margin-right: 12.5%;\"></div>\n        <div class=\"col-lg-6 col-md-12 Subjects\">\n          <div class=\"special\">\n            <div class=\"row Subjects_box\" *ngFor=\"let article of articles\">\n\n              <div class=\"col-lg-9 col-md-8 col-xs-12\">\n                <span class=\"share_icons\">\n                  <img src=\"assets/imgs/share.png\">\n\n                </span>\n                <h4>{{article.name}}</h4>\n                <h6> {{article.publishDate | date}} </h6>\n                <p [innerHTML]=\"article.article\">\n                </p>\n              </div>\n              <div class=\"col-lg-3 col-md-4 col-xs-12\">\n                <a routerLink=\"/articleDetails/article/{{article.id}}\">\n                  <img src=\"{{article.images[0]}}\" class=\"new_img2 img-responsive\">\n                </a>\n              </div>\n\n            </div>\n\n\n          </div>\n          <!-- <div class=\"col-xs-12\" style=\"text-align: center;margin-top: 8px;\"> <button class=\"btn\">المزيد</button></div> -->\n\n        </div>\n\n\n\n        <div class=\"col-lg-3 d-none d-lg-block  ads_col\"><img src=\"assets/imgs/sale1.jpg\" class=\"ads float-left\" style=\"margin-left: 12.5%;\"></div>\n\n      </div>\n\n    </div>\n\n\n\n\n\n    <!-- Fooooterrrrrrrrrrr  -->\n\n\n\n\n\n    <div class=\"footer\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6  col-xs-12 footer_apps\">\n          <div>\n            <p> حمل تطبيق الوسط </p>\n            <img src=\"assets/imgs/appstore.png\"> <img src=\"assets/imgs/google-play.png\">\n          </div>\n\n        </div>\n\n        <div class=\"col-lg-5  offest-lg-8 col-md-6  col-sm-6 col-xs-12 footer_map\">\n\n\n          <div>\n            <p>خريطه الموقع</p>\n            <p> <a routerLink=\"/\">الرئيسية</a> <a routerLink=\"/live\">البث&nbsp;المباشر</a>\n              <a routerLink=\"/schedule\">جدول&nbsp;البرامج</a> <a routerLink=\"/programs\">برامجنا</a>\n              <a routerLink=\"/articles\" class=\"active\">مواضيع</a>\n\n              <a routerLink=\"/sports\">رياضة</a> <a routerLink=\"/video\">فيديو</a> <a routerLink=\"/aboutUs\">عن&nbsp;الوسط</a>\n              <a routerLink=\"/contactUs\">تواصل&nbsp;معنا</a> <a routerLink=\"/team\">الفريق</a>\n            </p>\n          </div>\n        </div>\n        <hr>\n\n\n\n\n\n\n\n\n\n\n\n      </div>\n      <div class=\"row footer_row_p2\">\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_icons\">\n          <img src=\"assets/imgs/facebook.png\">\n          <img src=\"assets/imgs/twiiter.png\">\n          <img src=\"assets/imgs/youtube.jpg\">\n          <img src=\"assets/imgs/instgram.png\">\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_dev\">\n\n          DEVELOPED BY: LIBYANA MEDIA PRODUCTION\n\n        </div>\n        <div class=\"col-lg-4   col-md-4  col-sm-4 col-xs-12  footer_copy\">\n\n\n\n          <p>جميع الحقوق الملكية تابعة لشبكة الوسط</p>\n\n        </div>\n\n\n\n\n\n\n\n\n\n\n\n\n      </div>\n\n      <span class=\"clearfix\"></span>\n\n      <div class=\"col-lg-12  col-md-12  col-xs-12  \" style=\"text-align: center\">\n\n      </div>\n\n\n    </div>\n\n\n  </div>\n\n\n\n\n\n</main>\n"

/***/ }),

/***/ "./src/app/pages/articles/articles.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/articles/articles.component.ts ***!
  \******************************************************/
/*! exports provided: ArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function() { return ArticlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_uiServices_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/uiServices/articles.service */ "./src/app/services/uiServices/articles.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navigation.service */ "./src/app/services/navigation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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




var ArticlesComponent = /** @class */ (function () {
    function ArticlesComponent(articlesService, sanitizer, navigationService) {
        this.articlesService = articlesService;
        this.sanitizer = sanitizer;
        this.navigationService = navigationService;
    }
    ArticlesComponent.prototype.ngOnInit = function () {
        this.loadArticles();
        this.navigationService.setNavigationLink = "articles";
    };
    ArticlesComponent.prototype.loadArticles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.articlesService.getArticlesList()];
                    case 1:
                        _a.articles = _b.sent();
                        this.articles = this.articles.filter(function (article) { return article.isShowen; });
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
    ArticlesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-articles',
            template: __webpack_require__(/*! ./articles.component.html */ "./src/app/pages/articles/articles.component.html"),
            styles: [__webpack_require__(/*! ./articles.component.css */ "./src/app/pages/articles/articles.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [src_app_services_uiServices_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg     navbar-inverse\" dir=\"rtl\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"assets/imgs/logo.png\" class=\"logo\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\">\n\n      <i class=\"fas fa-bars bar\" aria-hidden=\"true\"></i>\n\n    </span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse  \" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav   links\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" routerLink=\"/\">الرئيسية <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/live\">البث المباشر</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link lead\" routerLink=\"/schedule\">جدول البرامج</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/programs\">برامجنا</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/articles\">مواضيع</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sports\">رياضة</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/video\">فيديو</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav   ul_icons\">\n      <li class=\"nav-item li_icons\">\n        <!--    <i class=\"fab fa-instagram icons\"></i>-->\n        <img src=\"assets/imgs/instgram.png\" style=\"    border-radius: 5px;\n  margin-bottom: 4px;\n  width: 85%;\">\n      </li>\n      <li class=\"nav-item li_icons\">\n        <!--   <i class=\"fab fa-youtube icons\"></i>-->\n        <img src=\"assets/imgs/youtube.jpg\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 59%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-twitter-square icons\"></i>-->\n        <img src=\"assets/imgs/twiiter.png\" style=\"    border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 55%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-facebook-square icons\"></i>-->\n        <img src=\"assets/imgs/facebook.png\" style=\"        border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 60%;\">\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <a href=\"search.html\">\n          <!--    <i class=\"fas fa-search icons\"></i>-->\n          <img src=\"assets/imgs/search.png\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 30px;\n  width: 39%;\">\n\n        </a>\n      </li>\n\n\n\n\n\n\n    </ul>\n\n  </div>\n\n\n</nav>\n\n\n<main role=\"main\">\n  <div class=\"contained\">\n    <div class=\"video\">\n      <div class=\"row contact_row\">\n\n        <div class=\"col-lg-3 d-none d-lg-block  \tads_col\"> <img src=\"assets/imgs/sale1.jpg\" class=\"ads float-right\"\n            style=\"margin-right: 12.5%;\"></div>\n        <div class=\"col-lg-6 col-md-12 contact about\">\n\n          <div class=\"special\">\n\n\n            <h3>إتصل بنا</h3>\n\n\n\n            <span class=\"clearfix\"></span>\n            <!-- <br> -->\n\n            <!-- <div class=\"contact_box1\">\n              <p>\n                عنوان الصورة عنوان الصورة عنوان الصورة عنوان الصورة عنوان الصورة عنوان الصورة عنوان الصورة عنوان الصورة\n                عنوان الصورة عنوان الصورة عنوان الصورة عنوان الصورة عنوان الصورة عنوان الصورة عنوان الصورة عنوان الصورة\n                عنوان الصورة عنوان الصورة عنوان الصورة عنوان الصورة عنوان الصورة عنوان الصورة عنوان الصورة عنوان الصورة\n                عنوان الصورة عنوان الصورة\n              </p>\n            </div> -->\n\n            <div class=\"row\" *ngIf=\"showData\">\n              <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                <div class=\"about_box contact_box\"><i class=\"fas fa-mobile-alt\"></i> {{phone}}</div>\n\n\n              </div>\n              <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                <div class=\"about_box contact_box\"><i class=\"fas fa-phone\" style=\"    transform: rotate(90deg);\"></i>\n                  {{phone}}</div>\n\n\n              </div>\n              <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                <div class=\"about_box contact_box\"><i class=\"fas fa-envelope\"></i> {{email}}</div>\n\n              </div>\n\n            </div>\n\n\n          </div>\n\n\n        </div>\n\n\n\n\n        <div class=\"col-lg-3 d-none d-lg-block  ads_col\"><img src=\"assets/imgs/sale1.jpg\" class=\"ads float-left\" style=\"margin-left: 12.5%;\"></div>\n\n      </div>\n\n    </div>\n\n\n\n\n\n    <!-- Fooooterrrrrrrrrrr  -->\n\n\n\n    <div class=\"footer\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6  col-xs-12 footer_apps\">\n          <div>\n            <p> حمل تطبيق الوسط </p>\n            <img src=\"assets/imgs/appstore.png\"> <img src=\"assets/imgs/google-play.png\">\n          </div>\n\n        </div>\n\n        <div class=\"col-lg-5  offest-lg-8 col-md-6  col-sm-6 col-xs-12 footer_map\">\n\n          <div>\n            <p>خريطه الموقع</p>\n            <p> <a routerLink=\"/\">الرئيسية</a> <a routerLink=\"/live\">البث&nbsp;المباشر</a>\n              <a routerLink=\"/schedule\">جدول&nbsp;البرامج</a> <a routerLink=\"/programs\">برامجنا</a>\n              <a routerLink=\"/articles\">مواضيع</a>\n\n              <a routerLink=\"/sports\">رياضة</a> <a routerLink=\"/video\">فيديو</a> <a routerLink=\"/aboutUs\">عن&nbsp;الوسط</a>\n              <a routerLink=\"/contactUs\" class=\"active\">تواصل&nbsp;معنا</a> <a routerLink=\"/team\">الفريق</a>\n            </p>\n          </div>\n        </div>\n        <hr>\n\n\n\n\n\n\n\n\n\n\n\n      </div>\n      <div class=\"row footer_row_p2\">\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_icons\">\n          <img src=\"assets/imgs/facebook.png\">\n          <img src=\"assets/imgs/twiiter.png\">\n          <img src=\"assets/imgs/youtube.jpg\">\n          <img src=\"assets/imgs/instgram.png\">\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_dev\">\n\n          DEVELOPED BY: LIBYANA MEDIA PRODUCTION\n\n        </div>\n        <div class=\"col-lg-4   col-md-4  col-sm-4 col-xs-12  footer_copy\">\n\n\n\n          <p>جميع الحقوق الملكية تابعة لشبكة الوسط</p>\n\n        </div>\n\n\n\n\n\n\n\n\n\n\n\n\n      </div>\n\n      <span class=\"clearfix\"></span>\n\n      <div class=\"col-lg-12  col-md-12  col-xs-12  \" style=\"text-align: center\">\n\n      </div>\n\n\n    </div>\n\n  </div>\n\n\n\n\n\n</main>\n"

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/navigation.service */ "./src/app/services/navigation.service.ts");
/* harmony import */ var src_app_services_uiServices_home_page_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/uiServices/home-page-services.service */ "./src/app/services/uiServices/home-page-services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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



var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(navigationService, homeService) {
        this.navigationService = navigationService;
        this.homeService = homeService;
        this.showData = false;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        this.navigationService.setNavigationLink = "contactUs";
        this.getContactDetails();
    };
    ContactUsComponent.prototype.getContactDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.homeService.getSettings()];
                    case 1:
                        _a.settings = _b.sent();
                        if (this.settings) {
                            this.showData = true;
                            this.email = this.settings.infoDaTa.email;
                            this.phone = this.settings.infoDaTa.phone;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/pages/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/pages/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"], src_app_services_uiServices_home_page_services_service__WEBPACK_IMPORTED_MODULE_2__["HomePageServicesService"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg     navbar-inverse\" dir=\"rtl\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"assets/imgs/logo.png\" class=\"logo\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\">\n\n      <i class=\"fas fa-bars bar\" aria-hidden=\"true\"></i>\n\n    </span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse  \" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav   links\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link \" routerLink=\"/\">الرئيسية <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/live\">البث المباشر</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link lead\" routerLink=\"/schedule\">جدول البرامج</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/programs\">برامجنا</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/articles\">مواضيع</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sports\">رياضة</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/video\">فيديو</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav   ul_icons\">\n      <li class=\"nav-item li_icons\">\n        <!--    <i class=\"fab fa-instagram icons\"></i>-->\n        <img src=\"assets/imgs/instgram.png\" style=\"    border-radius: 5px;\n  margin-bottom: 4px;\n  width: 85%;\">\n      </li>\n      <li class=\"nav-item li_icons\">\n        <!--   <i class=\"fab fa-youtube icons\"></i>-->\n        <img src=\"assets/imgs/youtube.jpg\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 59%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-twitter-square icons\"></i>-->\n        <img src=\"assets/imgs/twiiter.png\" style=\"    border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 55%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-facebook-square icons\"></i>-->\n        <img src=\"assets/imgs/facebook.png\" style=\"        border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 60%;\">\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <a href=\"search.html\">\n          <!--    <i class=\"fas fa-search icons\"></i>-->\n          <img src=\"assets/imgs/search.png\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 30px;\n  width: 39%;\">\n\n        </a>\n      </li>\n\n\n\n\n\n\n    </ul>\n\n  </div>\n\n\n</nav>\n\n\n\n<header class=\"parallax-zoom-blur\">\n  <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n    <!-- Indicators -->\n    <ul class=\"carousel-indicators\">\n      <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n    </ul>\n\n    <!-- The slideshow -->\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"assets/imgs/camera-crew-field-275977.jpg\" alt=\"Los Angeles\" class=\"img-responsive\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"assets/imgs/pexels-photo-395132.jpeg\" alt=\"Chicago\" class=\"img-responsive\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"assets/imgs/camera-crew-field-275977.jpg\" alt=\"New York\" class=\"img-responsive\">\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\"></span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\"></span>\n    </a>\n  </div>\n</header>\n<main role=\"main\">\n  <div class=\"contained\">\n    <div class=\"video\">\n      <div class=\"row\">\n\n        <div class=\"col-lg-3 d-none d-lg-block  \tads_col\"> <img src=\"assets/imgs/sale1.jpg\" class=\"ads float-right\"\n            style=\"margin-right: 12.5%;\"></div>\n        <div class=\"col-lg-6 col-md-12 main_\">\n          <div class=\"row special\">\n            <div class=\"col-lg-3 col-md-12   col-xs-12\">\n              <div class=\"box_latestnews box\">\n                <span class=\"new1\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n\n\n                <button class=\"btn\" style=\"margin-top: 4%;\">المزيد</button>\n              </div>\n            </div>\n            <div class=\"col-lg-6 col-md-12   col-xs-12\">\n              <div class=\"box_Live box  row\">\n\n                <div class=\"col-lg-6 col-md-12 col-xs-12  \">\n\n                  <a href=\"Livebroadcast.html\"> <span class=\"new3\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img img-responsive\"></span></a>\n\n                </div>\n                <div class=\"col-lg-6 col-md-12 col-xs-12    \">\n                  <div class=\"col-xs-12 box_Live_row \" style=\"    margin-top: 6px;\">\n                    <div class=\"row\">\n                      <div class=\"col-md-7\">\n                        <a href=\"Livebroadcast.html\"> <span class=\"new2\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n                        </a>\n                      </div>\n                      <div class=\"col-md-5\">\n                        <p class=\"box_Live_head\">أسم البرنامج</p>\n                        <p class=\"box_Live_status\"> <span class=\"box_Live_status1\"><b>الأن</b></span>\n                          <span class=\"box_Live_time\" dir=\"ltr\">02:00 PM</span></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 box_Live_row \">\n                    <div class=\"row\">\n                      <div class=\"col-md-7\">\n                        <a href=\"Livebroadcast.html\"> <span class=\"new2\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n                        </a>\n                      </div>\n                      <div class=\"col-md-5\">\n                        <p class=\"box_Live_head\">أسم البرنامج</p>\n                        <p class=\"box_Live_status\"> <span class=\"box_Live_status2\"><b>التلي</b></span>\n                          <span class=\"box_Live_time\" dir=\"ltr\">02:00 PM</span></p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12\" style=\"text-align: center;\"> <button class=\"btn\">المزيد</button></div>\n                </div>\n\n              </div>\n            </div>\n\n\n\n            <!--               Second section-->\n          </div>\n\n          <div class=\"col-xs-12 section_col\">\n            <!--                   <i class=\"fa fa-minus section_bar\" aria-hidden=\"true\"></i>-->\n            <p>فيديو</p>\n          </div>\n\n          <div class=\"row second_section\">\n\n            <div class=\"col-lg-8 col-md-12 col-xs-12 content_second_section_1_col\">\n              <div class=\"content_second_section_1\">\n                <img src=\"assets/imgs/new1.jpg\" class=\"new_img img-responsive\">\n\n                <p> كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي </p>\n              </div>\n            </div>\n\n\n            <div class=\"col-lg-4 col-md-12 col-xs-12 content_second_section_2_col\">\n              <div class=\"content_second_section_2\">\n                <div class=\"col-xs-12\">\n\n                  <div class=\"col-xs-12 box_Live_row \" style=\"margin-top: 3px;\">\n                    <div class=\"row\">\n                      <div class=\"col-md-5 \">\n                        <span class=\"new4\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img3 img-responsive\"></span>\n                      </div>\n                      <div class=\"col-md-7 second_section_description\">\n                        <p>كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                          كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي </p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 box_Live_row \">\n                    <div class=\"row\">\n                      <div class=\"col-md-5\">\n                        <span class=\"new4\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img3 img-responsive\"></span>\n                      </div>\n                      <div class=\"col-md-7 second_section_description\">\n                        <p>كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                          كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي </p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 box_Live_row \">\n                    <div class=\"row\">\n                      <div class=\"col-md-5\">\n                        <span class=\"new4\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img3 img-responsive\"></span>\n                      </div>\n                      <div class=\"col-md-7 second_section_description\">\n                        <p>كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                          كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي </p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 box_Live_row \">\n                    <div class=\"row\">\n                      <div class=\"col-md-5\">\n                        <span class=\"new4\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img3 img-responsive\"></span>\n                      </div>\n                      <div class=\"col-md-7 second_section_description\">\n                        <p>كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                          كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي </p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 box_Live_row \">\n                    <div class=\"row\">\n                      <div class=\"col-md-5\">\n                        <span class=\"new4\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img3 img-responsive\"></span>\n                      </div>\n                      <div class=\"col-md-7 second_section_description\">\n                        <p>كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                          كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي </p>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div class=\"col-xs-12\" style=\"text-align: center\">\n                  <button class=\"btn\">المزيد</button></div>\n\n              </div>\n\n            </div>\n          </div>\n\n\n        </div>\n        <div class=\"col-lg-3 d-none d-lg-block  ads_col\"><img src=\"assets/imgs/sale1.jpg\" class=\"ads float-left\" style=\"margin-left: 12.5%;\"></div>\n\n      </div>\n    </div>\n\n    <div class=\"row section_col2_row\" style=\"margin-top: 0px;\">\n      <div class=\"col-xs-12 section_col2\">\n        <!--                   <i class=\"fa fa-minus section_bar\" aria-hidden=\"true\"></i>-->\n        <p>رياضة</p>\n      </div>\n    </div>\n    <div class=\"slick_slider_sport\">\n      <div class=\"rio-promos\">\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n      </div>\n\n    </div>\n    <div class=\"col-xs-12  \" style=\"text-align: center\">\n\n      <button class=\"btn special_btn\" style=\"    margin-top: -1%;\">المزيد</button></div>\n    <!--  مواااااااااااااضيع -->\n\n    <div class=\"row section_col2_row\">\n      <div class=\"col-xs-12 section_col2\">\n        <!--                   <i class=\"fa fa-minus section_bar\" aria-hidden=\"true\"></i>-->\n        <p>مواضيع</p>\n      </div>\n    </div>\n    <div class=\"slick_slider_sport\">\n      <div class=\"rio-promos\">\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n      </div>\n\n    </div>\n    <div class=\"col-xs-12  \" style=\"text-align: center\">\n\n      <button class=\"btn special_btn\" style=\"    margin-top: -1%;\">المزيد</button></div>\n\n\n\n\n\n    <!-- 1 برااااااااااااااامج -->\n\n    <div class=\"row section_col2_row\">\n      <div class=\"col-xs-12 section_col2\">\n        <!--                   <i class=\"fa fa-minus section_bar\" aria-hidden=\"true\"></i>-->\n        <p>البرامج</p>\n      </div>\n    </div>\n    <div class=\"col-xs-12 section_col2 section_col3\">\n      <!--                   <i class=\"fa fa-minus section_bar\" aria-hidden=\"true\"></i>-->\n      <p>برنامج ١</p>\n    </div>\n    <div class=\"slick_slider_sport\">\n      <div class=\"rio-promos\">\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n        <span class=\"sports_box\">\n          <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n          <span class=\"sports_box_text\">\n            <span class=\"sports_box_text_header\">\n              <span class=\"date\">16/19/1994</span>\n              <span class=\"time\">2:18 PM</span>\n              <br>\n              <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n            </span>\n\n\n          </span>\n        </span>\n      </div>\n\n    </div>\n    <div class=\"col-xs-12  \" style=\"text-align: center\">\n\n\n\n\n\n\n      <!-- 2 برااااااااااااااامج -->\n\n      <div class=\"row section_col2_row\">\n        <div class=\"col-xs-12 section_col2 section_col2_empty\">\n          <!--                   <i class=\"fa fa-minus section_bar\" aria-hidden=\"true\"></i>-->\n          <h1></h1>\n        </div>\n      </div>\n      <div class=\"col-xs-12 section_col2 section_col3\">\n        <!--                   <i class=\"fa fa-minus section_bar\" aria-hidden=\"true\"></i>-->\n        <p>برنامج ٢</p>\n      </div>\n      <div class=\"slick_slider_sport\">\n        <div class=\"rio-promos\">\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n          <span class=\"sports_box\">\n            <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n            <span class=\"sports_box_text\">\n              <span class=\"sports_box_text_header\">\n                <span class=\"date\">16/19/1994</span>\n                <span class=\"time\">2:18 PM</span>\n                <br>\n                <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا <br>\n                  كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n              </span>\n\n\n            </span>\n          </span>\n        </div>\n\n      </div>\n      <div class=\"col-xs-12  \" style=\"text-align: center\">\n\n\n\n\n\n\n\n\n\n        <!-- 3  برااااااااااااااامج -->\n        <div class=\"row section_col2_row\">\n\n          <div class=\"col-xs-12 section_col2 section_col2_empty\">\n            <!--                   <i class=\"fa fa-minus section_bar\" aria-hidden=\"true\"></i>-->\n            <h1></h1>\n          </div>\n        </div>\n        <div class=\"col-xs-12 section_col2 section_col3\">\n          <!--                   <i class=\"fa fa-minus section_bar\" aria-hidden=\"true\"></i>-->\n          <p>برنامج ٣</p>\n        </div>\n        <div class=\"slick_slider_sport\">\n          <div class=\"rio-promos\">\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n            <span class=\"sports_box\">\n              <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n              <span class=\"sports_box_text\">\n                <span class=\"sports_box_text_header\">\n                  <span class=\"date\">16/19/1994</span>\n                  <span class=\"time\">2:18 PM</span>\n                  <br>\n                  <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا\n                    <br>\n                    كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                </span>\n\n\n              </span>\n            </span>\n          </div>\n\n        </div>\n        <div class=\"col-xs-12  \" style=\"text-align: center\">\n\n\n\n\n\n          <!-- 4 برااااااااااااااامج -->\n          <div class=\"row section_col2_row\">\n\n            <div class=\"col-xs-12 section_col2 section_col2_empty\">\n              <!--                   <i class=\"fa fa-minus section_bar\" aria-hidden=\"true\"></i>-->\n              <h1></h1>\n            </div>\n          </div>\n\n          <div class=\"col-xs-12 section_col2 section_col3  \">\n            <!--                   <i class=\"fa fa-minus section_bar\" aria-hidden=\"true\"></i>-->\n            <p>برنامج ٤</p>\n          </div>\n          <div class=\"slick_slider_sport\">\n            <div class=\"rio-promos\">\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n              <span class=\"sports_box\">\n                <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n                <span class=\"sports_box_text\">\n                  <span class=\"sports_box_text_header\">\n                    <span class=\"date\">16/19/1994</span>\n                    <span class=\"time\">2:18 PM</span>\n                    <br>\n                    <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي ياي\n                      تسيا <br>\n                      كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                  </span>\n\n\n                </span>\n              </span>\n            </div>\n\n          </div>\n          <div class=\"col-xs-12  \" style=\"text-align: center\">\n\n\n\n\n            <!-- 5 برااااااااااااااامج -->\n\n            <div class=\"row section_col2_row\">\n              <div class=\"col-xs-12 section_col2 section_col2_empty\">\n                <!--                   <i class=\"fa fa-minus section_bar\" aria-hidden=\"true\"></i>-->\n                <h6></h6>\n              </div>\n            </div>\n            <div class=\"col-xs-12 section_col2 section_col3  \">\n              <!--                   <i class=\"fa fa-minus section_bar\" aria-hidden=\"true\"></i>-->\n              <p>برنامج ٥</p>\n            </div>\n            <div class=\"slick_slider_sport\">\n              <div class=\"rio-promos\">\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n              </div>\n\n            </div>\n\n\n\n            <!-- 6 برااااااااااااااامج -->\n\n            <div class=\"row section_col2_row\">\n              <div class=\"col-xs-12 section_col2 section_col2_empty\">\n                <!--                   <i class=\"fa fa-minus section_bar\" aria-hidden=\"true\"></i>-->\n                <h1></h1>\n              </div>\n            </div>\n            <div class=\"col-xs-12 section_col2 section_col3  \">\n              <!--                   <i class=\"fa fa-minus section_bar\" aria-hidden=\"true\"></i>-->\n              <p>برنامج ٦</p>\n            </div>\n            <div class=\"slick_slider_sport before_footer\">\n              <div class=\"rio-promos\">\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10004088_1491055334449687_1187165020_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10919749_326992714172441_299394464_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10617007_939025979457209_6938406_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/1168617_1435408473368301_409182770_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/10817863_856543214397968_517239188_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189836_754178218029431_2102772742_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n                <span class=\"sports_box\">\n                  <img src=\"assets/imgs/11189261_759116200870985_1595157767_n.jpg\" />\n                  <span class=\"sports_box_text\">\n                    <span class=\"sports_box_text_header\">\n                      <span class=\"date\">16/19/1994</span>\n                      <span class=\"time\">2:18 PM</span>\n                      <br>\n                      <span class=\"sports_box_text_content\">كمي يكنسيت سينتسي اسيتسا يستاي\n                        ياي تسيا <br>\n                        كمي يكنسيت سينتسي اسيتسا يستاي ياي تسيا سينتسي اسيتسا يستاي</span>\n                    </span>\n\n\n                  </span>\n                </span>\n              </div>\n\n            </div>\n            <div class=\"col-xs-12  \" style=\"text-align: center\">\n\n              <button class=\"btn special_btn\" style=\"    margin-top: -1%;\">المزيد</button></div>\n\n\n            <!-- Fooooterrrrrrrrrrr  -->\n\n\n\n\n            <div class=\"footer\">\n              <div class=\"row\">\n                <div class=\"col-lg-6 col-md-6 col-sm-6  col-xs-12 footer_apps\">\n                  <div>\n                    <p> حمل تطبيق الوسط </p>\n                    <img src=\"assets/imgs/appstore.png\"> <img src=\"assets/imgs/google-play.png\">\n                  </div>\n\n                </div>\n\n                <div class=\"col-lg-5  offest-lg-8 col-md-6  col-sm-6 col-xs-12 footer_map\">\n\n\n                  <div>\n                    <p>خريطه الموقع</p>\n                    <p> <a routerLink=\"/\" class=\"active\">الرئيسية</a> <a routerLink=\"/live\">البث&nbsp;المباشر</a>\n                      <a routerLink=\"/schedule\">جدول&nbsp;البرامج</a> <a routerLink=\"/programs\">برامجنا</a>\n                      <a routerLink=\"/articles\">مواضيع</a>\n\n                      <a routerLink=\"/sports\">رياضة</a> <a routerLink=\"/video\">فيديو</a> <a routerLink=\"/aboutUs\">عن&nbsp;الوسط</a>\n                      <a routerLink=\"/contactUs\">تواصل&nbsp;معنا</a> <a routerLink=\"/team\">الفريق</a>\n                    </p>\n                  </div>\n                </div>\n                <hr>\n\n\n\n\n\n\n\n\n\n\n\n              </div>\n              <div class=\"row footer_row_p2\">\n                <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_icons\">\n                  <img src=\"assets/imgs/facebook.png\">\n                  <img src=\"assets/imgs/twiiter.png\">\n                  <img src=\"assets/imgs/youtube.jpg\">\n                  <img src=\"assets/imgs/instgram.png\">\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_dev\">\n\n                  DEVELOPED BY: LIBYANA MEDIA PRODUCTION\n\n                </div>\n                <div class=\"col-lg-4   col-md-4  col-sm-4 col-xs-12  footer_copy\">\n\n\n\n                  <p>جميع الحقوق الملكية تابعة لشبكة الوسط</p>\n\n                </div>\n\n\n\n\n\n\n\n\n\n\n\n\n              </div>\n\n              <span class=\"clearfix\"></span>\n\n              <div class=\"col-lg-12  col-md-12  col-xs-12  \" style=\"text-align: center\">\n\n              </div>\n\n\n            </div>\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/navigation.service */ "./src/app/services/navigation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(navigationService) {
        this.navigationService = navigationService;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.navigationService.setNavigationLink = "home";
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
            $(window).on("scroll", function () {
                if ($(window).scrollTop() <= ($(".footer").offset().top) - 500) {
                    $(".navbar").fadeIn(700, "linear");
                }
                else {
                    $(".navbar").fadeOut(700, "linear");
                }
            });
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
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/pages/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/live-stream/live-stream.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/live-stream/live-stream.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/live-stream/live-stream.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/live-stream/live-stream.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg     navbar-inverse\" dir=\"rtl\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"assets/imgs/logo.png\" class=\"logo\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\">\n\n      <i class=\"fas fa-bars bar\" aria-hidden=\"true\"></i>\n\n    </span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse  \" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav   links\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" routerLink=\"/\">الرئيسية <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/live\">البث المباشر</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link lead\" routerLink=\"/schedule\">جدول البرامج</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/programs\">برامجنا</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/articles\">مواضيع</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sports\">رياضة</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/video\">فيديو</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav   ul_icons\">\n      <li class=\"nav-item li_icons\">\n        <!--    <i class=\"fab fa-instagram icons\"></i>-->\n        <img src=\"assets/imgs/instgram.png\" style=\"    border-radius: 5px;\n  margin-bottom: 4px;\n  width: 85%;\">\n      </li>\n      <li class=\"nav-item li_icons\">\n        <!--   <i class=\"fab fa-youtube icons\"></i>-->\n        <img src=\"assets/imgs/youtube.jpg\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 59%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-twitter-square icons\"></i>-->\n        <img src=\"assets/imgs/twiiter.png\" style=\"    border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 55%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-facebook-square icons\"></i>-->\n        <img src=\"assets/imgs/facebook.png\" style=\"        border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 60%;\">\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <a href=\"search.html\">\n          <!--    <i class=\"fas fa-search icons\"></i>-->\n          <img src=\"assets/imgs/search.png\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 30px;\n  width: 39%;\">\n\n        </a>\n      </li>\n\n\n\n\n\n\n    </ul>\n\n  </div>\n\n\n</nav>\n\n\n<main role=\"main\">\n  <div class=\"contained\">\n    <div class=\"video\">\n      <div class=\"row live_broadcast_row\">\n\n        <div class=\"col-lg-3 d-none d-lg-block  \tads_col\"> <img src=\"assets/imgs/sale1.jpg\" class=\"ads float-right\"\n            style=\"margin-right: 12.5%;\"></div>\n        <div class=\"col-lg-6 col-md-12\">\n          <div class=\"live_broadcast\">\n            <youtube-player *ngIf=\"settings != undefined\" class=\"new_img2 img-responsive\" height=\"100%\" width=\"120%\"\n              [videoId]=\"settings.liveUrl\"></youtube-player>\n          </div>\n        </div>\n\n\n\n\n        <div class=\"col-lg-3 d-none d-lg-block  ads_col\"><img src=\"assets/imgs/sale1.jpg\" class=\"ads float-left\" style=\"margin-left: 12.5%;\"></div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-xs-12 live_broadcast_text\" style=\"text-align: center\">\n          <h6 style=\"font-weight: bold;\">البث المباشر للقناة</h6>\n          <p style=\"    font-size: small;\n    color: #ccc;\">عدد المشاهدات</p>\n          <p style=\"    font-size: small;\n    color: #ccc;\"> 2018 </p>\n\n        </div>\n      </div>\n    </div>\n\n\n\n\n\n    <!-- Fooooterrrrrrrrrrr  -->\n\n\n\n\n    <div class=\"footer\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6  col-xs-12 footer_apps\">\n          <div>\n            <p> حمل تطبيق الوسط </p>\n            <img src=\"assets/imgs/appstore.png\"> <img src=\"assets/imgs/google-play.png\">\n          </div>\n\n        </div>\n\n        <div class=\"col-lg-5  offest-lg-8 col-md-6  col-sm-6 col-xs-12 footer_map\">\n\n\n          <div>\n            <p>خريطه الموقع</p>\n            <p> <a routerLink=\"/\">الرئيسية</a> <a routerLink=\"/live\" class=\"active\">البث&nbsp;المباشر</a>\n              <a routerLink=\"/schedule\">جدول&nbsp;البرامج</a> <a routerLink=\"/programs\">برامجنا</a>\n              <a routerLink=\"/articles\">مواضيع</a>\n\n              <a routerLink=\"/sports\">رياضة</a> <a routerLink=\"/video\">فيديو</a> <a routerLink=\"/aboutUs\">عن&nbsp;الوسط</a>\n              <a routerLink=\"/contactUs\">تواصل&nbsp;معنا</a> <a routerLink=\"/team\">الفريق</a>\n            </p>\n          </div>\n        </div>\n        <hr>\n\n\n\n\n\n\n\n\n\n\n\n      </div>\n      <div class=\"row footer_row_p2\">\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_icons\">\n          <img src=\"assets/imgs/facebook.png\">\n          <img src=\"assets/imgs/twiiter.png\">\n          <img src=\"assets/imgs/youtube.jpg\">\n          <img src=\"assets/imgs/instgram.png\">\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_dev\">\n\n          DEVELOPED BY: LIBYANA MEDIA PRODUCTION\n\n        </div>\n        <div class=\"col-lg-4   col-md-4  col-sm-4 col-xs-12  footer_copy\">\n\n\n\n          <p>جميع الحقوق الملكية تابعة لشبكة الوسط</p>\n\n        </div>\n\n\n\n\n\n\n\n\n\n\n\n\n      </div>\n\n      <span class=\"clearfix\"></span>\n\n      <div class=\"col-lg-12  col-md-12  col-xs-12  \" style=\"text-align: center\">\n\n      </div>\n\n\n    </div>\n\n  </div>\n\n\n\n\n\n</main>\n"

/***/ }),

/***/ "./src/app/pages/live-stream/live-stream.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/live-stream/live-stream.component.ts ***!
  \************************************************************/
/*! exports provided: LiveStreamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveStreamComponent", function() { return LiveStreamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_uiServices_home_page_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/uiServices/home-page-services.service */ "./src/app/services/uiServices/home-page-services.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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



var LiveStreamComponent = /** @class */ (function () {
    function LiveStreamComponent(homeService, sanitizer) {
        this.homeService = homeService;
        this.sanitizer = sanitizer;
    }
    LiveStreamComponent.prototype.ngOnInit = function () {
        this.getContactDetails();
    };
    LiveStreamComponent.prototype.getContactDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.homeService.getSettings()];
                    case 1:
                        _a.settings = _b.sent();
                        console.log(this.settings.liveUrl);
                        return [2 /*return*/];
                }
            });
        });
    };
    LiveStreamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-live-stream',
            template: __webpack_require__(/*! ./live-stream.component.html */ "./src/app/pages/live-stream/live-stream.component.html"),
            styles: [__webpack_require__(/*! ./live-stream.component.css */ "./src/app/pages/live-stream/live-stream.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_uiServices_home_page_services_service__WEBPACK_IMPORTED_MODULE_1__["HomePageServicesService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], LiveStreamComponent);
    return LiveStreamComponent;
}());



/***/ }),

/***/ "./src/app/pages/program-details/program-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/program-details/program-details.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/program-details/program-details.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/program-details/program-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg     navbar-inverse\" dir=\"rtl\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"assets/imgs/logo.png\" class=\"logo\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\">\n\n      <i class=\"fas fa-bars bar\" aria-hidden=\"true\"></i>\n\n    </span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse  \" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav   links\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" routerLink=\"/\">الرئيسية <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/live\">البث المباشر</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link lead\" routerLink=\"/schedule\">جدول البرامج</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/programs\">برامجنا</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/articles\">مواضيع</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sports\">رياضة</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/video\">فيديو</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav   ul_icons\">\n      <li class=\"nav-item li_icons\">\n        <!--    <i class=\"fab fa-instagram icons\"></i>-->\n        <img src=\"assets/imgs/instgram.png\" style=\"    border-radius: 5px;\n  margin-bottom: 4px;\n  width: 85%;\">\n      </li>\n      <li class=\"nav-item li_icons\">\n        <!--   <i class=\"fab fa-youtube icons\"></i>-->\n        <img src=\"assets/imgs/youtube.jpg\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 59%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-twitter-square icons\"></i>-->\n        <img src=\"assets/imgs/twiiter.png\" style=\"    border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 55%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-facebook-square icons\"></i>-->\n        <img src=\"assets/imgs/facebook.png\" style=\"        border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 60%;\">\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <a href=\"search.html\">\n          <!--    <i class=\"fas fa-search icons\"></i>-->\n          <img src=\"assets/imgs/search.png\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 30px;\n  width: 39%;\">\n\n        </a>\n      </li>\n\n\n\n\n\n\n    </ul>\n\n  </div>\n\n\n</nav>\n\n\n<header class=\"parallax-zoom-blur\">\n  <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n    <!-- Indicators -->\n    <!-- <ul class=\"carousel-indicators\">\n      <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n    </ul> -->\n\n    <!-- The slideshow -->\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"{{selectedProgram.webBanner}}\" alt=\"Los Angeles\">\n      </div>\n      <!-- <div class=\"carousel-item\">\n        <img src=\"assets/imgs/pexels-photo-395132.jpeg\" alt=\"Chicago\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"assets/imgs/camera-crew-field-275977.jpg\" alt=\"New York\">\n      </div> -->\n    </div>\n\n    <!-- Left and right controls -->\n    <!-- <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\"></span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\"></span>\n    </a> -->\n  </div>\n</header>\n<main role=\"main\">\n  <div class=\"contained\">\n    <div class=\"video\">\n      <div class=\"row Program_Schedule2_row\">\n\n        <div class=\"col-lg-3 d-none d-lg-block  \tads_col\"> <img src=\"assets/imgs/sale1.jpg\" class=\"ads float-right\"\n            style=\"margin-right: 12.5%;\"></div>\n        <div class=\"col-lg-6 col-md-12 Program_Schedule2 \">\n\n\n          <div class=\"Program_Schedule2_description special special1\">\n            <span class=\"share_icons\">\n              <img src=\"assets/imgs/twitter1.png\"><img src=\"assets/imgs/facebook1.png\">\n              <p class=\"share_word\"> مشاركة:</p>\n\n            </span>\n            <h6>{{selectedProgram.programDate}}</h6>\n\n            <h5>{{selectedProgram.name}}</h5>\n            <h6>{{selectedProgram.presenter}}</h6>\n            <p>{{selectedProgram.description}}</p>\n\n          </div>\n\n          <div class=\"row special\">\n            <div class=\"col-xs-12 section_col2\">\n              <!--                   <i class=\"fa fa-minus section_bar\" aria-hidden=\"true\"></i>-->\n              <p> الحلقات </p>\n            </div>\n\n            <div class=\"col-lg-4 col-md-4 col-xs-12 videos_box\" *ngFor=\"let item of programYoutubeVideos\">\n              <a>\n                <youtube-player class=\"new_img2 img-responsive\" height=\"131\" width=\"90%\" [videoId]=\"item.contentDetails.videoId\"></youtube-player>\n                <div class=\"OurProgram_desciption videos Program_Schedule2_text\">\n                  <h5> {{item.snippet.publishedAt | date}}</h5>\n                  <p> {{item.snippet.title}}</p>\n                </div>\n              </a>\n            </div>\n          </div>\n          <!-- <div class=\"col-xs-12\" style=\"text-align: center;\"> <button class=\"btn\">المزيد</button></div> -->\n\n\n        </div>\n        <div class=\"col-lg-3 d-none d-lg-block  ads_col\"><img src=\"assets/imgs/sale1.jpg\" class=\"ads float-left\" style=\"margin-left: 12.5%;\"></div>\n\n      </div>\n    </div>\n\n    <!-- Fooooterrrrrrrrrrr  -->\n\n\n\n\n    <div class=\"footer\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6  col-xs-12 footer_apps\">\n          <div>\n            <p> حمل تطبيق الوسط </p>\n            <img src=\"assets/imgs/appstore.png\"> <img src=\"assets/imgs/google-play.png\">\n          </div>\n\n        </div>\n\n        <div class=\"col-lg-5  offest-lg-8 col-md-6  col-sm-6 col-xs-12 footer_map\">\n\n\n          <div>\n            <p>خريطه الموقع</p>\n            <p> <a routerLink=\"/\">الرئيسية</a> <a routerLink=\"/live\">البث&nbsp;المباشر</a>\n              <a routerLink=\"/schedule\">جدول&nbsp;البرامج</a> <a routerLink=\"/programs\" class=\"active\">برامجنا</a>\n              <a routerLink=\"/articles\">مواضيع</a>\n\n              <a routerLink=\"/sports\">رياضة</a> <a routerLink=\"/video\">فيديو</a> <a routerLink=\"/aboutUs\">عن&nbsp;الوسط</a>\n              <a routerLink=\"/contactUs\">تواصل&nbsp;معنا</a> <a routerLink=\"/team\">الفريق</a>\n            </p>\n          </div>\n        </div>\n        <hr>\n\n\n\n\n\n\n\n\n\n\n\n      </div>\n      <div class=\"row footer_row_p2\">\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_icons\">\n          <img src=\"assets/imgs/facebook.png\">\n          <img src=\"assets/imgs/twiiter.png\">\n          <img src=\"assets/imgs/youtube.jpg\">\n          <img src=\"assets/imgs/instgram.png\">\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_dev\">\n\n          DEVELOPED BY: LIBYANA MEDIA PRODUCTION\n\n        </div>\n        <div class=\"col-lg-4   col-md-4  col-sm-4 col-xs-12  footer_copy\">\n\n\n\n          <p>جميع الحقوق الملكية تابعة لشبكة الوسط</p>\n\n        </div>\n\n\n\n\n\n\n\n\n\n\n\n\n      </div>\n\n      <span class=\"clearfix\"></span>\n\n      <div class=\"col-lg-12  col-md-12  col-xs-12  \" style=\"text-align: center\">\n\n      </div>\n\n\n    </div>\n\n  </div>\n\n\n\n\n\n</main>\n"

/***/ }),

/***/ "./src/app/pages/program-details/program-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/program-details/program-details.component.ts ***!
  \********************************************************************/
/*! exports provided: ProgramDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDetailsComponent", function() { return ProgramDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_uiServices_programs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/uiServices/programs.service */ "./src/app/services/uiServices/programs.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_service_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/service-handler.service */ "./src/app/services/service-handler.service.ts");
/* harmony import */ var src_app_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Constants */ "./src/app/Constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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





var ProgramDetailsComponent = /** @class */ (function () {
    function ProgramDetailsComponent(programService, route, serviceHandeler) {
        this.programService = programService;
        this.route = route;
        this.serviceHandeler = serviceHandeler;
        this.selectedProgram = {
            name: "",
            description: "",
            duration: "",
            programDate: "",
            icon: "",
            mobBanner: "",
            playlistUrl: "",
            webBanner: "",
            isShowen: false,
            presenter: ""
        };
        this.id = 'OH3_er5i4IQ';
    }
    ProgramDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.programId = params.id;
            console.log(_this.programId);
            _this.getProgramDetails();
        });
    };
    ProgramDetailsComponent.prototype.getProgramDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, params;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.programService.getProgramsDetails(this.programId)];
                    case 1:
                        _a.selectedProgram = _b.sent();
                        params = { "part": "snippet,contentDetails", "maxResults": "50", "playlistId": this.selectedProgram.playlistUrl, "key": src_app_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].YOUTUBE_API_KEY };
                        this.serviceHandeler.runService("https://www.googleapis.com/youtube/v3/playlistItems", "GET", null, null, null, params).subscribe(function (response) {
                            console.log(response);
                            _this.programYoutubeVideos = response.items;
                        }, function (error) {
                            console.log(error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgramDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-program-details',
            template: __webpack_require__(/*! ./program-details.component.html */ "./src/app/pages/program-details/program-details.component.html"),
            styles: [__webpack_require__(/*! ./program-details.component.css */ "./src/app/pages/program-details/program-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_uiServices_programs_service__WEBPACK_IMPORTED_MODULE_1__["ProgramsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_service_handler_service__WEBPACK_IMPORTED_MODULE_3__["ServiceHandlerProvider"]])
    ], ProgramDetailsComponent);
    return ProgramDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/programs-schedule/programs-schedule.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/programs-schedule/programs-schedule.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/programs-schedule/programs-schedule.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/programs-schedule/programs-schedule.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg     navbar-inverse\" dir=\"rtl\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"assets/imgs/logo.png\" class=\"logo\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\">\n\n      <i class=\"fas fa-bars bar\" aria-hidden=\"true\"></i>\n\n    </span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse  \" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav   links\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" routerLink=\"/\">الرئيسية <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/live\">البث المباشر</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link lead\" routerLink=\"/schedule\">جدول البرامج</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/programs\">برامجنا</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/articles\">مواضيع</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sports\">رياضة</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/video\">فيديو</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav   ul_icons\">\n      <li class=\"nav-item li_icons\">\n        <!--    <i class=\"fab fa-instagram icons\"></i>-->\n        <img src=\"assets/imgs/instgram.png\" style=\"    border-radius: 5px;\n  margin-bottom: 4px;\n  width: 85%;\">\n      </li>\n      <li class=\"nav-item li_icons\">\n        <!--   <i class=\"fab fa-youtube icons\"></i>-->\n        <img src=\"assets/imgs/youtube.jpg\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 59%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-twitter-square icons\"></i>-->\n        <img src=\"assets/imgs/twiiter.png\" style=\"    border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 55%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-facebook-square icons\"></i>-->\n        <img src=\"assets/imgs/facebook.png\" style=\"        border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 60%;\">\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <a href=\"search.html\">\n          <!--    <i class=\"fas fa-search icons\"></i>-->\n          <img src=\"assets/imgs/search.png\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 30px;\n  width: 39%;\">\n\n        </a>\n      </li>\n\n\n\n\n\n\n    </ul>\n\n  </div>\n\n\n</nav>\n\n\n<main role=\"main\">\n  <div class=\"contained\">\n    <div class=\"video\">\n      <div class=\"row Program_Schedule_row\">\n\n\n        <div class=\"col-lg-3 d-none d-lg-block  \tads_col\"> <img src=\"assets/imgs/sale1.jpg\" class=\"ads float-right\"\n            style=\"margin-right: 12.5%;\"></div>\n        <div class=\"col-lg-6 col-md-12 main_\">\n\n          <div class=\"Program_Schedule\">\n            <div class=\"row special\">\n              <div class=\"col-lg-3 col-md-3 col-xs-12\">\n                <div class=\"box_latestnews box\">\n                  <span class=\"new1 new5\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-md-5 col-xs-12\">\n                <div class=\"box_Live box  row\">\n\n                  <div class=\"col-lg-6 col-md-12 col-xs-12  \">\n\n                    <a href=\"Livebroadcast.html\"> <span class=\"new3\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img img-responsive\"></span></a>\n\n                  </div>\n                  <div class=\"col-lg-6 col-md-12 col-xs-12    \">\n                    <div class=\"col-xs-12 box_Live_row \" style=\"    margin-top: 6px;\">\n                      <div class=\"row\">\n                        <div class=\"col-md-7\">\n                          <a href=\"Livebroadcast.html\"> <span class=\"new2\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n                          </a>\n                        </div>\n                        <div class=\"col-md-5\">\n                          <p class=\"box_Live_head\">أسم البرنامج</p>\n                          <p class=\"box_Live_status\"> <span class=\"box_Live_status1\"><b>الأن</b></span> <span class=\"box_Live_time\"\n                              dir=\"ltr\">02:00 PM</span></p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-xs-12 box_Live_row \">\n                      <div class=\"row\">\n                        <div class=\"col-md-7\">\n                          <a href=\"Livebroadcast.html\"> <span class=\"new2\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n                          </a>\n                        </div>\n                        <div class=\"col-md-5\">\n                          <p class=\"box_Live_head\">أسم البرنامج</p>\n                          <p class=\"box_Live_status\"> <span class=\"box_Live_status2\"><b>التلي</b></span> <span class=\"box_Live_time\"\n                              dir=\"ltr\">02:00 PM</span></p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n            <!--               Second section (Mitup)-->\n\n\n\n\n            <div class=\" mixtup_container_controls\">\n              <div class=\"controls\">\n\n                <button class=\"filter  \" data-filter=\".Sat\">السبت</button>\n                <button class=\"filter\" data-filter=\".Sun\">الأحد</button>\n                <button class=\"filter\" data-filter=\".Mon\">الأتنين</button>\n                <button class=\"filter\" data-filter=\".Tue\">الثلاثاء</button>\n                <button class=\"filter\" data-filter=\".Wen\">الأربعاء</button>\n                <button class=\"filter\" data-filter=\".Thr\">الخميس</button>\n                <button class=\"filter\" data-filter=\".Fri\">الجمعة</button>\n              </div>\n            </div>\n\n\n            <div class=\" mixtup_container_rows\">\n              <div id=\"Container\" class=\"container\">\n\n                <div class=\"mix  Fri\">\n                  <a href=\"ProgramSchedule2.html\">\n                    <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-8 col-xs-12\">\n                        <div class=\"mix_programme_name\">\n                          <h5>إسم البرنامج</h5>\n                          <p>إعادة</p>\n                        </div>\n                        <div class=\"mix_programme_time\">\n                          <h5>2:14 PM</h5>\n\n                          <!--                        <img src=\"assets/imgs/clock.png\" class=\"clock\">-->\n                          <img src=\"assets/imgs/clock.png\" class=\"clock\">\n                        </div>\n                      </div>\n                      <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                        <span class=\"new2\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n                      </div>\n\n                    </div>\n                  </a>\n                </div>\n\n\n                <div class=\"mix  Sat\">\n                  <a href=\"ProgramSchedule2.html\">\n\n                    <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-8 col-xs-12\">\n                        <div class=\"mix_programme_name\">\n                          <h5>إسم البرنامج</h5>\n                          <p>إعادة</p>\n                        </div>\n                        <div class=\"mix_programme_time\">\n                          <h5>2:14 PM</h5> <img src=\"assets/imgs/clock.png\" class=\"clock\">\n                        </div>\n                      </div>\n                      <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                        <span class=\"new2\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n                      </div>\n\n                    </div>\n                  </a>\n                </div>\n\n\n                <div class=\"mix  Mon\">\n                  <a href=\"ProgramSchedule2.html\">\n\n                    <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-8 col-xs-12\">\n                        <div class=\"mix_programme_name\">\n                          <h5>إسم البرنامج</h5>\n                          <p>إعادة</p>\n                        </div>\n                        <div class=\"mix_programme_time\">\n                          <h5>2:14 PM</h5> <img src=\"assets/imgs/clock.png\" class=\"clock\">\n                        </div>\n                      </div>\n                      <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                        <span class=\"new2\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n                      </div>\n\n                    </div>\n                  </a>\n                </div>\n\n\n                <div class=\"mix  Fri\">\n                  <a href=\"ProgramSchedule2.html\">\n\n                    <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-8 col-xs-12\">\n                        <div class=\"mix_programme_name\">\n                          <h5>إسم البرنامج</h5>\n                          <p>إعادة</p>\n                        </div>\n                        <div class=\"mix_programme_time\">\n                          <h5>2:14 PM</h5> <img src=\"assets/imgs/clock.png\" class=\"clock\">\n                        </div>\n                      </div>\n                      <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                        <span class=\"new2\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n                      </div>\n\n                    </div>\n                  </a>\n                </div>\n\n\n\n                <div class=\"mix  Thr\">\n                  <a href=\"ProgramSchedule2.html\">\n\n                    <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-8 col-xs-12\">\n                        <div class=\"mix_programme_name\">\n                          <h5>إسم البرنامج</h5>\n                          <p>إعادة</p>\n                        </div>\n                        <div class=\"mix_programme_time\">\n                          <h5>2:14 PM</h5> <img src=\"assets/imgs/clock.png\" class=\"clock\">\n                        </div>\n                      </div>\n                      <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                        <span class=\"new2\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n                      </div>\n\n                    </div>\n                  </a>\n                </div>\n\n\n\n\n                <div class=\"mix  Sun\">\n                  <a href=\"ProgramSchedule2.html\">\n\n                    <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-8 col-xs-12\">\n                        <div class=\"mix_programme_name\">\n                          <h5>إسم البرنامج</h5>\n                          <p>إعادة</p>\n                        </div>\n                        <div class=\"mix_programme_time\">\n                          <h5>2:14 PM</h5> <img src=\"assets/imgs/clock.png\" class=\"clock\">\n                        </div>\n                      </div>\n                      <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                        <span class=\"new2\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n                      </div>\n\n                    </div>\n                  </a>\n                </div>\n\n\n\n\n                <div class=\"mix  Wen\">\n                  <a href=\"ProgramSchedule2.html\">\n\n                    <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-8 col-xs-12\">\n                        <div class=\"mix_programme_name\">\n                          <h5>إسم البرنامج</h5>\n                          <p>إعادة</p>\n                        </div>\n                        <div class=\"mix_programme_time\">\n                          <h5>2:14 PM</h5> <img src=\"assets/imgs/clock.png\" class=\"clock\">\n                        </div>\n                      </div>\n                      <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                        <span class=\"new2\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n                      </div>\n\n                    </div>\n                  </a>\n                </div>\n\n\n\n\n                <div class=\"mix  Sat\">\n                  <a href=\"ProgramSchedule2.html\">\n\n                    <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-8 col-xs-12\">\n                        <div class=\"mix_programme_name\">\n                          <h5>إسم البرنامج</h5>\n                          <p>إعادة</p>\n                        </div>\n                        <div class=\"mix_programme_time\">\n                          <h5>2:14 PM</h5> <img src=\"assets/imgs/clock.png\" class=\"clock\">\n                        </div>\n                      </div>\n                      <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                        <span class=\"new2\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n                      </div>\n\n                    </div>\n                  </a>\n                </div>\n\n\n                <div class=\"mix  Fri\">\n                  <a href=\"ProgramSchedule2.html\">\n\n                    <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-8 col-xs-12\">\n                        <div class=\"mix_programme_name\">\n                          <h5>إسم البرنامج</h5>\n                          <p>إعادة</p>\n                        </div>\n                        <div class=\"mix_programme_time\">\n                          <h5>2:14 PM</h5> <img src=\"assets/imgs/clock.png\" class=\"clock\">\n                        </div>\n                      </div>\n                      <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                        <span class=\"new2\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n                      </div>\n\n                    </div>\n                  </a>\n                </div>\n\n\n                <div class=\"mix  Sat\">\n                  <a href=\"ProgramSchedule2.html\">\n\n                    <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-8 col-xs-12\">\n                        <div class=\"mix_programme_name\">\n                          <h5>إسم البرنامج</h5>\n                          <p>إعادة</p>\n                        </div>\n                        <div class=\"mix_programme_time\">\n                          <h5>2:14 PM</h5> <img src=\"assets/imgs/clock.png\" class=\"clock\">\n                        </div>\n                      </div>\n                      <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                        <span class=\"new2\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n                      </div>\n\n                    </div>\n                  </a>\n                </div>\n\n\n                <div class=\"mix  Mon\">\n                  <a href=\"ProgramSchedule2.html\">\n\n                    <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-8 col-xs-12\">\n                        <div class=\"mix_programme_name\">\n                          <h5>إسم البرنامج</h5>\n                          <p>إعادة</p>\n                        </div>\n                        <div class=\"mix_programme_time\">\n                          <h5>2:14 PM</h5> <img src=\"assets/imgs/clock.png\" class=\"clock\">\n                        </div>\n                      </div>\n                      <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                        <span class=\"new2\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n                      </div>\n\n                    </div>\n                  </a>\n                </div>\n\n\n                <div class=\"mix  Fri\">\n                  <a href=\"ProgramSchedule2.html\">\n\n                    <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-8 col-xs-12\">\n                        <div class=\"mix_programme_name\">\n                          <h5>إسم البرنامج</h5>\n                          <p>إعادة</p>\n                        </div>\n                        <div class=\"mix_programme_time\">\n                          <h5>2:14 PM</h5> <img src=\"assets/imgs/clock.png\" class=\"clock\">\n                        </div>\n                      </div>\n                      <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                        <span class=\"new2\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n                      </div>\n\n                    </div>\n                  </a>\n                </div>\n\n\n\n                <div class=\"mix  Thr\">\n                  <a href=\"ProgramSchedule2.html\">\n\n                    <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-8 col-xs-12\">\n                        <div class=\"mix_programme_name\">\n                          <h5>إسم البرنامج</h5>\n                          <p>إعادة</p>\n                        </div>\n                        <div class=\"mix_programme_time\">\n                          <h5>2:14 PM</h5> <img src=\"assets/imgs/clock.png\" class=\"clock\">\n                        </div>\n                      </div>\n                      <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                        <span class=\"new2\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n                      </div>\n\n                    </div>\n                  </a>\n                </div>\n\n\n\n\n                <div class=\"mix  Sun\">\n                  <a href=\"ProgramSchedule2.html\">\n\n                    <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-8 col-xs-12\">\n                        <div class=\"mix_programme_name\">\n                          <h5>إسم البرنامج</h5>\n                          <p>إعادة</p>\n                        </div>\n                        <div class=\"mix_programme_time\">\n                          <h5>2:14 PM</h5> <img src=\"assets/imgs/clock.png\" class=\"clock\">\n                        </div>\n                      </div>\n                      <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                        <span class=\"new2\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n                      </div>\n\n                    </div>\n                  </a>\n                </div>\n\n\n\n\n                <div class=\"mix  Wen\">\n                  <a href=\"ProgramSchedule2.html\">\n\n                    <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-8 col-xs-12\">\n                        <div class=\"mix_programme_name\">\n                          <h5>إسم البرنامج</h5>\n                          <p>إعادة</p>\n                        </div>\n                        <div class=\"mix_programme_time\">\n                          <h5>2:14 PM</h5> <img src=\"assets/imgs/clock.png\" class=\"clock\">\n                        </div>\n                      </div>\n                      <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                        <span class=\"new2\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n                      </div>\n\n                    </div>\n                  </a>\n                </div>\n\n\n\n\n                <div class=\"mix  Tue\">\n                  <a href=\"ProgramSchedule2.html\">\n\n                    <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-8 col-xs-12\">\n                        <div class=\"mix_programme_name\">\n                          <h5>إسم البرنامج</h5>\n                          <p>إعادة</p>\n                        </div>\n                        <div class=\"mix_programme_time\">\n                          <h5>2:14 PM</h5> <img src=\"assets/imgs/clock.png\" class=\"clock\">\n                        </div>\n                      </div>\n                      <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                        <span class=\"new2\"><img src=\"assets/imgs/new1.jpg\" class=\"new_img2 img-responsive\"></span>\n                      </div>\n\n                    </div>\n                  </a>\n                </div>\n\n\n                <div class=\"gap\"></div>\n                <div class=\"gap\"></div>\n              </div>\n            </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n          </div>\n        </div>\n\n\n\n\n        <div class=\"col-lg-3 d-none d-lg-block  ads_col\"><img src=\"assets/imgs/sale1.jpg\" class=\"ads float-left\" style=\"margin-left: 12.5%;\"></div>\n\n      </div>\n\n    </div>\n\n\n\n\n\n    <!-- Fooooterrrrrrrrrrr  -->\n\n\n\n    <div class=\"footer\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6  col-xs-12 footer_apps\">\n          <div>\n            <p> حمل تطبيق الوسط </p>\n            <img src=\"assets/imgs/appstore.png\"> <img src=\"assets/imgs/google-play.png\">\n          </div>\n\n        </div>\n\n        <div class=\"col-lg-5  offest-lg-8 col-md-6  col-sm-6 col-xs-12 footer_map\">\n\n\n          <div>\n            <p>خريطه الموقع</p>\n            <p> <a routerLink=\"/\">الرئيسية</a> <a routerLink=\"/live\">البث&nbsp;المباشر</a>\n              <a routerLink=\"/schedule\" class=\"active\">جدول&nbsp;البرامج</a> <a routerLink=\"/programs\">برامجنا</a>\n              <a routerLink=\"/articles\">مواضيع</a>\n\n              <a routerLink=\"/sports\">رياضة</a> <a routerLink=\"/video\">فيديو</a> <a routerLink=\"/aboutUs\">عن&nbsp;الوسط</a>\n              <a routerLink=\"/contactUs\">تواصل&nbsp;معنا</a> <a routerLink=\"/team\">الفريق</a>\n            </p>\n          </div>\n        </div>\n        <hr>\n\n      </div>\n      <div class=\"row footer_row_p2\">\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_icons\">\n          <img src=\"assets/imgs/facebook.png\">\n          <img src=\"assets/imgs/twiiter.png\">\n          <img src=\"assets/imgs/youtube.jpg\">\n          <img src=\"assets/imgs/instgram.png\">\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_dev\">\n\n          DEVELOPED BY: LIBYANA MEDIA PRODUCTION\n\n        </div>\n        <div class=\"col-lg-4   col-md-4  col-sm-4 col-xs-12  footer_copy\">\n\n\n\n          <p>جميع الحقوق الملكية تابعة لشبكة الوسط</p>\n\n        </div>\n\n\n\n\n\n\n\n\n\n\n\n\n      </div>\n\n      <span class=\"clearfix\"></span>\n\n      <div class=\"col-lg-12  col-md-12  col-xs-12  \" style=\"text-align: center\">\n\n      </div>\n\n\n    </div>\n\n  </div>\n\n\n\n\n\n</main>\n"

/***/ }),

/***/ "./src/app/pages/programs-schedule/programs-schedule.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/programs-schedule/programs-schedule.component.ts ***!
  \************************************************************************/
/*! exports provided: ProgramsScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsScheduleComponent", function() { return ProgramsScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgramsScheduleComponent = /** @class */ (function () {
    function ProgramsScheduleComponent() {
    }
    ProgramsScheduleComponent.prototype.ngOnInit = function () {
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
            $(window).on("scroll", function () {
                if ($(window).scrollTop() <= ($(".footer").offset().top) - 500) {
                    $(".navbar").fadeIn(700, "linear");
                }
                else {
                    $(".navbar").fadeOut(700, "linear");
                }
            });
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
    ProgramsScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-programs-schedule',
            template: __webpack_require__(/*! ./programs-schedule.component.html */ "./src/app/pages/programs-schedule/programs-schedule.component.html"),
            styles: [__webpack_require__(/*! ./programs-schedule.component.css */ "./src/app/pages/programs-schedule/programs-schedule.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgramsScheduleComponent);
    return ProgramsScheduleComponent;
}());



/***/ }),

/***/ "./src/app/pages/programs/programs.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/programs/programs.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/programs/programs.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/programs/programs.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg     navbar-inverse\" dir=\"rtl\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"assets/imgs/logo.png\" class=\"logo\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\">\n\n      <i class=\"fas fa-bars bar\" aria-hidden=\"true\"></i>\n\n    </span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse  \" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav   links\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" routerLink=\"/\">الرئيسية <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/live\">البث المباشر</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link lead\" routerLink=\"/schedule\">جدول البرامج</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/programs\">برامجنا</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/articles\">مواضيع</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sports\">رياضة</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/video\">فيديو</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav   ul_icons\">\n      <li class=\"nav-item li_icons\">\n        <!--    <i class=\"fab fa-instagram icons\"></i>-->\n        <img src=\"assets/imgs/instgram.png\" style=\"    border-radius: 5px;\n  margin-bottom: 4px;\n  width: 85%;\">\n      </li>\n      <li class=\"nav-item li_icons\">\n        <!--   <i class=\"fab fa-youtube icons\"></i>-->\n        <img src=\"assets/imgs/youtube.jpg\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 59%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-twitter-square icons\"></i>-->\n        <img src=\"assets/imgs/twiiter.png\" style=\"    border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 55%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-facebook-square icons\"></i>-->\n        <img src=\"assets/imgs/facebook.png\" style=\"        border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 60%;\">\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <a href=\"search.html\">\n          <!--    <i class=\"fas fa-search icons\"></i>-->\n          <img src=\"assets/imgs/search.png\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 30px;\n  width: 39%;\">\n\n        </a>\n      </li>\n\n\n\n\n\n\n    </ul>\n\n  </div>\n\n\n</nav>\n\n\n<header class=\"parallax-zoom-blur\">\n  <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n    <!-- Indicators -->\n    <ul class=\"carousel-indicators\">\n      <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n    </ul>\n\n    <!-- The slideshow -->\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"assets/imgs/camera-crew-field-275977.jpg\" alt=\"Los Angeles\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"assets/imgs/pexels-photo-395132.jpeg\" alt=\"Chicago\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"assets/imgs/camera-crew-field-275977.jpg\" alt=\"New York\">\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\"></span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\"></span>\n    </a>\n  </div>\n</header>\n\n<main role=\"main\">\n  <div class=\"contained\">\n    <div class=\"video\">\n      <div class=\"row OurProgram_row\">\n\n        <div class=\"col-lg-3 d-none d-lg-block  \tads_col\"> <img src=\"assets/imgs/sale1.jpg\" class=\"ads float-right\"\n            style=\"margin-right: 12.5%;\"></div>\n        <div class=\"col-lg-6 col-md-12  OurProgram\">\n\n\n\n          <div class=\"row special \">\n            <div class=\"col-xs-12 section_col2\">\n              <!--                   <i class=\"fa fa-minus section_bar\" aria-hidden=\"true\"></i>-->\n              <p>جميع البرامج</p>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-xs-12\" *ngFor=\"let program of programs\">\n              <a routerLink=\"/program/{{program.id}}\">\n                <img src=\"{{program.icon}}\" class=\"new_img2 img-responsive\">\n                <div class=\"OurProgram_desciption\">\n                  <h5>{{program.name}}</h5>\n                </div>\n              </a>\n            </div>\n          </div>\n          <!-- <div class=\"col-xs-12\" style=\"text-align: center;\"> <button class=\"btn\">المزيد</button></div> -->\n\n\n        </div>\n        <div class=\"col-lg-3 d-none d-lg-block  ads_col\"><img src=\"assets/imgs/sale1.jpg\" class=\"ads float-left\" style=\"margin-left: 12.5%;\"></div>\n\n      </div>\n    </div>\n\n    <!-- Fooooterrrrrrrrrrr  -->\n\n\n\n    <div class=\"footer\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6  col-xs-12 footer_apps\">\n          <div>\n            <p> حمل تطبيق الوسط </p>\n            <img src=\"assets/imgs/appstore.png\"> <img src=\"assets/imgs/google-play.png\">\n          </div>\n\n        </div>\n\n        <div class=\"col-lg-5  offest-lg-8 col-md-6  col-sm-6 col-xs-12 footer_map\">\n\n          <div>\n            <p>خريطه الموقع</p>\n            <p> <a routerLink=\"/\">الرئيسية</a> <a routerLink=\"/live\">البث&nbsp;المباشر</a>\n              <a routerLink=\"/schedule\">جدول&nbsp;البرامج</a> <a routerLink=\"/programs\" class=\"active\">برامجنا</a>\n              <a routerLink=\"/articles\">مواضيع</a>\n\n              <a routerLink=\"/sports\">رياضة</a> <a routerLink=\"/video\">فيديو</a> <a routerLink=\"/aboutUs\">عن&nbsp;الوسط</a>\n              <a routerLink=\"/contactUs\">تواصل&nbsp;معنا</a> <a routerLink=\"/team\">الفريق</a>\n            </p>\n          </div>\n        </div>\n        <hr>\n\n\n\n\n\n\n\n\n\n\n\n      </div>\n      <div class=\"row footer_row_p2\">\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_icons\">\n          <img src=\"assets/imgs/facebook.png\">\n          <img src=\"assets/imgs/twiiter.png\">\n          <img src=\"assets/imgs/youtube.jpg\">\n          <img src=\"assets/imgs/instgram.png\">\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_dev\">\n\n          DEVELOPED BY: LIBYANA MEDIA PRODUCTION\n\n        </div>\n        <div class=\"col-lg-4   col-md-4  col-sm-4 col-xs-12  footer_copy\">\n\n\n\n          <p>جميع الحقوق الملكية تابعة لشبكة الوسط</p>\n\n        </div>\n\n\n\n\n\n\n\n\n\n\n\n\n      </div>\n\n      <span class=\"clearfix\"></span>\n\n      <div class=\"col-lg-12  col-md-12  col-xs-12  \" style=\"text-align: center\">\n\n      </div>\n\n\n    </div>\n\n  </div>\n\n\n\n\n\n</main>\n"

/***/ }),

/***/ "./src/app/pages/programs/programs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/programs/programs.component.ts ***!
  \******************************************************/
/*! exports provided: ProgramsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsComponent", function() { return ProgramsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_uiServices_programs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/uiServices/programs.service */ "./src/app/services/uiServices/programs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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


var ProgramsComponent = /** @class */ (function () {
    function ProgramsComponent(programsService) {
        this.programsService = programsService;
    }
    ProgramsComponent.prototype.ngOnInit = function () {
        this.loadPrograms();
    };
    ProgramsComponent.prototype.loadPrograms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.programsService.getProgramsList()];
                    case 1:
                        _a.programs = _b.sent();
                        this.programs = this.programs.filter(function (program) { return program.isShowen; });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgramsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-programs',
            template: __webpack_require__(/*! ./programs.component.html */ "./src/app/pages/programs/programs.component.html"),
            styles: [__webpack_require__(/*! ./programs.component.css */ "./src/app/pages/programs/programs.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_uiServices_programs_service__WEBPACK_IMPORTED_MODULE_1__["ProgramsService"]])
    ], ProgramsComponent);
    return ProgramsComponent;
}());



/***/ }),

/***/ "./src/app/pages/sports/sports.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/sports/sports.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/sports/sports.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/sports/sports.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg     navbar-inverse\" dir=\"rtl\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"assets/imgs/logo.png\" class=\"logo\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\">\n\n      <i class=\"fas fa-bars bar\" aria-hidden=\"true\"></i>\n\n    </span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse  \" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav   links\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" routerLink=\"/\">الرئيسية <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/live\">البث المباشر</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link lead\" routerLink=\"/schedule\">جدول البرامج</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/programs\">برامجنا</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/articles\">مواضيع</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/sports\">رياضة</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/video\">فيديو</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav   ul_icons\">\n      <li class=\"nav-item li_icons\">\n        <!--    <i class=\"fab fa-instagram icons\"></i>-->\n        <img src=\"assets/imgs/instgram.png\" style=\"    border-radius: 5px;\n  margin-bottom: 4px;\n  width: 85%;\">\n      </li>\n      <li class=\"nav-item li_icons\">\n        <!--   <i class=\"fab fa-youtube icons\"></i>-->\n        <img src=\"assets/imgs/youtube.jpg\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 59%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-twitter-square icons\"></i>-->\n        <img src=\"assets/imgs/twiiter.png\" style=\"    border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 55%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-facebook-square icons\"></i>-->\n        <img src=\"assets/imgs/facebook.png\" style=\"        border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 60%;\">\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <a href=\"search.html\">\n          <!--    <i class=\"fas fa-search icons\"></i>-->\n          <img src=\"assets/imgs/search.png\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 30px;\n  width: 39%;\">\n\n        </a>\n      </li>\n\n\n\n\n\n\n    </ul>\n\n  </div>\n\n\n</nav>\n\n\n<main role=\"main\">\n  <div class=\"contained\">\n    <div class=\"video\">\n      <div class=\"row Subjects_row\">\n\n        <div class=\"col-lg-3 d-none d-lg-block  \tads_col\"> <img src=\"assets/imgs/sale1.jpg\" class=\"ads float-right\"\n            style=\"margin-right: 12.5%;\"></div>\n        <div class=\"col-lg-6 col-md-12 Subjects\">\n          <div class=\"special\">\n            <div class=\"row Subjects_box\" *ngFor=\"let article of articles\">\n\n              <div class=\"col-lg-9 col-md-8 col-xs-12\">\n                <span class=\"share_icons\">\n\n                  <img src=\"assets/imgs/twitter1.png\"><img src=\"assets/imgs/facebook1.png\">\n                  <p class=\"share_word\"> :مشاركة</p>\n\n                </span>\n                <h4>{{article.name}}</h4>\n                <h6> {{article.publishDate | date}} </h6>\n                <p [innerHTML]=\"article.article\">\n                </p>\n              </div>\n              <div class=\"col-lg-3 col-md-4 col-xs-12\">\n                <a routerLink=\"/articleDetails/sports/{{article.id}}\">\n                  <img src=\"{{article.images[0]}}\" class=\"new_img2 img-responsive\">\n                </a>\n              </div>\n\n            </div>\n          </div>\n          <!-- <div class=\"col-xs-12\" style=\"text-align: center;margin-top: 8px;\"> <button class=\"btn\">المزيد</button></div> -->\n\n        </div>\n\n        <div class=\"col-lg-3 d-none d-lg-block  ads_col\"><img src=\"assets/imgs/sale1.jpg\" class=\"ads float-left\" style=\"margin-left: 12.5%;\"></div>\n\n      </div>\n\n    </div>\n\n\n\n\n\n    <!-- Fooooterrrrrrrrrrr  -->\n\n\n\n\n\n    <div class=\"footer\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6  col-xs-12 footer_apps\">\n          <div>\n            <p> حمل تطبيق الوسط </p>\n            <img src=\"assets/imgs/appstore.png\"> <img src=\"assets/imgs/google-play.png\">\n          </div>\n\n        </div>\n\n        <div class=\"col-lg-5  offest-lg-8 col-md-6  col-sm-6 col-xs-12 footer_map\">\n\n\n          <div>\n            <p>خريطه الموقع</p>\n            <p> <a routerLink=\"/\">الرئيسية</a> <a routerLink=\"/live\">البث&nbsp;المباشر</a>\n              <a routerLink=\"/schedule\">جدول&nbsp;البرامج</a> <a routerLink=\"/programs\">برامجنا</a>\n              <a routerLink=\"/articles\">مواضيع</a>\n\n              <a routerLink=\"/sports\" class=\"active\">رياضة</a> <a routerLink=\"/video\">فيديو</a> <a routerLink=\"/aboutUs\">عن&nbsp;الوسط</a>\n              <a routerLink=\"/contactUs\">تواصل&nbsp;معنا</a> <a routerLink=\"/team\">الفريق</a>\n            </p>\n          </div>\n        </div>\n        <hr>\n\n\n\n\n\n\n\n\n\n\n\n      </div>\n      <div class=\"row footer_row_p2\">\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_icons\">\n          <img src=\"assets/imgs/facebook.png\">\n          <img src=\"assets/imgs/twiiter.png\">\n          <img src=\"assets/imgs/youtube.jpg\">\n          <img src=\"assets/imgs/instgram.png\">\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_dev\">\n\n          DEVELOPED BY: LIBYANA MEDIA PRODUCTION\n\n        </div>\n        <div class=\"col-lg-4   col-md-4  col-sm-4 col-xs-12  footer_copy\">\n\n\n\n          <p>جميع الحقوق الملكية تابعة لشبكة الوسط</p>\n\n        </div>\n\n\n\n\n\n\n\n\n\n\n\n\n      </div>\n\n      <span class=\"clearfix\"></span>\n\n      <div class=\"col-lg-12  col-md-12  col-xs-12  \" style=\"text-align: center\">\n\n      </div>\n\n\n    </div>\n\n\n  </div>\n\n\n\n\n\n</main>\n"

/***/ }),

/***/ "./src/app/pages/sports/sports.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/sports/sports.component.ts ***!
  \**************************************************/
/*! exports provided: SportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsComponent", function() { return SportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_uiServices_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/uiServices/articles.service */ "./src/app/services/uiServices/articles.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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



var SportsComponent = /** @class */ (function () {
    function SportsComponent(articlesService, sanitizer) {
        this.articlesService = articlesService;
        this.sanitizer = sanitizer;
    }
    SportsComponent.prototype.ngOnInit = function () {
        this.loadArticles();
    };
    SportsComponent.prototype.loadArticles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.articlesService.getArticlesList(true)];
                    case 1:
                        _a.articles = _b.sent();
                        this.articles = this.articles.filter(function (article) { return article.isShowen; });
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
    SportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sports',
            template: __webpack_require__(/*! ./sports.component.html */ "./src/app/pages/sports/sports.component.html"),
            styles: [__webpack_require__(/*! ./sports.component.css */ "./src/app/pages/sports/sports.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_uiServices_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SportsComponent);
    return SportsComponent;
}());



/***/ }),

/***/ "./src/app/pages/team/team.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/team/team.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/team/team.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/team/team.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg     navbar-inverse\" dir=\"rtl\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"assets/imgs/logo.png\" class=\"logo\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\">\n\n      <i class=\"fas fa-bars bar\" aria-hidden=\"true\"></i>\n\n    </span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse  \" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav   links\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" routerLink=\"/\">الرئيسية <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/live\">البث المباشر</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link lead\" routerLink=\"/schedule\">جدول البرامج</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/programs\">برامجنا</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/articles\">مواضيع</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sports\">رياضة</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/video\">فيديو</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav   ul_icons\">\n      <li class=\"nav-item li_icons\">\n        <!--    <i class=\"fab fa-instagram icons\"></i>-->\n        <img src=\"assets/imgs/instgram.png\" style=\"    border-radius: 5px;\n  margin-bottom: 4px;\n  width: 85%;\">\n      </li>\n      <li class=\"nav-item li_icons\">\n        <!--   <i class=\"fab fa-youtube icons\"></i>-->\n        <img src=\"assets/imgs/youtube.jpg\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 59%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-twitter-square icons\"></i>-->\n        <img src=\"assets/imgs/twiiter.png\" style=\"    border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 55%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-facebook-square icons\"></i>-->\n        <img src=\"assets/imgs/facebook.png\" style=\"        border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 60%;\">\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <a href=\"search.html\">\n          <!--    <i class=\"fas fa-search icons\"></i>-->\n          <img src=\"assets/imgs/search.png\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 30px;\n  width: 39%;\">\n\n        </a>\n      </li>\n\n\n\n\n\n\n    </ul>\n\n  </div>\n\n\n</nav>\n\n\n<main role=\"main\">\n  <div class=\"contained\">\n    <div class=\"video\">\n      <div class=\"row OurProgram_row videos_row team_row\">\n\n        <div class=\"col-lg-3 d-none d-lg-block  \tads_col\"> <img src=\"assets/imgs/sale1.jpg\" class=\"ads float-right\"\n            style=\"margin-right: 12.5%;\"></div>\n        <div class=\"col-lg-6 col-md-12 OurProgram team\">\n\n\n\n          <div class=\"row special\">\n            <div class=\"col-lg-3 col-md-4 col-xs-12\">\n              <a href=\"ProgramSchedule2.html\">\n                <img src=\"assets/imgs/new1.jpg\" class=\"new_img4 img-responsive\">\n                <div class=\"OurProgram_desciption videos\">\n                  <h5> إسم الوظيفة</h5>\n                  <p> نوع الوظيفة</p>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-12\">\n              <a href=\"ProgramSchedule2.html\">\n                <img src=\"assets/imgs/new1.jpg\" class=\"new_img4 img-responsive\">\n                <div class=\"OurProgram_desciption videos\">\n                  <h5> إسم الوظيفة</h5>\n                  <p> نوع الوظيفة</p>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-12\">\n              <a href=\"ProgramSchedule2.html\">\n                <img src=\"assets/imgs/new1.jpg\" class=\"new_img4 img-responsive\">\n                <div class=\"OurProgram_desciption videos\">\n                  <h5> إسم الوظيفة</h5>\n                  <p> نوع الوظيفة</p>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-12\">\n              <a href=\"ProgramSchedule2.html\">\n                <img src=\"assets/imgs/new1.jpg\" class=\"new_img4 img-responsive\">\n                <div class=\"OurProgram_desciption videos\">\n                  <h5> إسم الوظيفة</h5>\n                  <p> نوع الوظيفة</p>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-12\">\n              <a href=\"ProgramSchedule2.html\">\n                <img src=\"assets/imgs/new1.jpg\" class=\"new_img4 img-responsive\">\n                <div class=\"OurProgram_desciption videos\">\n                  <h5> إسم الوظيفة</h5>\n                  <p> نوع الوظيفة</p>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-12\">\n              <a href=\"ProgramSchedule2.html\">\n                <img src=\"assets/imgs/new1.jpg\" class=\"new_img4 img-responsive\">\n                <div class=\"OurProgram_desciption videos\">\n                  <h5> إسم الوظيفة</h5>\n                  <p> نوع الوظيفة</p>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-12\">\n              <a href=\"ProgramSchedule2.html\">\n                <img src=\"assets/imgs/new1.jpg\" class=\"new_img4 img-responsive\">\n                <div class=\"OurProgram_desciption videos\">\n                  <h5> إسم الوظيفة</h5>\n                  <p> نوع الوظيفة</p>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-12\">\n              <a href=\"ProgramSchedule2.html\">\n                <img src=\"assets/imgs/new1.jpg\" class=\"new_img4 img-responsive\">\n                <div class=\"OurProgram_desciption videos\">\n                  <h5> إسم الوظيفة</h5>\n                  <p> نوع الوظيفة</p>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-12\">\n              <a href=\"ProgramSchedule2.html\">\n                <img src=\"assets/imgs/new1.jpg\" class=\"new_img4 img-responsive\">\n                <div class=\"OurProgram_desciption videos\">\n                  <h5> إسم الوظيفة</h5>\n                  <p> نوع الوظيفة</p>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-12\">\n              <a href=\"ProgramSchedule2.html\">\n                <img src=\"assets/imgs/new1.jpg\" class=\"new_img4 img-responsive\">\n                <div class=\"OurProgram_desciption videos\">\n                  <h5> إسم الوظيفة</h5>\n                  <p> نوع الوظيفة</p>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-12\">\n              <a href=\"ProgramSchedule2.html\">\n                <img src=\"assets/imgs/new1.jpg\" class=\"new_img4 img-responsive\">\n                <div class=\"OurProgram_desciption videos\">\n                  <h5> إسم الوظيفة</h5>\n                  <p> نوع الوظيفة</p>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-12\">\n              <a href=\"ProgramSchedule2.html\">\n                <img src=\"assets/imgs/new1.jpg\" class=\"new_img4 img-responsive\">\n                <div class=\"OurProgram_desciption videos\">\n                  <h5> إسم الوظيفة</h5>\n                  <p> نوع الوظيفة</p>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-12\">\n              <a href=\"ProgramSchedule2.html\">\n                <img src=\"assets/imgs/new1.jpg\" class=\"new_img4 img-responsive\">\n                <div class=\"OurProgram_desciption videos\">\n                  <h5> إسم الوظيفة</h5>\n                  <p> نوع الوظيفة</p>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-12\">\n              <a href=\"ProgramSchedule2.html\">\n                <img src=\"assets/imgs/new1.jpg\" class=\"new_img4 img-responsive\">\n                <div class=\"OurProgram_desciption videos\">\n                  <h5> إسم الوظيفة</h5>\n                  <p> نوع الوظيفة</p>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-12\">\n              <a href=\"ProgramSchedule2.html\">\n                <img src=\"assets/imgs/new1.jpg\" class=\"new_img4 img-responsive\">\n                <div class=\"OurProgram_desciption videos\">\n                  <h5> إسم الوظيفة</h5>\n                  <p> نوع الوظيفة</p>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-12\">\n              <a href=\"ProgramSchedule2.html\">\n                <img src=\"assets/imgs/new1.jpg\" class=\"new_img4 img-responsive\">\n                <div class=\"OurProgram_desciption videos\">\n                  <h5> إسم الوظيفة</h5>\n                  <p> نوع الوظيفة</p>\n                </div>\n              </a>\n            </div>\n\n\n          </div>\n\n\n        </div>\n        <div class=\"col-lg-3 d-none d-lg-block  ads_col\"><img src=\"assets/imgs/sale1.jpg\" class=\"ads float-left\" style=\"margin-left: 12.5%;\"></div>\n\n      </div>\n    </div>\n\n    <!-- Fooooterrrrrrrrrrr  -->\n\n\n\n    <div class=\"footer\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6  col-xs-12 footer_apps\">\n          <div>\n            <p> حمل تطبيق الوسط </p>\n            <img src=\"assets/imgs/appstore.png\"> <img src=\"assets/imgs/google-play.png\">\n          </div>\n\n        </div>\n\n        <div class=\"col-lg-5  offest-lg-8 col-md-6  col-sm-6 col-xs-12 footer_map\">\n\n\n          <div>\n            <p>خريطه الموقع</p>\n            <p> <a routerLink=\"/\">الرئيسية</a> <a routerLink=\"/live\">البث&nbsp;المباشر</a>\n              <a routerLink=\"/schedule\">جدول&nbsp;البرامج</a> <a routerLink=\"/programs\">برامجنا</a>\n              <a routerLink=\"/articles\">مواضيع</a>\n\n              <a routerLink=\"/sports\">رياضة</a> <a routerLink=\"/video\">فيديو</a> <a routerLink=\"/aboutUs\">عن&nbsp;الوسط</a>\n              <a routerLink=\"/contactUs\">تواصل&nbsp;معنا</a> <a routerLink=\"/team\" class=\"active\">الفريق</a>\n            </p>\n          </div>\n        </div>\n        <hr>\n\n\n\n\n\n\n\n\n\n\n\n      </div>\n      <div class=\"row footer_row_p2\">\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_icons\">\n          <img src=\"assets/imgs/facebook.png\">\n          <img src=\"assets/imgs/twiiter.png\">\n          <img src=\"assets/imgs/youtube.jpg\">\n          <img src=\"assets/imgs/instgram.png\">\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_dev\">\n\n          DEVELOPED BY: LIBYANA MEDIA PRODUCTION\n\n        </div>\n        <div class=\"col-lg-4   col-md-4  col-sm-4 col-xs-12  footer_copy\">\n\n\n\n          <p>جميع الحقوق الملكية تابعة لشبكة الوسط</p>\n\n        </div>\n\n\n\n\n\n\n\n\n\n\n\n\n      </div>\n\n      <span class=\"clearfix\"></span>\n\n      <div class=\"col-lg-12  col-md-12  col-xs-12  \" style=\"text-align: center\">\n\n      </div>\n\n\n    </div>\n\n\n  </div>\n\n\n\n\n\n</main>\n"

/***/ }),

/***/ "./src/app/pages/team/team.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/team/team.component.ts ***!
  \**********************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/pages/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/pages/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/pages/video/video.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/video/video.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/video/video.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/video/video.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg     navbar-inverse\" dir=\"rtl\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"assets/imgs/logo.png\" class=\"logo\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\">\n\n      <i class=\"fas fa-bars bar\" aria-hidden=\"true\"></i>\n\n    </span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse  \" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav   links\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" routerLink=\"/\">الرئيسية <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/live\">البث المباشر</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link lead\" routerLink=\"/schedule\">جدول البرامج</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/programs\">برامجنا</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/articles\">مواضيع</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sports\">رياضة</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/video\">فيديو</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav   ul_icons\">\n      <li class=\"nav-item li_icons\">\n        <!--    <i class=\"fab fa-instagram icons\"></i>-->\n        <img src=\"assets/imgs/instgram.png\" style=\"    border-radius: 5px;\n  margin-bottom: 4px;\n  width: 85%;\">\n      </li>\n      <li class=\"nav-item li_icons\">\n        <!--   <i class=\"fab fa-youtube icons\"></i>-->\n        <img src=\"assets/imgs/youtube.jpg\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 59%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-twitter-square icons\"></i>-->\n        <img src=\"assets/imgs/twiiter.png\" style=\"    border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 55%;\">\n\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <!--     <i class=\"fab fa-facebook-square icons\"></i>-->\n        <img src=\"assets/imgs/facebook.png\" style=\"        border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 10px;\n  width: 60%;\">\n      </li>\n\n      <li class=\"nav-item li_icons\">\n        <a href=\"search.html\">\n          <!--    <i class=\"fas fa-search icons\"></i>-->\n          <img src=\"assets/imgs/search.png\" style=\"      border-radius: 3px;\n  margin-bottom: 4px;\n  margin-right: 30px;\n  width: 39%;\">\n\n        </a>\n      </li>\n\n\n\n\n\n\n    </ul>\n\n  </div>\n\n\n</nav>\n\n\n<main role=\"main\">\n  <div class=\"contained\">\n    <div class=\"video\">\n      <div class=\"row OurProgram_row videos_row\">\n\n        <div class=\"col-lg-3 d-none d-lg-block  \tads_col\"> <img src=\"assets/imgs/sale1.jpg\" class=\"ads float-right\"\n            style=\"margin-right: 12.5%;\"></div>\n        <div class=\"col-lg-6 col-md-12 OurProgram videos\">\n\n          <div class=\"row special\">\n            <div class=\"col-xs-12 section_col2\">\n              <!--                   <i class=\"fa fa-minus section_bar\" aria-hidden=\"true\"></i>-->\n              <p> فيديو </p>\n            </div>\n\n            <div class=\"col-lg-4 col-md-4 col-xs-12 videos_box\" *ngFor=\"let item of programYoutubeVideos\">\n              <a>\n                <youtube-player class=\"new_img2 img-responsive\" height=\"131\" width=\"90%\" [videoId]=\"item.contentDetails.videoId\"></youtube-player>\n                <div class=\"OurProgram_desciption videos Program_Schedule2_text\">\n                  <h5> {{item.snippet.publishedAt | date}}</h5>\n                  <p> {{item.snippet.title}}</p>\n                </div>\n              </a>\n            </div>\n          </div>\n          <!-- <div class=\"col-xs-12\" style=\"text-align: center;\"> <button class=\"btn\">المزيد</button></div> -->\n\n\n        </div>\n        <div class=\"col-lg-3 d-none d-lg-block  ads_col\"><img src=\"assets/imgs/sale1.jpg\" class=\"ads float-left\" style=\"margin-left: 12.5%;\"></div>\n\n      </div>\n    </div>\n\n    <!-- Fooooterrrrrrrrrrr  -->\n\n\n\n\n    <div class=\"footer\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6  col-xs-12 footer_apps\">\n          <div>\n            <p> حمل تطبيق الوسط </p>\n            <img src=\"assets/imgs/appstore.png\"> <img src=\"assets/imgs/google-play.png\">\n          </div>\n\n        </div>\n\n        <div class=\"col-lg-5  offest-lg-8 col-md-6  col-sm-6 col-xs-12 footer_map\">\n\n\n          <div>\n            <p>خريطه الموقع</p>\n            <p> <a routerLink=\"/\">الرئيسية</a> <a routerLink=\"/live\">البث&nbsp;المباشر</a>\n              <a routerLink=\"/schedule\">جدول&nbsp;البرامج</a> <a routerLink=\"/programs\">برامجنا</a>\n              <a routerLink=\"/articles\">مواضيع</a>\n\n              <a routerLink=\"/sports\">رياضة</a> <a routerLink=\"/video\" class=\"active\">فيديو</a> <a routerLink=\"/aboutUs\">عن&nbsp;الوسط</a>\n              <a routerLink=\"/contactUs\">تواصل&nbsp;معنا</a> <a routerLink=\"/team\">الفريق</a>\n            </p>\n          </div>\n        </div>\n        <hr>\n\n\n\n\n\n\n\n\n\n\n\n      </div>\n      <div class=\"row footer_row_p2\">\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_icons\">\n          <img src=\"assets/imgs/facebook.png\">\n          <img src=\"assets/imgs/twiiter.png\">\n          <img src=\"assets/imgs/youtube.jpg\">\n          <img src=\"assets/imgs/instgram.png\">\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12  footer_dev\">\n\n          DEVELOPED BY: LIBYANA MEDIA PRODUCTION\n\n        </div>\n        <div class=\"col-lg-4   col-md-4  col-sm-4 col-xs-12  footer_copy\">\n\n\n\n          <p>جميع الحقوق الملكية تابعة لشبكة الوسط</p>\n\n        </div>\n\n\n\n\n\n\n\n\n\n\n\n\n      </div>\n\n      <span class=\"clearfix\"></span>\n\n      <div class=\"col-lg-12  col-md-12  col-xs-12  \" style=\"text-align: center\">\n\n      </div>\n\n\n    </div>\n\n\n  </div>\n\n\n\n\n\n</main>\n"

/***/ }),

/***/ "./src/app/pages/video/video.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/video/video.component.ts ***!
  \************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_uiServices_home_page_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/uiServices/home-page-services.service */ "./src/app/services/uiServices/home-page-services.service.ts");
/* harmony import */ var src_app_services_service_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service-handler.service */ "./src/app/services/service-handler.service.ts");
/* harmony import */ var src_app_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Constants */ "./src/app/Constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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




var VideoComponent = /** @class */ (function () {
    function VideoComponent(homeService, serviceHandeler) {
        this.homeService = homeService;
        this.serviceHandeler = serviceHandeler;
    }
    VideoComponent.prototype.ngOnInit = function () {
        this.getContactDetails();
    };
    VideoComponent.prototype.getContactDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, params;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.homeService.getSettings()];
                    case 1:
                        _a.settings = _b.sent();
                        this.videosUrl = this.settings.infoDaTa.videosUrl;
                        params = { "part": "snippet,contentDetails", "maxResults": "50", "playlistId": this.videosUrl, "key": src_app_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].YOUTUBE_API_KEY };
                        this.serviceHandeler.runService("https://www.googleapis.com/youtube/v3/playlistItems", "GET", null, null, null, params).subscribe(function (response) {
                            console.log(response);
                            _this.programYoutubeVideos = response.items;
                        }, function (error) {
                            console.log(error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    VideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/pages/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.css */ "./src/app/pages/video/video.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_uiServices_home_page_services_service__WEBPACK_IMPORTED_MODULE_1__["HomePageServicesService"], src_app_services_service_handler_service__WEBPACK_IMPORTED_MODULE_2__["ServiceHandlerProvider"]])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/app/services/navigation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/navigation.service.ts ***!
  \************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationService = /** @class */ (function () {
    function NavigationService() {
        this.navigationLink = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
    }
    Object.defineProperty(NavigationService.prototype, "getNavigationLink", {
        get: function () {
            return this.navigationLink.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationService.prototype, "setNavigationLink", {
        set: function (navigationLink) {
            this.navigationLink.next(navigationLink);
        },
        enumerable: true,
        configurable: true
    });
    NavigationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NavigationService);
    return NavigationService;
}());



/***/ }),

/***/ "./src/app/services/service-handler.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/service-handler.service.ts ***!
  \*****************************************************/
/*! exports provided: ServiceHandlerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceHandlerProvider", function() { return ServiceHandlerProvider; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ServiceHandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceHandlerProvider = /** @class */ (function () {
    function ServiceHandlerProvider(http) {
        this.http = http;
        console.log('Hello ServiceHandlerProvider Provider');
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ServiceHandlerProvider);
    return ServiceHandlerProvider;
}());



/***/ }),

/***/ "./src/app/services/uiServices/articles.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/uiServices/articles.service.ts ***!
  \*********************************************************/
/*! exports provided: ArticlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return ArticlesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service-handler.service */ "./src/app/services/service-handler.service.ts");
/* harmony import */ var src_app_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Constants */ "./src/app/Constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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



var ArticlesService = /** @class */ (function () {
    function ArticlesService(serviceHadler) {
        this.serviceHadler = serviceHadler;
    }
    ArticlesService.prototype.getArticlesList = function (isSport) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var query = isSport ? "query{\n        sportsArticles{\n          id,\n          name,\n          writer,\n          caption,\n          publishDate,\n          publishTime,\n          article,\n          images,\n          videos,\n          isShowen\n        }\n      }" : "query{\n        articles{\n          id,\n          name,\n          writer,\n          caption,\n          publishDate,\n          publishTime,\n          article,\n          images,\n          videos,\n          isShowen\n        }\n      }";
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
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
                            console.log(error);
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
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
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
                            console.log(error);
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
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
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
                            console.log(error);
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
                console.log(article);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var queryKey = isSport ? "createSportsArticle" : "createArticle";
                        var query = "mutation{\n        " + queryKey + "(data:{\n          name:\"" + article.name + "\",\n          writer:\"" + article.writer + "\",\n          caption:\"" + article.caption + "\",\n          publishDate:\"" + article.publishDate + "\",\n          publishTime:\"" + article.publishTime + "\",\n          article:\"" + _this.escapeDoubleQuotes(article.article) + "\",\n          videos:\"" + article.videos + "\",\n          isShowen:false,\n          images:{\n            set:[\n              \"" + article.images[0] + "\"\n            ]\n          },\n          \n        }){\n          id\n        }\n      }";
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
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
                            console.log(error);
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
                console.log(article);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var queryKey = isSport ? "updateSportsArticle" : "updateArticle";
                        var query = "mutation{\n        " + queryKey + "(\n          where:{id:\"" + article.id + "\"},\n          data:{\n          name:\"" + article.name + "\",\n          writer:\"" + article.writer + "\",\n          caption:\"" + article.caption + "\",\n          publishDate:\"" + article.publishDate + "\",\n          publishTime:\"" + article.publishTime + "\",\n          article:\"" + _this.escapeDoubleQuotes(article.article) + "\",\n          videos:\"" + article.videos + "\",\n          isShowen:" + article.isShowen + ",\n          images:{\n            set:[\n              \"" + article.images[0] + "\"\n            ]\n          },\n          \n        }){\n          id\n        }\n      }";
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
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
                            console.log(error);
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
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
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
                            console.log(error);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_handler_service__WEBPACK_IMPORTED_MODULE_1__["ServiceHandlerProvider"]])
    ], ArticlesService);
    return ArticlesService;
}());



/***/ }),

/***/ "./src/app/services/uiServices/home-page-services.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/uiServices/home-page-services.service.ts ***!
  \*******************************************************************/
/*! exports provided: HomePageServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageServicesService", function() { return HomePageServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service-handler.service */ "./src/app/services/service-handler.service.ts");
/* harmony import */ var src_app_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Constants */ "./src/app/Constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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



var HomePageServicesService = /** @class */ (function () {
    function HomePageServicesService(serviceHadler) {
        this.serviceHadler = serviceHadler;
    }
    HomePageServicesService.prototype.getSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].SETTINGS_QUERY }).subscribe(function (response) {
                            console.log(response);
                            if (response.data && response.data.settings) {
                                resolve(response.data.settings[0]);
                            }
                            else {
                                reject("Failed to load channel settings");
                            }
                        }, function (error) {
                            console.log(error);
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
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
                            if (response.data && response.data.programs) {
                                resolve(response.data.programs);
                            }
                            else {
                                reject("Failed to programs");
                            }
                        }, function (error) {
                            console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    HomePageServicesService.prototype.updateLogo = function (settingsId, logoKey, logoUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var query;
            return __generator(this, function (_a) {
                query = "mutation{\n      updateSetting(where:{id:\"" + settingsId + "\"},data:{\n        " + logoKey + ":\"" + logoUrl + "\"\n      }){\n        " + logoKey + "\n      }\n    }";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
                            if (response.data && response.data.updateSetting) {
                                resolve(true);
                            }
                            else {
                                reject("Please check your internet connection");
                            }
                        }, function (error) {
                            console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    HomePageServicesService.prototype.updateSetting = function (settingsId, settingKey, settingValue) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var query;
            return __generator(this, function (_a) {
                query = "mutation{\n      updateSetting(where:{id:\"" + settingsId + "\"},data:{\n        " + settingKey + ":\"" + settingValue + "\"\n      }){\n        " + settingKey + "\n      }\n    }";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
                            if (response.data && response.data.updateSetting) {
                                resolve(true);
                            }
                            else {
                                reject("Please check your internet connection");
                            }
                        }, function (error) {
                            console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    HomePageServicesService.prototype.updateNewsProgram = function (settingsId, newsProgramId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var query;
            return __generator(this, function (_a) {
                query = "mutation{\n      updateSetting(where:{id:\"" + settingsId + "\"},data:{\n        newsPrograms:{\n          connect:{\n            id:\"" + newsProgramId + "\"\n          }\n        }\n      }){\n        newsPrograms{\n          id,\n          name\n        }\n      }\n    }";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
                            if (response.data && response.data.updateSetting) {
                                resolve(true);
                            }
                            else {
                                reject("Please check your internet connection");
                            }
                        }, function (error) {
                            console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    HomePageServicesService.prototype.updateAppsUrl = function (settingsId, androidUrl, iosUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var query;
            return __generator(this, function (_a) {
                query = "mutation{\n      updateSetting(where:{id:\"" + settingsId + "\"},data:{\n        infoDaTa:{\n          update:{\n            iosUrl:\"" + iosUrl + "\",\n            andUrl:\"" + androidUrl + "\"\n          }\n        }\n      }){\n        infoDaTa{\n          andUrl,\n          iosUrl\n        }\n      }\n    }";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
                            if (response.data && response.data.updateSetting) {
                                resolve(true);
                            }
                            else {
                                reject("Please check your internet connection");
                            }
                        }, function (error) {
                            console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    HomePageServicesService.prototype.updateSpecialBanners = function (settingsId, firstBannerId, secondBannerId, thirdBannerId, fourthBannerId, fivethBannerId, sixthBannerId, priviousBanners) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var disconnectQuery, query;
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
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
                            if (response.data && response.data.updateSetting) {
                                var query2 = "mutation{\n            updateSetting(where:{id:\"" + settingsId + "\"},data:{\n              specialBanners:{\n                connect:[{id:\"" + firstBannerId + "\"},{id:\"" + secondBannerId + "\"},{id:\"" + thirdBannerId + "\"},{id:\"" + fourthBannerId + "\"},{id:\"" + fivethBannerId + "\"},{id:\"" + sixthBannerId + "\"}]\n              }\n            }){\n              specialBanners{\n                id,name\n              }\n            }\n          }";
                                _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query2 }).subscribe(function (response) {
                                    console.log(response);
                                    if (response.data && response.data.updateSetting) {
                                        resolve(true);
                                    }
                                    else {
                                        reject("Please check your internet connection");
                                    }
                                }, function (error) {
                                    console.log(error);
                                    reject("Please check your internet connection");
                                });
                            }
                            else {
                                reject("Please check your internet connection");
                            }
                        }, function (error) {
                            console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    HomePageServicesService.prototype.updateSpecialPrograms = function (settingsId, firstProgramId, secondProgramId, thirdProgramId, fourthProgramId, fivethProgramId, sixthProgramId, priviousPrograms) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var disconnectQuery, query;
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
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
                            if (response.data && response.data.updateSetting) {
                                var query2 = "mutation{\n            updateSetting(where:{id:\"" + settingsId + "\"},data:{\n              specialPrograms:{\n                connect:[{id:\"" + firstProgramId + "\"},{id:\"" + secondProgramId + "\"},{id:\"" + thirdProgramId + "\"},{id:\"" + fourthProgramId + "\"},{id:\"" + fivethProgramId + "\"},{id:\"" + sixthProgramId + "\"}]\n              }\n            }){\n              specialPrograms{\n                id,name\n              }\n            }\n          }";
                                _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query2 }).subscribe(function (response) {
                                    console.log(response);
                                    if (response.data && response.data.updateSetting) {
                                        resolve(true);
                                    }
                                    else {
                                        reject("Please check your internet connection");
                                    }
                                }, function (error) {
                                    console.log(error);
                                    reject("Please check your internet connection");
                                });
                            }
                            else {
                                reject("Please check your internet connection");
                            }
                        }, function (error) {
                            console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    HomePageServicesService.prototype.updateVideos = function (settingsId, videosUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var query;
            return __generator(this, function (_a) {
                query = "mutation{\n      updateSetting(\n        where:{id:\"" + settingsId + "\"},\n        data:{\n          infoDaTa:{\n            update:{\n              videosUrl:\"" + videosUrl + "\"\n            }\n          }\n        }\n      ){\n        infoDaTa{\n          videosUrl\n        }\n      }\n    }";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
                            if (response.data && response.data.updateSetting) {
                                resolve(true);
                            }
                            else {
                                reject("Please check your internet connection");
                            }
                        }, function (error) {
                            console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    HomePageServicesService.prototype.updateContactInfo = function (settingsId, phone, email, address) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var query;
            return __generator(this, function (_a) {
                query = "mutation{\n      updateSetting(\n        where:{id:\"" + settingsId + "\"},\n        data:{\n          infoDaTa:{\n            update:{\n              phone: " + parseInt(phone) + ",\n              address:\"" + address + "\",\n              email:\"" + email + "\"\n            }\n          }\n        }\n      ){\n        infoDaTa{\n          phone,\n          address,\n          email\n        }\n      }\n    }";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
                            if (response.data && response.data.updateSetting) {
                                resolve(true);
                            }
                            else {
                                reject("Please check your internet connection");
                            }
                        }, function (error) {
                            console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    HomePageServicesService.prototype.updateAboutUs = function (settingsId, aboutUsText) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var query;
            return __generator(this, function (_a) {
                query = "mutation{updateSetting(where:{id:\"" + settingsId + "\"},data:{infoDaTa:{update:{aboutUs:\"" + this.escapeDoubleQuotes(aboutUsText) + "\"}}}){infoDaTa{aboutUs}}}";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
                            if (response.data && response.data.updateSetting) {
                                resolve(true);
                            }
                            else {
                                reject("Please check your internet connection");
                            }
                        }, function (error) {
                            console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    HomePageServicesService.prototype.updateTerms = function (settingsId, terms) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var query;
            return __generator(this, function (_a) {
                query = "mutation{updateSetting(where:{id:\"" + settingsId + "\"},data:{infoDaTa:{update:{termsOfUse:\"" + this.escapeDoubleQuotes(terms) + "\"}}}){infoDaTa{termsOfUse}}}";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
                            if (response.data && response.data.updateSetting) {
                                resolve(true);
                            }
                            else {
                                reject("Please check your internet connection");
                            }
                        }, function (error) {
                            console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    HomePageServicesService.prototype.updatePolicy = function (settingsId, policy) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var query;
            return __generator(this, function (_a) {
                query = "mutation{updateSetting(where:{id:\"" + settingsId + "\"},data:{infoDaTa:{update:{policy:\"" + this.escapeDoubleQuotes(policy) + "\"}}}){infoDaTa{policy}}}";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
                            if (response.data && response.data.updateSetting) {
                                resolve(true);
                            }
                            else {
                                reject("Please check your internet connection");
                            }
                        }, function (error) {
                            console.log(error);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_handler_service__WEBPACK_IMPORTED_MODULE_1__["ServiceHandlerProvider"]])
    ], HomePageServicesService);
    return HomePageServicesService;
}());



/***/ }),

/***/ "./src/app/services/uiServices/programs.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/uiServices/programs.service.ts ***!
  \*********************************************************/
/*! exports provided: ProgramsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsService", function() { return ProgramsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service-handler.service */ "./src/app/services/service-handler.service.ts");
/* harmony import */ var src_app_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Constants */ "./src/app/Constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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



var ProgramsService = /** @class */ (function () {
    function ProgramsService(serviceHadler) {
        this.serviceHadler = serviceHadler;
    }
    ProgramsService.prototype.getProgramsList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var query = "query{\n        programs{\n          id,\n          name,\n          icon,\n          isShowen,\n          webBanner\n        }\n      }";
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
                            if (response.data && response.data.programs) {
                                resolve(response.data.programs);
                            }
                            else {
                                reject("Failed to load programs");
                            }
                        }, function (error) {
                            console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    ProgramsService.prototype.getProgramsDetails = function (programId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var query = "query{\n        program(where:{id:\"" + programId + "\"}){\n          id,\n          name,\n          programDate,\n          description,\n          duration,\n          webBanner,\n          mobBanner,\n          icon,\n          playlistUrl,\n          isShowen,\n          presenter\n        }\n      }";
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
                            if (response.data && response.data.program) {
                                resolve(response.data.program);
                            }
                            else {
                                reject("Failed to load programs");
                            }
                        }, function (error) {
                            console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    ProgramsService.prototype.changeProgramAppearanceStatus = function (programId, status) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var query = "mutation{\n        updateProgram(\n          where:{id:\"" + programId + "\"},\n          data:{isShowen: " + status + "}\n        ){\n          id,\n          name,\n          isShowen\n        }\n      }";
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
                            if (response.data && response.data.updateProgram) {
                                resolve(true);
                            }
                            else {
                                reject("Please check your internet connection");
                            }
                        }, function (error) {
                            console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    ProgramsService.prototype.deleteProgram = function (programId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var query = "mutation{\n        deleteProgram(where:{id:\"" + programId + "\"}){\n         id,\n         name\n       }\n       }";
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
                            if (response.data && response.data.deleteProgram) {
                                resolve(true);
                            }
                            else {
                                reject("Please check your internet connection");
                            }
                        }, function (error) {
                            console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    ProgramsService.prototype.createProgram = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var query = "mutation{\n        createProgram(data:{\n          name:\"" + program.name + "\",\n          programDate:\"" + program.name + "\",\n          description:\"" + program.description + "\",\n          presenter:\"" + program.presenter + "\",\n          duration: " + parseInt(program.duration) + ",\n          webBanner:\"" + program.webBanner + "\",\n          mobBanner:\"" + program.mobBanner + "\",\n          icon:\"" + program.icon + "\",\n          playlistUrl:\"" + program.playlistUrl + "\",\n          isShowen:false\n        }){\n          id\n        }\n      }";
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
                            if (response.data && response.data.createProgram) {
                                resolve(true);
                            }
                            else {
                                reject("Please check your internet connection");
                            }
                        }, function (error) {
                            console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    ProgramsService.prototype.updateProgram = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var query = "mutation{\n        updateProgram(\n          where:{id:\"" + program.id + "\"},\n          data:{\n          name:\"" + program.name + "\",\n          programDate:\"" + program.name + "\",\n          description:\"" + program.description + "\",\n          presenter:\"" + program.presenter + "\",\n          duration: " + parseInt(program.duration) + ",\n          webBanner:\"" + program.webBanner + "\",\n          mobBanner:\"" + program.mobBanner + "\",\n          icon:\"" + program.icon + "\",\n          playlistUrl:\"" + program.playlistUrl + "\",\n          isShowen: " + program.isShowen + "\n        }){\n          id\n        }\n      }";
                        _this.serviceHadler.runService(src_app_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL, "POST", null, { "query": query }).subscribe(function (response) {
                            console.log(response);
                            if (response.data && response.data.updateProgram) {
                                resolve(true);
                            }
                            else {
                                reject("Please check your internet connection");
                            }
                        }, function (error) {
                            console.log(error);
                            reject("Please check your internet connection");
                        });
                    })];
            });
        });
    };
    ProgramsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_handler_service__WEBPACK_IMPORTED_MODULE_1__["ServiceHandlerProvider"]])
    ], ProgramsService);
    return ProgramsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    IP: "http://165.227.160.201:5000",
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /data/gen/WTV/TvClient/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map