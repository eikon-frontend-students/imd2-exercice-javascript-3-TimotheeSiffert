var form = document.querySelector(".form-input");
var button = document.querySelector(".form-button");
var articles = document.querySelectorAll(".articles-item");

button.addEventListener("click", function () {
  var text = form.value;
  articles.forEach(function (article) {
    if (article.textContent.includes(text)) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
});
