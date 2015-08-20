function Flower(name, color, petals, smellsPretty, origin, leafCount, comments){
   /* Properties */
   // Passed-in values
   this.name = name;
   this.color = color;
   this.petals = petals;
   this.smellsPretty= smellsPretty;
   this.origin = origin;
   this.leafCount = leafCount;
   this.comments = comments;

   // Default values
   this.isEdible = false;
   this.wiltFactor = 20; //0 is dead, 100 is fresh
   this.image = "http://i.imgur.com/p0TMNjT.jpg";

    /* Methods */
   this.sniff = function(){
       console.log("Sniff Sniff Sniff!");
   };
   // Demonstrates use of arguments with methods
   this.hasGoodSmell = function(answer) {
       if (answer) {
           return 'This flower smells amazing!';
       } else {
           return 'What a noxious weed!';
       }
   };
   // Demonstrates use of local object variables
   this.describe = function(answer) {
       alert("This flower is " + this.color + ".");
     }
   /// Demonstrates object to object interaction
   this.compare =  function(otherFlower) {
       return("My " + this.color + " flower is much prettier than your " +
         otherFlower.color + " flower :P");
   };
   // append html string to website 
   this.render = function() {
       //$('body').append("<p>My pretty flower is " + this.color + " and has " + this.petals + " pristine petals.");
       var flowerTemplate = _.template($('#flower-template').html());
       var flowerHTML = flowerTemplate(this);
       $('#flower-placeholder').append(flowerHTML);
   };
   // displays message to console
   this.giveFlower= function(){
       console.log("Here's a flower")
    };
}

function Bee(flower1, flower2){
   this.flower1 = flower1;
   this.flower2 = flower2;

   this.crossPollinate = function() {
       var colorBlend = flower1.color + "-" + flower2.color;
       var petalAvg = Math.round((flower1.petals + flower2.petals) / 2);
       var leafAvg = Math.round((flower1.leafCount + flower2.leafCount) / 2);
       var smellTrait = flower1.smellsPretty && flower2.smellsPretty;
       var flower3 = new Flower(colorBlend, petalAvg, smellTrait, "Class Room 6");
       flower3.leafCount = leafAvg;

       return flower3;
   }

}

$(document).ready(function()
  {
    var flower = new Flower("Hydrangea", "blue-green", 60, true, "Asia and the Americas", 2, "While not edible due to the fact that it contains cyanide, its leaves are used for tea.");
    flower.render();
  }
);