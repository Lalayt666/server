angular.module("super_food", ["ngMessages","ngRoute"]).config(
    function($routeProvider) {
        $routeProvider.when('/library/:idFood', {
            templateUrl: 'client/app/Library/foodList.html',
            controller: 'FoodController'
        });
        
        $routeProvider.when('/avtoriz', {
            templateUrl: 'client/app/Vika/vika.html',
          
        });
        $routeProvider.when('/menu/:idMeal', {
            templateUrl: 'client/app/Valya/valya.html',
            controller: 'Menu'
        });
        $routeProvider.otherwise({
            redirectTo: '/avtoriz'
        });

        

    });
