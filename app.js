


var shows = ["parks and rec", "friends", "scrubs"];

          function displayGif() {
              var show = $(this).attr("data-name");
              var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + show;
              console.log(queryURL);

              $.ajax({
                  url: queryURL,
                  method: "GET",
              }).then(function(response) {
                  $("#tvDump").prepend(`<div class='showGif'>
                    <img src='${response.data.image_original_url}')>
                    </div>
                    `);
              });
          }

         function renderButtons() {
             $("#buttons").empty();

             for (var i = 0; i < shows.length; i++) {
                 var a = $("<button>");
                    a.addClass("tv-btn");
                    a.attr("data-name", shows[i]);
                    a.text(shows[i]);
                    $("#buttons").append(a);
             }
         }

         $("#add-show").on("click", function(event){
             event.preventDefault();
             var show = $("#show-input").val().trim();

             shows.push(show);

             renderButtons();
         });

         $(document).on("click", ".tv-btn", displayGif);
          
         renderButtons();

     

        
          
     