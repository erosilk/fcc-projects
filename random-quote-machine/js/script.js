
$.ajaxSetup({
  cache: false
}); // Deshabilitar cache para que carguen frases nuevas del json.


function tweetQuote() {
  var tweetLink = "http://twitter.com/home?status=" + ($(".quotetext").html()).slice(3, -7) + $(".author").html();
  window.open(tweetLink, "_blank");
}

function getQuote() {
  $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success: function(data) {

      var title = data[0].title;
      var content = data[0].content;

      processQuote(title, content);
    }
  });
}

function processQuote(author, quote) {
  var smallQuote = "";
  smallQuote = quote.slice(3, -7);
  if ((smallQuote + " - " + author).length > 140) {
    globalQuote = smallQuote;
    getQuote();
  } else {
    displayQuote(author, quote);
  }
}

function displayQuote(author, quote) {
  $(".quotetext").html(quote);
  $(".author").html("- " + author);
}

$(document).ready(function() {

  getQuote();

  $('#newquote').on('click', function() {
  $(".quotetext").html('<i class="fa fa-circle-o-notch fa-2x fa-spin"></i>')
  $(".author").html("")
  getQuote();});

  $("#tweet").on("click", tweetQuote);

}); 

