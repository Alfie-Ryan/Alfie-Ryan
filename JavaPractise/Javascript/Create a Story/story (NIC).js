 

function myFunction(){
    var boyName = document.getElementById('boyName').value; 
    var girlName = document.getElementById('girlName').value;
    var location = document.getElementById('location').value; 
    var action = document.getElementById('action').value; 
    var liquid = document.getElementById('liquid').value; 
    var boyName = document.getElementById('boyName').value; 
    var injury = document.getElementById('injury').value; 
    var girlName = document.getElementById('girlName').value; 

    var output = document.getElementById('output'); 
    output.innerHTML = boyName + " and " + girlName +" went up the " + location + " to " + action + " a pale of " + liquid + ", " + boyName + " fell down and broke his " + injury + " and " + girlName + " came tubling after.";

    

}