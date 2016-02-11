//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.

  //code here

  var myString = "Hello World";
  function reverseString (str) {
    str = str.split("");
  //  console.log(str);
    str.reverse();
  //  console.log(str);
    str = str.join("");
  //  console.log(str);
    return str;
  }
  reverseString(myString);
