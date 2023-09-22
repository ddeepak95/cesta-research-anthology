document.addEventListener("DOMContentLoaded", function () {
  var headerElement = document.querySelector("header"); // Replace 'header' with the actual selector of your header element
  var htmlToInject = `
      <div class="header-above-navbar">
        <p>Stanford University</p>
      </div>
    `;

  headerElement.insertAdjacentHTML("afterbegin", htmlToInject);
});
