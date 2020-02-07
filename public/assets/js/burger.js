$(function () {
    $(document).on("click", ".devour_btn", function () {
        var parent = this.parentElement;
        var child = parent.childNodes;
        var id = child[2].id;


        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function () {
                console.log("Devoured!");

                location.reload();
            }
        )
    });

    $(document).on("click", ".add_btn", function () {
        // use ajax to link them up
        var newBurger = {
            burger_name: $("#burger").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");

                location.reload();
            }
        )
    });
});