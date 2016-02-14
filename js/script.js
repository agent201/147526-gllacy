var btn_slide_1 = document.querySelector(".btn-slide-1");
var btn_slide_2 = document.querySelector(".btn-slide-2");
var btn_slide_3 = document.querySelector(".btn-slide-3");

var slide_1 = document.querySelector(".slide-1");
var slide_2 = document.querySelector(".slide-2");
var slide_3 = document.querySelector(".slide-3");

var body = document.querySelector("body");

var map__form_link = document.querySelector(".map__form-link");
var map__modal = document.querySelector(".map__modal");
var popup__overlay = document.querySelector(".popup__overlay");
var map__modal_close = document.querySelector(".map__modal-close");

btn_slide_1.addEventListener("click", function(event) {
	event.preventDefault();
	btn_slide_2.classList.remove("active");
	btn_slide_3.classList.remove("active");
	btn_slide_1.classList.add("active");
	slide_2.classList.remove("active");
	slide_3.classList.remove("active");
	slide_1.classList.add("active");
	body.classList.remove("bg-2-light");
	body.classList.remove("bg-3-light");
	body.classList.add("bg-1-light");
});

btn_slide_2.addEventListener("click", function(event) {
	event.preventDefault();
	btn_slide_1.classList.remove("active");
	btn_slide_3.classList.remove("active");
	btn_slide_2.classList.add("active");
	slide_1.classList.remove("active");
	slide_3.classList.remove("active");
	slide_2.classList.add("active");
	body.classList.remove("bg-1-light");
	body.classList.remove("bg-3-light");
	body.classList.add("bg-2-light");
});

btn_slide_3.addEventListener("click", function(event) {
	event.preventDefault();
	btn_slide_1.classList.remove("active");
	btn_slide_2.classList.remove("active");
	btn_slide_3.classList.add("active");
	slide_1.classList.remove("active");
	slide_2.classList.remove("active");
	slide_3.classList.add("active");
	body.classList.remove("bg-1-light");
	body.classList.remove("bg-2-light");
	body.classList.add("bg-3-light");
});

map__form_link.addEventListener("click", function(event) {
	event.preventDefault();
	console.log(btn_slide_3);
	map__modal.classList.toggle("active");
	popup__overlay.classList.toggle("active");
});

map__modal_close.addEventListener("click", function(event) {
	map__modal.classList.toggle("active");
	popup__overlay.classList.toggle("active");
});

/*
var link = document.querySelector(".login");

var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.add("modal-content-show");

if (storage) {
  login.value = storage;
  password.focus();
} else {
  login.focus();
}

});

close.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.remove("modal-content-show");
popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
if (!login.value || !password.value) {
  event.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
} else {
  localStorage.setItem("login", login.value);
}
});

window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
	if (popup.classList.contains("modal-content-show")) {
		popup.classList.remove("modal-content-show");
		popup.classList.remove("modal-error");
	}
}
});
*/
