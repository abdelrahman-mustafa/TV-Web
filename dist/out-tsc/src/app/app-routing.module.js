"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_page_component_1 = require("./pages/home-page/home-page.component");
var live_stream_component_1 = require("./pages/live-stream/live-stream.component");
var programs_schedule_component_1 = require("./pages/programs-schedule/programs-schedule.component");
var programs_component_1 = require("./pages/programs/programs.component");
var articles_component_1 = require("./pages/articles/articles.component");
var sports_component_1 = require("./pages/sports/sports.component");
var video_component_1 = require("./pages/video/video.component");
var about_us_component_1 = require("./pages/about-us/about-us.component");
var contact_us_component_1 = require("./pages/contact-us/contact-us.component");
var team_component_1 = require("./pages/team/team.component");
var article_details_component_1 = require("./pages/article-details/article-details.component");
var program_details_component_1 = require("./pages/program-details/program-details.component");
var privacy_component_1 = require("./pages/privacy/privacy.component");
var terms_component_1 = require("./pages/terms/terms.component");
var search_component_1 = require("./pages/search/search.component");
var team_detail_component_1 = require("./pages/team-detail/team-detail.component");
var core_2 = require("@ngx-meta/core");
var routes = [
    {
        path: '', canActivateChild: [core_2.MetaGuard], component: home_page_component_1.HomePageComponent
    },
    { path: 'live', component: live_stream_component_1.LiveStreamComponent, },
    { path: 'schedule', component: programs_schedule_component_1.ProgramsScheduleComponent },
    { path: 'programs', component: programs_component_1.ProgramsComponent },
    { path: 'articles', component: articles_component_1.ArticlesComponent },
    { path: 'sports', component: sports_component_1.SportsComponent },
    { path: 'video', component: video_component_1.VideoComponent },
    { path: 'aboutUs', component: about_us_component_1.AboutUsComponent },
    { path: 'privacy', component: privacy_component_1.PrivacyComponent },
    { path: 'terms', component: terms_component_1.TermsComponent },
    { path: 'contactUs', component: contact_us_component_1.ContactUsComponent },
    { path: 'team', component: team_component_1.TeamComponent },
    { path: 'articleDetails/:type/:id', component: article_details_component_1.ArticleDetailsComponent },
    { path: 'program/:id', component: program_details_component_1.ProgramDetailsComponent },
    { path: 'search', component: search_component_1.SearchComponent },
    { path: 'team-detail/:id', component: team_detail_component_1.TeamDetailComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map