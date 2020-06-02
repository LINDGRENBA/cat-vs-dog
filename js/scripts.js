$(document).ready(function() {
  $("button#cat-button").click(function(){
    $("button#cat-button").after("<p>Hey Dog! What's up?!</p>");
    $("button#dog-button").after("<p>Not much, Cat! How are you today?</p>");
  });
  // $("button#cat-button").click(function() {
  //   $(this).remove(sibling("p"));
  // });
});