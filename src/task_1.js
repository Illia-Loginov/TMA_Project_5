var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
import updateObjectInArray from './updateObjectInArray.js';
var getElements = function () {
    var selectors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        selectors[_i] = arguments[_i];
    }
    return selectors.map(function (selector) {
        var element = document.querySelector(selector);
        if (!element) {
            throw new Error("'" + selector + "' not found");
        }
        return element;
    });
};
var getPosts = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var response, json;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, fetch(url)];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error(response.status + " " + response.statusText);
                }
                return [4, response.json()];
            case 2:
                json = _a.sent();
                return [2, json];
        }
    });
}); };
var createPostSection = function (post) {
    var section = document.createElement('section');
    var title = document.createElement('h2');
    title.textContent = post.title;
    section.appendChild(title);
    var body = document.createElement('p');
    body.textContent = post.body;
    section.appendChild(body);
    var info = document.createElement('small');
    info.textContent = "Post #" + post.id + " by User #" + post.userId;
    section.appendChild(info);
    return section;
};
window.onload = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, main_1, mainHeading, posts, updatedPosts, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = getElements('.main', '.main__heading'), main_1 = _a[0], mainHeading = _a[1];
                mainHeading.textContent = '...';
                return [4, getPosts('https://jsonplaceholder.typicode.com/posts')];
            case 1:
                posts = _b.sent();
                updatedPosts = updateObjectInArray(posts, 'id', 3, {
                    title: 'Title of the updated 3rd post',
                    body: 'Body of the updated 3rd post'
                });
                updatedPosts.map(function (post) {
                    var section = createPostSection(post);
                    main_1.appendChild(section);
                });
                mainHeading.textContent = 'Posts';
                return [3, 3];
            case 2:
                error_1 = _b.sent();
                if (error_1 instanceof Error) {
                    alert(error_1.message);
                }
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
