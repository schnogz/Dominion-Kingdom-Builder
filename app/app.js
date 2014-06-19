angular.module("randominion", ["ngRoute", "ui.bootstrap"]).config(["$routeProvider", function ($routeProvider) {
	$routeProvider.when("/builder", {
		templateUrl: "app/kingdomBuilder/kingdomBuilder.html",
		controller: "kingdomBuilderController"
	}).when("/browse/:cardSet/:viewState?", {
            templateUrl: "app/cardBrowser/cardBrowser.html",
            controller: "cardBrowserController"
    }).when("/recommended", {
        templateUrl: "app/defaultKingdoms/defaultKingdoms.html",
        controller: "defaultKingdomsController"
    }).when("/rules", {
        templateUrl: "app/gameRules/rules.html",
        controller: "rulesController"
    }).otherwise({
		redirectTo: "/builder"
	});
}]);