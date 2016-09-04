$( document ).ready(function(){
  var categories = ["movies", "famous"];
  var environment = "T";
  var endPoint = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=";
  var endPointTwitter="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=ojedawinder&amp;text=";
  var AuthenticacionKey = (environment=="T")?"1Q075wKMbPmshbVkwjM44M7Dywerp1zk5Wljsn9VFweF3T96Jk":"TYkJaQ1HP7mshm8BmbYyPhDaUcuyp1I4v10jsnVBOQgziuxoYm";
  var author ="";
  var quote ="";
  generateRandomQuote();

  function generateRandomQuote(){
    var random_number = Math.round(Math.random());
    $.ajax({
      url: endPoint+categories[random_number],
      type: 'POST',
      dataType: 'json',
      success: function(data) {
         quote = '"'+data.quote+'"';
         author = data.author;
         $("#quote").html(quote);
         $("#author").html("AUTHOR: "+author);
      },
      error: function(err) { alert(err); },
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", AuthenticacionKey);
      }
    });
  }

  $("#btnGenerateQuote").click(function(){
    generateRandomQuote();
  });

  $("#tweet-quote").click(function(){
      window.open(endPointTwitter+quote+' - '+author, '_blank');
  });

});
