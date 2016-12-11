(function() {
	var moduleId = "Menu";
    angular.module("super_food").controller(moduleId, ['$routeParams', Menu]);

    function Menu($routeParams) {

    	var vm = this;

    	vm.item = [];
        vm.selectedMeal=null;
        

    	init();

    	function init() {
            vm.item = [
                {
                    id: 0,
                    name: 'Время поспать',
                    description:'А ночью люди спят!',
                    menulist: [{
                        id: 1,
                        name: '-',
                        description: '-',
                        ck: false
                    }, {
                        id: 2,
                        name: '-',
                        description: '-',
                        ck: false
                    }, {
                        id: 3,
                        name: '-',
                        description: '-',
                        ck: false
                    }]

                },
                {
                    id: 1,
                    name: 'Завтрак',
                    description:'Ежедневно сразу после пробуждения за полчаса до приема пищи следует выпивать стакан структурированной воды. Затем организовать себе легкий эноргоемкий завтрак.',
                    menulist: [{
                        id: 1,
                        name: 'Курица отварная',
                        description: 'Совместим с овощами и фруктами',
                        ck: false
                    }, {
                        id: 2,
                        name: 'Томаты',
                        description: 'Совместим с овощами и фруктами',
                        ck: false
                    }, {
                        id: 3,
                        name: 'Огурец',
                        description: 'Совместим с овощами и фруктами',
                        ck: false
                    }]
                }, {
                    id: 2,
                    name: 'Обед',
                    description:'Желательно употреблять продукты богатые белками. Традиционные рыбные или мясные блюда - без гарнира из макарон или картофеля. Их можно дополнить салатом из фруктов  овощей. Для первых блюд - овощной бульон или овощной суп, на десерт - несладкие фрукты.',
                    menulist: [{
                        id: 1,
                        name: 'Дыня',
                        description: 'Совместим с овощами и фруктами',
                        ck: false
                    }, {
                        id: 2,
                        name: 'Хлеб',
                        description: 'Совместим с овощами и фруктами',
                        ck: false
                    }, {
                        id: 3,
                        name: 'Морковь',
                        description: 'Совместим с овощами и фруктами',
                        ck: false
                    }]

                },
                {
                    id: 3,
                    name: 'Ужин',
                    description:'Должен состоять из продуктов, богатых на углеводы, поскольку они быстро усваиваются организмом. Это может быть морковная или картофельная запеканка, сладкие фрукты или макароны с сыром.',
                    menulist: [{
                        id: 1,
                        name: 'Рыба',
                        description: 'Совместим с овощами и фруктами',
                        ck: false
                    }, {
                        id: 2,
                        name: 'Морковь',
                        description: 'Совместим с овощами и фруктами',
                        ck: false
                    }, {
                        id: 3,
                        name: 'Огурец',
                        description: 'Совместим с овощами и фруктами',
                        ck: false
                    }]

                }


            ];

            for (var i = 0; i < vm.item.length; i++) {
                var cur = vm.item[i];
                if (cur.id == $routeParams.idMeal) {

                    vm.selectedMeal = cur;
                    break;
                }
            }
    		
    	}
        

    }
})();
