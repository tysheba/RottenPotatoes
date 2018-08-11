var queryURL = "https://api.musixmatch.com/ws/1.1/track.lyrics.get?format=jsonp&callback=callback&track_id=152383615&apikey=cad5fbf7afb8c5ce846d140b38ac51ef";

$.ajax({
    url: queryURL,
    method: "GET",
      dataType: "jsonp",
      jsonp: "callback"
}).then(function (response) {
    var lyrics = response.message.body.lyrics.lyrics_body
    $("#showlyrics").text(lyrics);
    console.log(response);
    console.log(lyrics);


}); 