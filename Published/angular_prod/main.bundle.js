webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_match_match_component__ = __webpack_require__("../../../../../src/app/core/match/match.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__startup_firstNavigation_guard__ = __webpack_require__("../../../../../src/app/startup/firstNavigation.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_match_result_component__ = __webpack_require__("../../../../../src/app/core/match/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__startup_routesNames__ = __webpack_require__("../../../../../src/app/startup/routesNames.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_startPage_startPage_component__ = __webpack_require__("../../../../../src/app/core/startPage/startPage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__statistics_statistics_component__ = __webpack_require__("../../../../../src/app/statistics/statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__statistics_statistics_module__ = __webpack_require__("../../../../../src/app/statistics/statistics.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: __WEBPACK_IMPORTED_MODULE_8__startup_routesNames__["a" /* RoutesNames */].StartPage, component: __WEBPACK_IMPORTED_MODULE_9__core_startPage_startPage_component__["a" /* StartPageComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_6__startup_firstNavigation_guard__["a" /* FirstNavigationGuard */]]
                },
                {
                    path: __WEBPACK_IMPORTED_MODULE_8__startup_routesNames__["a" /* RoutesNames */].MatchPage, component: __WEBPACK_IMPORTED_MODULE_5__core_match_match_component__["a" /* MatchComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_6__startup_firstNavigation_guard__["a" /* FirstNavigationGuard */]]
                },
                {
                    path: __WEBPACK_IMPORTED_MODULE_8__startup_routesNames__["a" /* RoutesNames */].ResultsPage, component: __WEBPACK_IMPORTED_MODULE_7__core_match_result_component__["a" /* ResultComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_6__startup_firstNavigation_guard__["a" /* FirstNavigationGuard */]]
                },
                {
                    path: __WEBPACK_IMPORTED_MODULE_8__startup_routesNames__["a" /* RoutesNames */].StatisticsPage, component: __WEBPACK_IMPORTED_MODULE_10__statistics_statistics_component__["a" /* StatisticsComponent */],
                },
                { path: '**', redirectTo: "/" + __WEBPACK_IMPORTED_MODULE_8__startup_routesNames__["a" /* RoutesNames */].StartPage }
            ]), __WEBPACK_IMPORTED_MODULE_11__statistics_statistics_module__["a" /* StatisticsModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__startup_firstNavigation_guard__["a" /* FirstNavigationGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_currentPlayers_abstracts_service__ = __webpack_require__("../../../../../src/app/core/models/currentPlayers.abstracts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_currentPlayers_service__ = __webpack_require__("../../../../../src/app/core/models/currentPlayers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__match_match_component__ = __webpack_require__("../../../../../src/app/core/match/match.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__match_result_component__ = __webpack_require__("../../../../../src/app/core/match/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__startPage_startPage_component__ = __webpack_require__("../../../../../src/app/core/startPage/startPage.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









/**
 * Angular's featur module for the core components.
 */
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_8__startPage_startPage_component__["a" /* StartPageComponent */], __WEBPACK_IMPORTED_MODULE_6__match_match_component__["a" /* MatchComponent */], __WEBPACK_IMPORTED_MODULE_7__match_result_component__["a" /* ResultComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_8__startPage_startPage_component__["a" /* StartPageComponent */], __WEBPACK_IMPORTED_MODULE_6__match_match_component__["a" /* MatchComponent */], __WEBPACK_IMPORTED_MODULE_7__match_result_component__["a" /* ResultComponent */]],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_4__models_currentPlayers_abstracts_service__["a" /* CurrentPlayersServices_TKN */], useClass: __WEBPACK_IMPORTED_MODULE_5__models_currentPlayers_service__["a" /* CurrentPlayersServices */] }
        ],
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/match/match.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\r\n    <div class=\"col-sm-10 col-lg-6 col-xl-4\">\r\n        <h2 class=\"text-center\">Round #{{roundNumber}}</h2>\r\n        <hr />\r\n\r\n        <!-- [TODO] I don't like this approach. -->\r\n        <h3>{{turnNumber === 1 ? player1Move.Player.Name : player2Move.Player.Name}}</h3>\r\n        <form id=\"matchForm\" novalidate #form=\"ngForm\" (ngSubmit)=\"submit(form)\">\r\n            <div class=\"form-group\">\r\n                <div class=\"row\">\r\n                    <label class=\"col-4 col-form-label\" for=\"currentPlayerMove\">Select Move:</label>\r\n                    <div class=\"col-8\">\r\n                        <select id=\"currentPlayerMove\" name=\"currentPlayerMove\" class=\"form-control\" [class.submitted]=\"submitted\">\r\n                          <option disabled selected value=\"\"></option>\r\n                          <option *ngFor=\"let item of possibleMoves\" [ngValue]=\"item\">{{item}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <small *ngIf=\"submitted && invalid\" class=\"text-danger\">\r\n                          *You must select a move.\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row mb-0\">\r\n                <div class=\"col\">\r\n                    <button class=\"btn btn-outline-primary btn-block\" type=\"submit\">Ok</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"col-1\" [hidden]=\"roundNumber <= 1\"></div>\r\n    <div class=\"col-sm-10 col-lg-6 col-xl-4\" [hidden]=\"roundNumber <= 1\">\r\n        <h3 class=\"text-left\">Score</h3>\r\n        <hr />\r\n        <table class=\"table table-sm\">\r\n            <thead class=\"thead-default\">\r\n                <tr class=\"text-center\">\r\n                    <th>Round</th>\r\n                    <th>Winner</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let result of roundsScores; let i = index\" class=\"text-center\">\r\n                    <td>{{i + 1}}</td>\r\n                    <td>{{result}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/match/match.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_currentPlayers_abstracts_service__ = __webpack_require__("../../../../../src/app/core/models/currentPlayers.abstracts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__playerMove_model__ = __webpack_require__("../../../../../src/app/core/match/playerMove.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__possibleMoves_model__ = __webpack_require__("../../../../../src/app/core/match/possibleMoves.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__startup_routesNames__ = __webpack_require__("../../../../../src/app/startup/routesNames.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/**
 * Represents the match component of our application.
 */
var MatchComponent = (function () {
    function MatchComponent(_playersServices, _router) {
        this._playersServices = _playersServices;
        this._router = _router;
        /**
         * Represents the list of possible moves to perform by a player.
         */
        this.possibleMoves = [
            __WEBPACK_IMPORTED_MODULE_4__possibleMoves_model__["a" /* PossibleMoves */][__WEBPACK_IMPORTED_MODULE_4__possibleMoves_model__["a" /* PossibleMoves */].Rock],
            __WEBPACK_IMPORTED_MODULE_4__possibleMoves_model__["a" /* PossibleMoves */][__WEBPACK_IMPORTED_MODULE_4__possibleMoves_model__["a" /* PossibleMoves */].Paper],
            __WEBPACK_IMPORTED_MODULE_4__possibleMoves_model__["a" /* PossibleMoves */][__WEBPACK_IMPORTED_MODULE_4__possibleMoves_model__["a" /* PossibleMoves */].Scissors]
        ];
    }
    MatchComponent.prototype.ngOnInit = function () {
        this.reset();
    };
    /**
     * Process the move selected by the player and, if necessary, proclames a winer.
     */
    MatchComponent.prototype.submit = function (form) {
        this.submitted = true;
        // [TODO] I don't like this approach
        var element = document.getElementById('currentPlayerMove');
        var value = element.value;
        this.invalid = value == null || value === '';
        if (this.invalid) {
            return;
        }
        if (this.turnNumber === 1) {
            this.player1Move.Move = __WEBPACK_IMPORTED_MODULE_4__possibleMoves_model__["a" /* PossibleMoves */][value];
            this.setNextTurn();
        }
        else {
            this.player2Move.Move = __WEBPACK_IMPORTED_MODULE_4__possibleMoves_model__["a" /* PossibleMoves */][value];
            this.processRound();
        }
        this.submitted = false;
        this.resetForm();
    };
    MatchComponent.prototype.setNextTurn = function () {
        this.turnNumber++;
    };
    MatchComponent.prototype.processRound = function () {
        var winner = this.calculateRoundWinner();
        if (winner == null) {
            this.roundsScores.push('[TIE]');
        }
        else {
            this.roundsScores.push(winner.Name);
            winner.WonRounds++;
            if (winner.WonRounds === 3) {
                this._router.navigateByUrl("/" + __WEBPACK_IMPORTED_MODULE_5__startup_routesNames__["a" /* RoutesNames */].ResultsPage);
            }
        }
        this.roundNumber++;
        this.resetTurn();
    };
    MatchComponent.prototype.calculateRoundWinner = function () {
        if (this.player1Move.Move === this.player2Move.Move) {
            return null;
        }
        var winByRock = this.player1Move.Move === __WEBPACK_IMPORTED_MODULE_4__possibleMoves_model__["a" /* PossibleMoves */].Rock && this.player2Move.Move === __WEBPACK_IMPORTED_MODULE_4__possibleMoves_model__["a" /* PossibleMoves */].Scissors;
        var winByPaper = this.player1Move.Move === __WEBPACK_IMPORTED_MODULE_4__possibleMoves_model__["a" /* PossibleMoves */].Paper && this.player2Move.Move === __WEBPACK_IMPORTED_MODULE_4__possibleMoves_model__["a" /* PossibleMoves */].Rock;
        var winByScissors = this.player1Move.Move === __WEBPACK_IMPORTED_MODULE_4__possibleMoves_model__["a" /* PossibleMoves */].Scissors && this.player2Move.Move === __WEBPACK_IMPORTED_MODULE_4__possibleMoves_model__["a" /* PossibleMoves */].Paper;
        return (winByRock || winByPaper || winByScissors) ? this.player1Move.Player : this.player2Move.Player;
    };
    MatchComponent.prototype.reset = function () {
        this.roundNumber = 1;
        this.roundsScores = new Array();
        this.resetTurn();
    };
    MatchComponent.prototype.resetTurn = function () {
        this.turnNumber = 1;
        this.player1Move = new __WEBPACK_IMPORTED_MODULE_3__playerMove_model__["a" /* PlayerMove */](this._playersServices.Player1, null);
        this.player2Move = new __WEBPACK_IMPORTED_MODULE_3__playerMove_model__["a" /* PlayerMove */](this._playersServices.Player2, null);
        this.resetForm();
    };
    MatchComponent.prototype.resetForm = function () {
        // [TODO] I don't like this:
        var form = document.getElementById('matchForm');
        form.reset();
    };
    return MatchComponent;
}());
MatchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: __webpack_require__("../../../../../src/app/core/match/match.component.html")
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__models_currentPlayers_abstracts_service__["a" /* CurrentPlayersServices_TKN */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_currentPlayers_abstracts_service__["ICurrentPlayersServices"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_currentPlayers_abstracts_service__["ICurrentPlayersServices"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MatchComponent);

var _a, _b;
//# sourceMappingURL=match.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/match/playerMove.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerMove; });
/**
 * Represents a move performed by a Player.
 */
var PlayerMove = (function () {
    function PlayerMove(_player, _move) {
        this._player = _player;
        this._move = _move;
    }
    ;
    Object.defineProperty(PlayerMove.prototype, "Player", {
        /**
         * Gets the player that performed the move.
         */
        get: function () {
            return this._player;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerMove.prototype, "Move", {
        /**
         * Gets/Sets the move performed.
         */
        get: function () {
            return this._move;
        },
        set: function (move) {
            this._move = move;
        },
        enumerable: true,
        configurable: true
    });
    return PlayerMove;
}());

//# sourceMappingURL=playerMove.model.js.map

/***/ }),

/***/ "../../../../../src/app/core/match/possibleMoves.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PossibleMoves; });
/**
 * Available moves for the Rock, Paper, Scissors game.
 */
/**
 * Available moves for the Rock, Paper, Scissors game.
 */ var PossibleMoves;
(function (PossibleMoves) {
    PossibleMoves[PossibleMoves["Rock"] = 0] = "Rock";
    PossibleMoves[PossibleMoves["Paper"] = 1] = "Paper";
    PossibleMoves[PossibleMoves["Scissors"] = 2] = "Scissors";
})(PossibleMoves || (PossibleMoves = {}));
//# sourceMappingURL=possibleMoves.model.js.map

/***/ }),

/***/ "../../../../../src/app/core/match/result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center justify-content-center\">\r\n    <div class=\"col-sm-10 col-lg-8 col-xl-6\">\r\n        <div class=\"text-center\">\r\n            <h2>We have a WINNER!!</h2>\r\n            <br>\r\n            <h2>{{Winner.Name}} is the new EMPEROR</h2>\r\n            <br>\r\n            <a class=\"btn btn-outline-primary\" [routerLink]=\"StartPageRouterLink\">Play Again</a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/match/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_currentPlayers_abstracts_service__ = __webpack_require__("../../../../../src/app/core/models/currentPlayers.abstracts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startup_routesNames__ = __webpack_require__("../../../../../src/app/startup/routesNames.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__statistics_playerDataSource_abstracts_model__ = __webpack_require__("../../../../../src/app/statistics/playerDataSource.abstracts.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




/**
 * Represents the result page of a finished match.
 */
var ResultComponent = (function () {
    function ResultComponent(_playersServices, _dataSource) {
        this._playersServices = _playersServices;
        this._dataSource = _dataSource;
        /**
         * Specifies the start page route link.
         */
        this.StartPageRouterLink = "/" + __WEBPACK_IMPORTED_MODULE_2__startup_routesNames__["a" /* RoutesNames */].StartPage;
    }
    ResultComponent.prototype.ngAfterViewInit = function () {
        this._dataSource.registerWin(this.Winner.Name).subscribe();
    };
    Object.defineProperty(ResultComponent.prototype, "Winner", {
        /**
         * Gets the player with most rounds won.
         */
        get: function () {
            return this._playersServices.Player1.WonRounds > this._playersServices.Player2.WonRounds
                ? this._playersServices.Player1
                : this._playersServices.Player2;
        },
        enumerable: true,
        configurable: true
    });
    return ResultComponent;
}());
ResultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: __webpack_require__("../../../../../src/app/core/match/result.component.html")
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__models_currentPlayers_abstracts_service__["a" /* CurrentPlayersServices_TKN */])),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__statistics_playerDataSource_abstracts_model__["a" /* PlayerDataSource_TKN */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_currentPlayers_abstracts_service__["ICurrentPlayersServices"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_currentPlayers_abstracts_service__["ICurrentPlayersServices"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__statistics_playerDataSource_abstracts_model__["IPlayerDataSource"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__statistics_playerDataSource_abstracts_model__["IPlayerDataSource"]) === "function" && _b || Object])
], ResultComponent);

var _a, _b;
//# sourceMappingURL=result.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/models/currentPlayer.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentPlayer; });
/**
 * Model class that represents the name and
 * won round for an user on an on-going match.
 */
var CurrentPlayer = (function () {
    /**
     * Creates a new instance of a player.
     */
    function CurrentPlayer() {
        this._wonRounds = 0;
    }
    Object.defineProperty(CurrentPlayer.prototype, "Name", {
        /**
         * Gets the name of the player.
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name of the player.
         */
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentPlayer.prototype, "WonRounds", {
        /**
         * Gets the amount of rounds won by the player.
         */
        get: function () {
            return this._wonRounds;
        },
        /**
         * Sets the amount of rounds won by the player.
         */
        set: function (wonRounds) {
            this._wonRounds = wonRounds;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentPlayer;
}());

//# sourceMappingURL=currentPlayer.model.js.map

/***/ }),

/***/ "../../../../../src/app/core/models/currentPlayers.abstracts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentPlayersServices_TKN; });

/**
 * Used to allow SOLID and Angular's DI.
 */
var CurrentPlayersServices_TKN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* OpaqueToken */]('ICurrentPlayersServices');
//# sourceMappingURL=currentPlayers.abstracts.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/models/currentPlayers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__currentPlayer_model__ = __webpack_require__("../../../../../src/app/core/models/currentPlayer.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentPlayersServices; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Basic implementation of the defined services for the Current Player model.
 */
var CurrentPlayersServices = (function () {
    /**
     * Creates a new instance of CurrentPlayersServices.
     */
    function CurrentPlayersServices() {
        this.reset();
    }
    Object.defineProperty(CurrentPlayersServices.prototype, "Player1", {
        /**
         * Gets the Player1.
         */
        get: function () {
            return this._player1;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CurrentPlayersServices.prototype, "Player2", {
        /**
         * Gets the Player2.
         */
        get: function () {
            return this._player2;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Restar the models by creating new instances of them,
     * withouth a name and with 0 wins.
     */
    CurrentPlayersServices.prototype.reset = function () {
        this._player1 = new __WEBPACK_IMPORTED_MODULE_1__currentPlayer_model__["a" /* CurrentPlayer */]();
        this._player2 = new __WEBPACK_IMPORTED_MODULE_1__currentPlayer_model__["a" /* CurrentPlayer */]();
    };
    return CurrentPlayersServices;
}());
CurrentPlayersServices = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CurrentPlayersServices);

//# sourceMappingURL=currentPlayers.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/startPage/startPage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center justify-content-center\">\r\n    <div class=\"col-sm-10 col-lg-8 col-xl-6\">\r\n        <h2 class=\"text-center\">Enter the Player's Names</h2>\r\n        <hr />\r\n        <div class=\"form-group row\">\r\n            <div class=\"col\">\r\n                <small *ngIf=\"HaveSameNames && submitted\" class=\"text-danger\">* You cannot play against yourself.</small>\r\n            </div>\r\n        </div>\r\n        <form id=\"startPageForm\" novalidate #form=\"ngForm\" (ngSubmit)=\"submit(form)\">\r\n            <div class=\"form-group\">\r\n                <div class=\"row\">\r\n                    <label class=\"col-3 col-lg-2 col-form-label\" for=\"player1Name\">Player 1:</label>\r\n                    <div class=\"col-9 col-lg-10\">\r\n                        <input id=\"player1Name\" name=\"player1Name\" class=\"form-control custom-validation\" type=\"text\" placeholder=\"John Doe\" #player1Name=\"ngModel\" [(ngModel)]=\"Player1.Name\" [class.submitted]=\"submitted\" [class.invalid]=\"HaveSameNames\" required>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <small *ngIf=\"submitted && player1Name.invalid\" class=\"text-danger\">\r\n                          *The player's name is required.\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"row\">\r\n                    <label class=\"col-3 col-lg-2 col-form-label\" for=\"player2Name\">Player 2:</label>\r\n                    <div class=\"col-9 col-lg-10\">\r\n                        <input id=\"player2Name\" name=\"player2Name\" class=\"form-control custom-validation\" type=\"text\" placeholder=\"Jane Doe\" #player2Name=\"ngModel\" [(ngModel)]=\"Player2.Name\" [class.submitted]=\"submitted\" [class.invalid]=\"HaveSameNames\" required>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <small *ngIf=\"submitted && player2Name.invalid\" class=\"text-danger\">\r\n                          *The player's name is required.\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row mb-0\">\r\n                <div class=\"col\">\r\n                    <button class=\"btn btn-outline-primary btn-block\" type=\"submit\">Start</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"row small justify-content-end\">\r\n                <div class=\"col text-right\">\r\n                    <a [routerLink]=\"StatisticsRouterLink\">(View players' records)</a>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/startPage/startPage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_currentPlayers_abstracts_service__ = __webpack_require__("../../../../../src/app/core/models/currentPlayers.abstracts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__startup_routesNames__ = __webpack_require__("../../../../../src/app/startup/routesNames.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




/**
 * Represents the start page of our application.
 */
var StartPageComponent = (function () {
    function StartPageComponent(_playersServices, _router) {
        var _this = this;
        this._playersServices = _playersServices;
        this._router = _router;
        /**
         * Specifies the statistics page route link.
         */
        this.StatisticsRouterLink = "/" + __WEBPACK_IMPORTED_MODULE_3__startup_routesNames__["a" /* RoutesNames */].StatisticsPage;
        this._router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */] && event.urlAfterRedirects === "/" + __WEBPACK_IMPORTED_MODULE_3__startup_routesNames__["a" /* RoutesNames */].StartPage) {
                _this.restart();
            }
        });
    }
    Object.defineProperty(StartPageComponent.prototype, "Player1", {
        /**
         * Gets the First player.
         */
        get: function () {
            return this._playersServices.Player1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StartPageComponent.prototype, "Player2", {
        /**
         * Gets the Second player.
         */
        get: function () {
            return this._playersServices.Player2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StartPageComponent.prototype, "HaveSameNames", {
        /**
         * Convenience property to know whether both names have been entered the same.
         */
        get: function () {
            return this.Player1.Name != null
                && this.Player1.Name !== ''
                && this.Player1.Name === this.Player2.Name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Validates the entered player's information and, if valid, redirect to the match component.
     * @param form The template's form.
     */
    StartPageComponent.prototype.submit = function (form) {
        this.submitted = true;
        if (!form.valid || this.HaveSameNames) {
            return;
        }
        this._router.navigateByUrl("/" + __WEBPACK_IMPORTED_MODULE_3__startup_routesNames__["a" /* RoutesNames */].MatchPage);
    };
    /**
     * Used to restart the component to an initial state.
     */
    StartPageComponent.prototype.restart = function () {
        this.submitted = false;
        this._playersServices.reset();
        // [TODO] I don't like this:
        var form = document.getElementById('startPageForm');
        form.reset();
    };
    return StartPageComponent;
}());
StartPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: __webpack_require__("../../../../../src/app/core/startPage/startPage.component.html"),
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__models_currentPlayers_abstracts_service__["a" /* CurrentPlayersServices_TKN */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_currentPlayers_abstracts_service__["ICurrentPlayersServices"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_currentPlayers_abstracts_service__["ICurrentPlayersServices"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], StartPageComponent);

var _a, _b;
//# sourceMappingURL=startPage.component.js.map

/***/ }),

/***/ "../../../../../src/app/startup/firstNavigation.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_startPage_startPage_component__ = __webpack_require__("../../../../../src/app/core/startPage/startPage.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstNavigationGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * This route guard, guards that certain pages cannot be accessed
 * unless StartPage component has been accessed first.
 * It should be applied to the StartPage and to any other component that
 * requires a previous access to the StartPage.
 */
var FirstNavigationGuard = (function () {
    function FirstNavigationGuard(router) {
        this.router = router;
        this._firstNavigation = true;
    }
    FirstNavigationGuard.prototype.canActivate = function (route, state) {
        if (!this._firstNavigation) {
            return true;
        }
        if (route.component === __WEBPACK_IMPORTED_MODULE_2__core_startPage_startPage_component__["a" /* StartPageComponent */]) {
            this._firstNavigation = false;
            return true;
        }
        this.router.navigateByUrl('/');
        return false;
    };
    return FirstNavigationGuard;
}());
FirstNavigationGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], FirstNavigationGuard);

var _a;
//# sourceMappingURL=firstNavigation.guard.js.map

/***/ }),

/***/ "../../../../../src/app/startup/routesNames.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesNames; });
var RoutesNames = (function () {
    function RoutesNames() {
    }
    return RoutesNames;
}());

RoutesNames.StartPage = 'start';
RoutesNames.MatchPage = 'match';
RoutesNames.ResultsPage = 'result';
RoutesNames.StatisticsPage = 'records';
//# sourceMappingURL=routesNames.js.map

/***/ }),

/***/ "../../../../../src/app/statistics/playerDataSource.abstracts.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerDataSource_TKN; });

/**
 * Used to allow SOLID and Angular's DI.
 */
var PlayerDataSource_TKN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* OpaqueToken */]('IPlayerDataSource');
//# sourceMappingURL=playerDataSource.abstracts.model.js.map

/***/ }),

/***/ "../../../../../src/app/statistics/playerDataSource.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__webService_config__ = __webpack_require__("../../../../../src/app/statistics/webService.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerRestClient; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Rest client implementation of the player data source.
 */
var PlayerRestClient = (function () {
    function PlayerRestClient(http, webServiceConfig) {
        this.http = http;
        this._baseUrl = webServiceConfig.PROTOCOL + "://" + location.hostname + ":" + webServiceConfig.PORT + "/api/";
    }
    /**
     * Retrieve the list of all the players from the data source.
     */
    PlayerRestClient.prototype.getAll = function () {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get, 'PlayersStatistics');
    };
    /**
     * Register a new win on the data source.
     */
    PlayerRestClient.prototype.registerWin = function (name) {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post, "PlayersStatistics?name=" + name);
    };
    PlayerRestClient.prototype.sendRequest = function (verb, url) {
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Request */]({
            method: verb,
            url: this._baseUrl + url,
        });
        return this.http.request(request).map(function (response) {
            var data = response.json();
            return data;
        });
    };
    return PlayerRestClient;
}());
PlayerRestClient = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__webService_config__["a" /* WebServiceConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__webService_config__["a" /* WebServiceConfig */]) === "function" && _b || Object])
], PlayerRestClient);

var _a, _b;
//# sourceMappingURL=playerDataSource.model.js.map

/***/ }),

/***/ "../../../../../src/app/statistics/statistics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center justify-content-center\">\r\n    <div class=\"col-sm-10 col-lg-8\">\r\n        <h2 class=\"text-center\">\r\n            <a class=\"btn btn-primary float-left\" [routerLink]=\"StartPageRouterLink\">Start Page</a>\r\n            <span>Players records</span>\r\n        </h2>\r\n        <hr>\r\n        <div [hidden]=\"loading\">\r\n            <table id=\"dataTable\" class=\"table dataTable table-small table-striped display\" cellspacing=\"0\" width=\"100%\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Wins</th>\r\n                    </tr>\r\n                </thead>\r\n                <tfoot>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Wins</th>\r\n                    </tr>\r\n                </tfoot>\r\n                <tbody>\r\n                    <tr *ngFor=\"let player of playersRecord\">\r\n                        <td>{{player.name}}</td>\r\n                        <td>{{player.wins}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div [hidden]=\"!loading\" class=\"text-center\">\r\n            <h6>Loading...</h6>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/statistics/statistics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startup_routesNames__ = __webpack_require__("../../../../../src/app/startup/routesNames.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playerDataSource_abstracts_model__ = __webpack_require__("../../../../../src/app/statistics/playerDataSource.abstracts.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
 * Represents the statistics page of the application
 */
var StatisticsComponent = (function () {
    /**
     *
     */
    function StatisticsComponent(_dataSource) {
        this._dataSource = _dataSource;
        /**
         * Specifies the statistics page route link.
         */
        this.StartPageRouterLink = "/" + __WEBPACK_IMPORTED_MODULE_1__startup_routesNames__["a" /* RoutesNames */].StartPage;
        this.loading = false;
    }
    /**
     * Used to apply the data table styles
     */
    StatisticsComponent.prototype.ngAfterViewInit = function () {
        this.restart();
    };
    // [TODO] I don't like this approach.
    StatisticsComponent.prototype.restart = function () {
        var _this = this;
        this.loading = true;
        this._dataSource.getAll().subscribe(function (data) {
            _this.playersRecord = data;
            setTimeout(function () {
                $('#dataTable').DataTable({ 'order': [[1, 'desc'], [0, 'asc']] }).draw();
                _this.loading = false;
            }, 1000);
        });
    };
    return StatisticsComponent;
}());
StatisticsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: __webpack_require__("../../../../../src/app/statistics/statistics.component.html")
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__playerDataSource_abstracts_model__["a" /* PlayerDataSource_TKN */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__playerDataSource_abstracts_model__["IPlayerDataSource"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__playerDataSource_abstracts_model__["IPlayerDataSource"]) === "function" && _a || Object])
], StatisticsComponent);

var _a;
//# sourceMappingURL=statistics.component.js.map

/***/ }),

/***/ "../../../../../src/app/statistics/statistics.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__playerDataSource_abstracts_model__ = __webpack_require__("../../../../../src/app/statistics/playerDataSource.abstracts.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__playerDataSource_model__ = __webpack_require__("../../../../../src/app/statistics/playerDataSource.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__statistics_component__ = __webpack_require__("../../../../../src/app/statistics/statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__webService_config__ = __webpack_require__("../../../../../src/app/statistics/webService.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Angular's feature module for the statistics components.
 */
var StatisticsModule = (function () {
    function StatisticsModule() {
    }
    return StatisticsModule;
}());
StatisticsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__statistics_component__["a" /* StatisticsComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_6__statistics_component__["a" /* StatisticsComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__webService_config__["a" /* WebServiceConfig */],
            { provide: __WEBPACK_IMPORTED_MODULE_4__playerDataSource_abstracts_model__["a" /* PlayerDataSource_TKN */], useClass: __WEBPACK_IMPORTED_MODULE_5__playerDataSource_model__["a" /* PlayerRestClient */] }
        ]
    })
], StatisticsModule);

//# sourceMappingURL=statistics.module.js.map

/***/ }),

/***/ "../../../../../src/app/statistics/webService.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebServiceConfig; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WebServiceConfig = (function () {
    function WebServiceConfig() {
        this.PROTOCOL = 'http';
        this.URL = 'localhost';
        this.PORT = '7683';
    }
    return WebServiceConfig;
}());
WebServiceConfig = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], WebServiceConfig);

//# sourceMappingURL=webService.config.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map