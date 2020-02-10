window.onload = function(){
    var images = document.getElementsByClassName("department");
    for (var i=0; i<images.length; i++){
        images[i].onmouseover=showAnswer;
        images[i].onmouseout = reblur;

    }
};
function showAnswer(eventObj){
    var image = eventObj.target;
    var name = image.id;
    name=name+".jpg";
    image.src=name;
}
function reblur(eventObj){
    var image = eventObj.target;
    var name = image.id;
    name=name+".png";
    image.src=name;
}
