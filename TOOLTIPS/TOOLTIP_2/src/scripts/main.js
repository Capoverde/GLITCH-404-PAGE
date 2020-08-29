$(function() {
  setTimeout(function() {
    $(".popup").addClass(".show");
  }, 2000);

  $(".btn").addEventListener("click", function(e) {
    e.preventDefault();
    $(".popup").removeClass(".show");
  });
});
