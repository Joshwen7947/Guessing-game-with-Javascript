window.onload = init;

function init() {
  let image0 = document.getElementById(`zero`);
  image0.onclick = showAnswer0;
  let image1 = document.getElementById(`one`);
  image1.onclick = showAnswer1;
  let image2 = document.getElementById(`two`);
  image2.onclick = showAnswer2;
  let image3 = document.getElementById(`three`);
  image3.onclick = showAnswer3;
  let image4 = document.getElementById(`four`);
  image4.onclick = showAnswer4;
  let image5 = document.getElementById(`five`);
  image5.onclick = showAnswer5;
}

function showAnswer0() {
  let image0 = document.getElementById(`zero`);
  image0.src = `images/zero.jpg`;
  let text1 = document.getElementById(`text1`);
  text1.innerHTML = `Mona Lisa`;
  setTimeout(function () {
    image0.src = "images/zeroblur.jpg";
    text1.innerHTML = ``;
  }, 2000);
}
function showAnswer1() {
  let image1 = document.getElementById(`one`);
  image1.src = `images/one.jpg`;
  let text2 = document.getElementById(`text2`);
  text2.innerHTML = `Abstract Painting`;
  setTimeout(function () {
    image1.src = "images/oneblur.jpg";
    text2.innerHTML = ``;
  }, 2000);
}
function showAnswer2() {
  let image2 = document.getElementById(`two`);
  image2.src = `images/two.jpg`;
  let text3 = document.getElementById(`text3`);
  text3.innerHTML = `Watercolor Flowers`;
  setTimeout(function () {
    image2.src = "images/twoblur.jpg";
    text3.innerHTML = ``;
  }, 2000);
}
function showAnswer3() {
  let image3 = document.getElementById(`three`);
  image3.src = `images/three.jpg`;
  let text4 = document.getElementById(`text4`);
  text4.innerHTML = `Abstract City Painting`;
  setTimeout(function () {
    image3.src = "images/threeblur.jpg";
    text4.innerHTML = ``;
  }, 2000);
}
function showAnswer4() {
  let image4 = document.getElementById(`four`);
  image4.src = `images/four.jpg`;
  let text5 = document.getElementById(`text5`);
  text5.innerHTML = `Boats on a lake`;
  setTimeout(function () {
    image4.src = "images/fourblur.jpg";
    text5.innerHTML = ``;
  }, 2000);
}
function showAnswer5() {
  let image5 = document.getElementById(`five`);
  image5.src = `images/five.jpg`;
  let text6 = document.getElementById(`text6`);
  text6.innerHTML = `Van Gogh Painting`;
  setTimeout(function () {
    image5.src = "images/fiveblur.jpg";
    text6.innerHTML = ``;
  }, 2000);
}
