var mapPopup = document.querySelector(".modal-map");
var mapOverlay = document.querySelector(".modal-overlay");
var mapLink = document.querySelector(".js-map-link");
var mapClose = document.querySelector(".js-map-close");
var mapButton = document.querySelector(".js-map-btn");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapOverlay.classList.add("modal-show-map");
  mapPopup.classList.add("modal-show-map");
});

mapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapOverlay.classList.remove("modal-show-map");
      mapPopup.classList.remove("modal-show-map");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show-map")) {
        evt.preventDefault();
        mapOverlay.classList.remove("modal-show-map");
        mapPopup.classList.remove("modal-show-map");
    }
  }
});

mapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapOverlay.classList.add("modal-show-map");
    mapPopup.classList.add("modal-show-map");
  });
