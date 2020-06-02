$(document).ready(function() {
  $("button#cat-button").click(function() {
    $("button#cat-button").after("<p>Hey Dog! What's up?!</p>");
    $("button#dog-button").after("<p>Not much, Cat! How are you today?</p>");
  });
  // $("button#cat-button").click(function() {
  //   $(this).remove(sibling("p"));
  // });
  $("button#dog-button").click(function() {
    $("button#dog-button").after("<p>How's it hanging my feline friend?</p>");
    $("button#cat-button").after("<p>Just leading a revolution of the Proletariat! We have nothing to lose but our chains!</p>");
  });
});