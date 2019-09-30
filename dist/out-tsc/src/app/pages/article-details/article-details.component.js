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
var router_1 = require("@angular/router");
var articles_service_1 = require("src/app/services/uiServices/articles.service");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var router_2 = require("@angular/router");
var Constants_1 = require("src/app/Constants");
var core_2 = require("@ngx-meta/core");
var ArticleDetailsComponent = /** @class */ (function () {
    function ArticleDetailsComponent(route, articlesServices, sanitizer, location, router, meta) {
        this.route = route;
        this.articlesServices = articlesServices;
        this.sanitizer = sanitizer;
        this.location = location;
        this.router = router;
        this.meta = meta;
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
        this.showCarousel = false;
        this.sharingLink = "";
        this.articlesCount = 5;
    }
    ArticleDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.articleId = params.id;
            _this.articleType = params.type;
            // console.log(this.articleId + " " + this.articleType);
            _this.showCarousel = false;
            _this.getArticleDetails();
            _this.loadArticles();
        });
        // console.log(this.router.url);
        this.sharingLink = Constants_1.Constants.SHARING_URL + this.router.url;
        // console.log(this.sharingLink);
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
                        console.log(this.selectedArticle);
                        // this.meta.setTag({
                        //   property:"og:title", content: this.selectedArticle.caption
                        // });
                        // this.Meta.updateTag({
                        //   property:"og:description", content: this.selectedArticle.name
                        // });
                        // this.Meta.updateTag({
                        //   property:"og:image", content: this.selectedArticle.images[0]
                        // });
                        // this.Meta.updateTag({
                        //   name:"twitter:title",  content: this.selectedArticle.caption
                        // });
                        // this.Meta.updateTag({
                        //   name:"twitter:description",  content: this.selectedArticle.name
                        // });
                        // this.Meta.updateTag({
                        //   name:"twitter:image",  content: this.selectedArticle.images[0]
                        // });
                        this.meta.removeTag("og:title");
                        this.meta.removeTag("og:description");
                        this.meta.removeTag("og:image");
                        this.meta.removeTag("twitter:title");
                        this.meta.removeTag("twitter:description");
                        this.meta.removeTag("twitter:image");
                        this.meta.setTag('og:title', this.selectedArticle.caption);
                        this.meta.setTag('og:description', this.selectedArticle.name);
                        this.meta.setTag('og:image', this.selectedArticle.images[0]);
                        this.meta.setTag('twitter:title', this.selectedArticle.caption);
                        this.meta.setTag('twitter:description', this.selectedArticle.name);
                        this.meta.setTag('og:image', this.selectedArticle.images[0]);
                        this.selectedArticle.publishTime = this.selectedArticle.publishTime.substr(this.selectedArticle.publishTime.indexOf("T") + 1, 5);
                        this.articleBody = this.sanitizer.bypassSecurityTrustHtml(this.selectedArticle.article);
                        this.showCarousel = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticleDetailsComponent.prototype.loadArticles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.articlesServices.getArticlesList(this.articleType == "sports", this.articlesCount)];
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
    ArticleDetailsComponent.prototype.loadMore = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.location.back();
                return [2 /*return*/];
            });
        });
    };
    ArticleDetailsComponent.prototype.getSharingLink = function (articleId) {
        return Constants_1.Constants.SHARING_URL + "/articleDetails/" + this.articleType + "/" + articleId;
    };
    ArticleDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-article-details',
            templateUrl: './article-details.component.html',
            styleUrls: ['./article-details.component.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            articles_service_1.ArticlesService,
            platform_browser_1.DomSanitizer,
            common_1.Location,
            router_2.Router,
            core_2.MetaService])
    ], ArticleDetailsComponent);
    return ArticleDetailsComponent;
}());
exports.ArticleDetailsComponent = ArticleDetailsComponent;
//# sourceMappingURL=article-details.component.js.map