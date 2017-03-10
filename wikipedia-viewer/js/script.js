var container = $("#container")
var searchResult = $("#searchresult")

function removeClass(id, cla) {
    $(id).removeClass(cla);
}

$(document).ready(function(){
    setTimeout(function(){
        removeClass("#container", "center")
        removeClass("#title", "big")
        removeClass("#buscador", "hidden")
},1000);
})

$('input[type=textarea]').on('input propertychange', function() {
    var searchID = this.value;
    
    $("#container .searchresult").remove();

    if (searchID == ''){}else{ 
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchID + '&limit=4&namespace=0&format=json',
        success: function(data){
            for (var i = 0; i<4; i++){ 
            if (data[1][i].length === 0){
                
            }else{ 
            container.append('<div class="searchresult animated bounce infinite"><a href="' + data[3][i] +'"><h1>' + data[1][i] + "</h1></a><hr><p>" + data[2][i] + "</p></div>")
            }}
        }})}
}
);
