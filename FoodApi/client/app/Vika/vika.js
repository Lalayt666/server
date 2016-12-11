(function() {
    var moduleId = "Authorisation";
    angular.module("super_food").controller(moduleId, [Authorisation]);

    function Authorisation() {

        var fd = this;

        fd.foodlist = [];
      
        fd.curentWatch = [];
        fd.cc = cc;
        /*fd.curFood = curFood;*/
      
        fd.showDate=false;
        fd.showDateBtn=showDateBtn;
        


        init();

        function init() {




            fd.foodlist = [{
                id: 1,
                image: 'client/content/image/1.png',
                name: 'Помидор',
                description: 'Плоды томата отличаются высокими питательными вкусовыми и диетическими качествами',


            }, {
                id: 2,
                image: 'client/content/image/2.png',
                name: 'Огурец',
                description: 'Огурцы богаты сложными органическими веществами которые играют важную роль в обмене веществ',

            }, {
                id: 3,
                image: 'client/content/image/tomat.png',
                name: 'Шампиньон',
                description: 'В пищевых шампиньонах содержатся 20 аминокислот в том числе все незаменимые для человека',

            }, {
                id: 4,
                image: 'client/content/image/tomat.png',
                name: 'Редис',
                description: 'Содержит ряд необходимых человеку витаминов нужных человеку для восстанавления иммунитета',

            }];

        }



        function cc() {

            var date = new Date();
            return date;


        }



        /*function curFood() {
            console.log("вход");

            var date = new Date();
            var hour = date.getHours();
            console.log(hour);


            var e;

            if (hour >= 0 && hour <= 6) {
                e = ' Вам стоит поспать!';
                return e;
            } else if (hour > 6 && hour < 14) {

                e = ' Сейчас завтрак';
                return e;

            } else if (hour >= 14 && hour <= 18) {

                e = ' Сейчас обед';
                return e;

            } else if (hour > 18 && hour <= 21) {

                e = ' Сейчас ужин';
                return e;

            } else if (hour > 21 && hour < 23) {
                e = ' Вам стоит поспать!';
                return e;
            }
            
        }*/




        function showDateBtn(){        
            fd.showDate=!fd.showDate;

        }





    }


})();
