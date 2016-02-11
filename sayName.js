//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
  var Person = function (name, age){
    this.name = name;
    this.age = age;
  };

//Now create three instances of Person with data you make up

  //code here
var mike =  new Person("Mike",  31);
var jon =   new Person("Jon",   15);
var steve = new Person("Steve", 67);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
  Person.prototype.sayName = function() {
    alert(this.name);
  }
