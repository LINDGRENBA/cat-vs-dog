$(document).ready(function() {
  $("button#cat-button").click(function() {
    $(".cat-talk > p").remove();
    $(".dog-talk > p").remove();
    $("button#cat-button").after("<p>Hey Dog! What's up?!</p>");
    $("button#dog-button").after("<p>Not much, Cat! How are you today?</p>");
  });

  $("button#dog-button").click(function() {
    $(".dog-talk > p").remove();
    $(".cat-talk > p").remove();
    $("button#dog-button").after("<p>How's it hanging my feline friend?</p>");
    $("button#cat-button").after("<p>Just leading a revolution of the Proletariat! We have nothing to lose but our chains!</p>");
  });

});