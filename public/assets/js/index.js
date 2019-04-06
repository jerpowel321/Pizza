// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".eatMe").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("state");

    var newDevouredState = {
      devoured: newDevoured
    };
console.table(newDevoured)
console.table(id)
    // Send the PUT request.
    $.ajax("/api/pizzas/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed Devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("click")
    var newPizza = {
      name: $("#pizza").val().trim(),
      devoured: $("[name=devour]:checked").val().trim()
    };
    console.log(newPizza)
    //Send the POST request.
    $.ajax("/api/pizzas", {
      type: "POST",
      data: newPizza
    }).then(
      function() {
        console.log("created new pizza");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
