var slideIndex = [1, 1];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName("sliders");
  if (n > x.length) { slideIndex[no] = 1 }
  if (n < 1) { slideIndex[no] = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}

function openNav() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("close").style.display = "block";
  document.getElementById("open").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("close").style.display = "none";
  document.getElementById("open").style.display = "block";
}

function scrollto(div){
	$('html,body').animate({
		scrollTop: $("#"+div).offset().top
	},'slow');
}