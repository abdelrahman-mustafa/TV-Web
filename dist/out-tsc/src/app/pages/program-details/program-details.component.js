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
var programs_service_1 = require("src/app/services/uiServices/programs.service");
var router_1 = require("@angular/router");
var service_handler_service_1 = require("src/app/services/service-handler.service");
var Constants_1 = require("src/app/Constants");
var router_2 = require("@angular/router");
var moment = require("moment");
var core_2 = require("@ngx-meta/core");
var ProgramDetailsComponent = /** @class */ (function () {
    function ProgramDetailsComponent(programService, route, serviceHandeler, router, meta) {
        this.programService = programService;
        this.route = route;
        this.serviceHandeler = serviceHandeler;
        this.router = router;
        this.meta = meta;
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
        this.sharingLink = "";
        this.videosCount = 9;
    }
    ProgramDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.programId = params.id;
            // console.log(this.programId);
            _this.getProgramDetails();
        });
        this.sharingLink = Constants_1.Constants.SHARING_URL + this.router.url;
    };
    ProgramDetailsComponent.prototype.getProgramDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.programService.getProgramsDetails(this.programId)];
                    case 1:
                        _a.selectedProgram = _b.sent();
                        console.log(this.selectedProgram);
                        // this.Meta.updateTag({
                        //   property: "og:title", content: this.selectedProgram.name
                        // });
                        // this.Meta.updateTag({
                        //   property: "og:description", content: this.selectedProgram.description
                        // });
                        // this.Meta.updateTag({
                        //   property: "og:image", content: this.selectedProgram.mobBanner
                        // });
                        // this.Meta.updateTag({
                        //   name: "twitter:title", content: this.selectedProgram.name
                        // });
                        // this.Meta.updateTag({
                        //   name: "twitter:description", content: this.selectedProgram.description
                        // });
                        // this.Meta.updateTag({
                        //   name: "twitter:image", content: this.selectedProgram.mobBanner
                        // });
                        this.meta.removeTag("og:title");
                        this.meta.removeTag("og:description");
                        this.meta.removeTag("og:image");
                        this.meta.removeTag("twitter:title");
                        this.meta.removeTag("twitter:description");
                        this.meta.removeTag("twitter:image");
                        this.meta.setTag('og:title', this.selectedProgram.name);
                        this.meta.setTag('og:description', this.selectedProgram.description);
                        this.meta.setTag('og:image', this.selectedProgram.mobBanner);
                        this.meta.setTag('twitter:title', this.selectedProgram.name);
                        this.meta.setTag('twitter:description', this.selectedProgram.description);
                        this.meta.setTag('og:image', this.selectedProgram.mobBanner);
                        this.getVideos();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgramDetailsComponent.prototype.getVideos = function () {
        var _this = this;
        var params = { "part": "snippet,contentDetails", "maxResults": this.videosCount, "playlistId": this.selectedProgram.playlistUrl, "key": Constants_1.Constants.YOUTUBE_API_KEY };
        this.serviceHandeler.runService("https://www.googleapis.com/youtube/v3/playlistItems", "GET", null, null, null, params).subscribe(function (response) {
            // console.log(response);
            _this.programYoutubeVideos = response.items;
        }, function (error) {
            // console.log(error);
        });
    };
    ProgramDetailsComponent.prototype.loadMore = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.videosCount = this.videosCount + 5;
                this.getVideos();
                return [2 /*return*/];
            });
        });
    };
    ProgramDetailsComponent.prototype.translateDate = function (date) {
        moment.locale('ar');
        return moment(date).format("YYYY/MM/DD");
    };
    ProgramDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-program-details',
            templateUrl: './program-details.component.html',
            styleUrls: ['./program-details.component.css']
        }),
        __metadata("design:paramtypes", [programs_service_1.ProgramsService,
            router_1.ActivatedRoute,
            service_handler_service_1.ServiceHandlerProvider,
            router_2.Router,
            core_2.MetaService])
    ], ProgramDetailsComponent);
    return ProgramDetailsComponent;
}());
exports.ProgramDetailsComponent = ProgramDetailsComponent;
//# sourceMappingURL=program-details.component.js.map