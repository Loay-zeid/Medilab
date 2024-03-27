// HIDE AND SHOW NAVEGATION MENU WHEN CLICK ON BUTTON
let navBtn = document.querySelector("nav button");
let list = document.querySelector("nav ul");


// HIDE LIST WHEN USER CLICK ON ANY WHERE ON PAGE EXPECT NAVBTN
let hideList = (e) => {
  if (e.target != targetEl) {
    list.classList.add("hidden");
  }
}
navBtn.addEventListener("click", (e) => {
  list.classList.toggle("hidden");
  targetEl = e.target;
  window.addEventListener("click",hideList);
});


// SHOW SCROLL BUTTON WHEN USER GET SERVICES SECTION
let scrollBtn = document.querySelector("button.scroll");
window.onscroll = (e) => {
  e.currentTarget.pageYOffset > 616
    ? scrollBtn.classList.remove("hide")
    : scrollBtn.classList.add("hide")
}
// SCROLL TO TOP OF PAGE WHEN CLICK ON BUTTON
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 100,
    left: 0,
    behavior: "smooth",
  })
})
