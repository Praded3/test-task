$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__top").toggleClass("active");
    // $(".header__burger,.header__social-continer").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
