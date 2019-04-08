// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".eatMe").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("state");

    var newDevouredState = {
      devoured: newDevoured
    };
    // Send the PUT request.
    $.ajax("/api/pizzas/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newPizza = {
      name: $("#pizza").val().trim(),
      devoured: $("[name=devour]:checked").val().trim()
    };
    //Send the POST request.
    $.ajax("/api/pizzas", {
      type: "POST",
      data: newPizza
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
