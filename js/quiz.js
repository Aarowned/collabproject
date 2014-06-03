var options = $('[class="panel"]');
var isrunning = false

function pulse(){
    var chosen = Math.floor(Math.random() * options.length );
    
    options.addClass(function(index){
        if (index === chosen) {
            return "selected";    
        }
        
    }).delay(300).queue(function(next){
        options.removeClass("selected");
        next();
    });


}
        
function loop() {
    if (isrunning) {
      pulse();
      setTimeout(loop, 300);   
    }
       
}
loop();

function togglerunning() {
    if (isrunning) {
        isrunning = false; 
        chooseperson();
        
        
    } else {
        isrunning = true;
        loop();
    }
}

function go() {
    togglerunning();
    setTimeout(togglerunning, 3500);
}


function chooseperson() {
    
    var choice = $('#choicebox').val();
      
    if (choice != 0) {
        //console.log(choice);    
    } else {
        choice = Math.floor(Math.random() * 5 ) + 1;
    }
    
    displayresult(choice);
    
}

function displayresult(x) {
    var modalname = "#modal_person" + x.toString();
    console.log(modalname);
    $(modalname).foundation('reveal','open');     
        
}