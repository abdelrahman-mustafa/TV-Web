"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var ngx_youtube_player_1 = require("ngx-youtube-player");
var http_1 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var button_1 = require("@ngx-share/button");
var http_2 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
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
var service_handler_service_1 = require("./services/service-handler.service");
var article_details_component_1 = require("./pages/article-details/article-details.component");
var program_details_component_1 = require("./pages/program-details/program-details.component");
var privacy_component_1 = require("./pages/privacy/privacy.component");
var terms_component_1 = require("./pages/terms/terms.component");
var social_media_icons_component_1 = require("./components/social-media-icons/social-media-icons.component");
var mobile_apps_icons_component_1 = require("./components/mobile-apps-icons/mobile-apps-icons.component");
var search_component_1 = require("./pages/search/search.component");
var team_detail_component_1 = require("./pages/team-detail/team-detail.component");
var core_2 = require("@ngx-meta/core");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_page_component_1.HomePageComponent,
                live_stream_component_1.LiveStreamComponent,
                programs_schedule_component_1.ProgramsScheduleComponent,
                programs_component_1.ProgramsComponent,
                articles_component_1.ArticlesComponent,
                sports_component_1.SportsComponent,
                video_component_1.VideoComponent,
                about_us_component_1.AboutUsComponent,
                contact_us_component_1.ContactUsComponent,
                team_component_1.TeamComponent,
                article_details_component_1.ArticleDetailsComponent,
                program_details_component_1.ProgramDetailsComponent,
                privacy_component_1.PrivacyComponent,
                terms_component_1.TermsComponent,
                social_media_icons_component_1.SocialMediaIconsComponent,
                mobile_apps_icons_component_1.MobileAppsIconsComponent,
                search_component_1.SearchComponent,
                team_detail_component_1.TeamDetailComponent
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'WTV' }),
                core_2.MetaModule.forRoot(),
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                ngx_youtube_player_1.YoutubePlayerModule,
                forms_1.FormsModule,
                http_2.HttpModule,
                button_1.ShareButtonModule.forRoot(),
            ],
            providers: [
                service_handler_service_1.ServiceHandlerProvider
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map