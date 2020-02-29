function addText(){
    var elements = document.querySelectorAll('ul.Text>li');
        for(var i = 0; i<elements.length; i++){
                var addElements = elements[i];
                addElements.innerHTML = "ADC";
        };
};

function getAllLi(){
    var elements = document.getElementsByName('li');
    console.log(elements.length);
};

function addColor(){
var coll = document.querySelectorAll('a');
  for (var i = 0; i<coll.length; i++) {
    if ((coll[i].matches("a[href*='http://']") || coll[i].matches("a[href*='ftp://']")) && !(coll[i].matches('a[href*="http://internal.com"]'))) {
      coll[i].classList.add('external-red');
   };
  };
}