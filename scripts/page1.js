// Preciso modularizar usando o npm.

const btn = document.querySelector('.btnDarkMode')

btn.addEventListener('click', btnDarkMode)

function btnDarkMode() {
    const btnCircle = document.querySelector('.circle');
    btn.classList.toggle('eventBtn')
    btnCircle.classList.toggle('eventBtnCircle')
}


$("#button").click(function() {
  $('html, body').animate({
    scrollTop: $("#assados").offset().top
  }, 2000);
});