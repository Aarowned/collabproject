var options = $('[name="option"]');
var isrunning = false

function pulse(){
    console.log(options);
    var chosen = Math.floor(Math.random() * options.length );
    console.log(chosen);
    
    options.addClass(function(index){
        if (index === chosen) {
            return "redborder";    
        }
        
    }).delay(300).queue(function(next){
        options.removeClass("redborder");
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
    } else {
        isrunning = true;
        loop();
    }
}