function parent() {
  var a = 20;
  console.log(a);

  function child() {
    function child2() {
      console.log(a);
    }
   
    child2(); 
    a = 30;
  }
  child();
}

parent();
