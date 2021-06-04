$(document).ready(function () {
  /* ----- STICKY NAV ----- */

  // This code can be found after searching for jquery waypoints
  // We target a specific class, and direction detects if the user is scrolling up or down
  $(".js--section-about").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky"); // If the user scrolls down, add the sticky class to the nav
      } else {
        $("nav").removeClass("sticky"); // Remove the class sticky if the user scrolls up
      }
    },
    {
      offset: "60px", // It will happen 60px before we hit the new section (earlier)
    }
  );

  /* ----- NAVIGATION SCROLL ----- */

  // Google jquery snippets like this for smooth scroll!
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  /* ----- SCROLL ON BUTTONS ----- */

  // When we click on this class (button), it scrolls to the plans section at a speed of 1 second
  $(".js--scroll-to-projects").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-projects").offset().top },
      1000
    );
  });

  // When we click on this class (button), it scrolls to the features section at a speed of 1 second
  $(".js--scroll-to-about").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-about").offset().top },
      1000
    );
  });

  /* ----- ANIMATION ON SCROLL ----- */

  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%", // We want the animation to happen a lot earlier (originally happens when we reach it)
    }
  );

  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animated pulse");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-4-1").waypoint(
    function (direction) {
      $(".js--wp-4-1").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  /* ----- MOBILE NAVIGATION ----- */

  // Function runs when we click the nav icon
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav"); // Make a variable for the class we want to target
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200); // Open and close a box (0.2 seconds)
    if (icon.hasClass("ion-navicon-round")) {
      // If we click the box and open it
      icon.addClass("ion-close-round"); // Replace the icon with the close icon
      icon.removeClass("ion-navicon-round"); // Remove the original icon
    } else {
      // If we close the box
      icon.addClass("ion-navicon-round"); // Replace the close icon with the original icon
      icon.removeClass("ion-close-round"); // Remove the close icon
    }
  });
});
