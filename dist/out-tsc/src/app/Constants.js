"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environments/environment");
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.BASE_URL = environment_1.environment.IP + "/api";
    Constants.SHARING_URL = "http://wasat.tv/home";
    Constants.YOUTUBE_API_KEY = "AIzaSyB4eQ-1at4gTWuQXpCcCrGOeE_utW3HOBc";
    Constants.YOUTUBE_CHANNEL_ID = "UCeTTToFL9qZIybv69LX20Lg";
    Constants.SETTINGS_QUERY = "query{\n        settings{\n          id,\n          logo,\n          articlesIcon,\n          programIcon,\n          teamIcon,\n          sportsArticleIcon,\n          channelId,\n          infoDaTa{\n            id,\n            address,\n            phone,\n            email,\n            aboutUs,\n            policy,\n            termsOfUse,\n            fbUrl,\n            twUrl,\n            ytUrl,\n            instUrl,\n            iosUrl,\n            andUrl,\n            videosUrl,\n            links{\n              id,\n              name,\n              url,\n              icon\n            }\n          },\n          newsPrograms{\n            id,\n            name,\n            icon,\n            mobBanner,\n            playlistUrl\n          },\n          specialBanners{\n              id,\n            name,\n            icon,\n            webBanner\n          },\n          specialPrograms{\n              id,\n            name,\n            icon,\n            playlistUrl\n          },\n          liveUrl,\n          videoIcon,\n        }\n      }";
    return Constants;
}());
exports.Constants = Constants;
//# sourceMappingURL=Constants.js.map