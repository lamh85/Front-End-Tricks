// (function(){


var myApp = angular.module("myApp", []);

myController = myApp.controller("myController", ['$scope', function($scope){

    console.log('testing');

    $scope.colsPerRow = 5;

    $scope.colsDecrease = function(){
        if ($scope.colsPerRow > 1) {
            $scope.colsPerRow --;
        }
    }

    $scope.colsIncrease = function(){
        $scope.colsPerRow ++;
    }

    $scope.colClassName = function(){
        if ($scope.colsPerRow <= 0 || typeof($scope.colsPerRow) == 'undefined' || $scope.colsPerRow == '') {
            $scope.colsPerRow = 1;
        }
        return "col-md-" + Math.floor(12/$scope.colsPerRow);
    }

    $scope.isCorrectRow = function(contentIndex, rowIndex) {
        if (contentIndex >= rowIndex * $scope.colsPerRow && contentIndex <= rowIndex * $scope.colsPerRow + ($scope.colsPerRow - 1)) {
            return true;
        }
    }

    $scope.ipsums = [
        "Cat ipsum dolor sit amet, steal the warm chair right after you get up climb a tree, wait for a fireman jump to fireman then scratch his face for eat and than sleep on your face meowwww.",
        "Stare at ceiling chase dog then run away. Refuse to leave cardboard box eat and than sleep on your face but hide when guests come over jump off balcony, onto stranger's head yet sit in box scratch leg; meow for can opener to feed me. Chew iPad power cord present belly, scratch hand when stroked burrow under covers.",
        "I am the best swat at dog, or peer out window, chatter at birds, lure them to mouth asdflkjaertvlkjasntvkjn (sits on keyboard) touch water with paw then recoil in horror. Pooping rainbow while flying in a toasted bread costume in space then cats take over the world or sun bathe, for sleep on dog bed, force dog to sleep on floor or ears back wide eyed and if it fits, i sits and touch water with paw then recoil in horror. Stare out the window hunt by meowing loudly at 5am next to human slave food dispenser chase ball of string yet nap all day.",
        "Has closed eyes but still sees you scratch leg; meow for can opener to feed me or cough furball. Have secret plans meow for cough furball wake up human for food at 4am for scratch the furniture, yet intently sniff hand, yet mew. Poop in the plant pot kitty power! why must they do that swat at dog chew foot. Lounge in doorway hiss at vacuum cleaner for purr while eating yet eat from dog's food chase dog then run away. Lounge in doorway.",
        "Missing until dinner time rub face on owner pelt around the house and up and down stairs chasing phantoms, for intrigued by the shower, or hide head under blanket so no one can see and stretch, so lick arm hair. Damn that dog.",
        "Human give me attention meow chew on cable so curl into a furry donut but stare at wall turn and meow stare at wall some more meow again continue staring scratch leg; meow for can opener to feed me scratch leg; meow for can opener to feed me.",
        "Stretch. Always hungry stare at wall turn and meow stare at wall some more meow again continue staring cat snacks scratch the furniture chase imaginary bugs leave fur on owners clothes, eat a plant, kill a hand. Hide at bottom of staircase to trip human eat and than sleep on your face or destroy couch, for leave dead animals as gifts poop in litter box, scratch the walls use lap as chair.",
        "Thug cat throwup on your pillow, refuse to drink water except out of someone's glass have secret plans. Ears back wide eyed damn that dog or asdflkjaertvlkjasntvkjn (sits on keyboard) for make meme, make cute face rub face on everything, but rub face on everything, and knock dish off table head butt cant eat out of my own dish. Immediately regret falling into bathtub present belly, scratch hand when stroked yet hide when guests come over if it fits, i sits. The dog smells bad chase red laser dot chirp at birds so fall over dead (not really but gets sypathy) for roll on the floor purring your whiskers off so find something else more interesting, but chew on cable.",
        "Sun bathe behind the couch, so knock dish off table head butt cant eat out of my own dish wake up human for food at 4am but leave fur on owners clothes, lick arm hair. Meow. Intrigued by the shower chew on cable. Roll on the floor purring your whiskers off knock over christmas tree so human give me attention meow or rub face on everything, but under the bed, spit up on light gray carpet instead of adjacent linoleum. Kitty loves pigs who's the baby, or stand in front of the computer screen. Pooping rainbow while flying in a toasted bread costume in space behind the couch, sweet beast scream at teh bath, or steal the warm chair right after you get up, hide from vacuum cleaner or chase imaginary bugs. Play riveting piece on synthesizer keyboard see owner, run in terror burrow under covers, for i am the best and sleep nap. Poop in the plant pot. Destroy couch as revenge hide head under blanket so no one can see and spread kitty litter all over house. Vommit food and eat it again tuxedo cats always looking dapper unwrap toilet paper.",
        " Get video posted to internet for chasing red dot kitty power! for kitty loves pigs yet jump off balcony, onto stranger's head but stare out the window. Stretch swat at dog instantly break out into full speed gallop across the house for no reason or chew foot, nap all day spit up on light gray carpet instead of adjacent linoleum."
    ];

    $scope.rowNumbers = function(contentArray){
        console.log('contentArray.length: ' +contentArray.length);
        numOfRows = Math.ceil(contentArray.length/$scope.colsPerRow);
        console.log('numOfRows: ' +numOfRows);
        array = [];
        for (i = 0; i < numOfRows; i ++) {
            array.push(i);
        }
        return array;
    }

    console.log($scope.rowNumbers($scope.ipsums));

}]);

// });