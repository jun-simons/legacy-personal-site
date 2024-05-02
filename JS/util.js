const currentTheme = localStorage.getItem("theme");
//update background based on localstorage data
if (currentTheme) {
	if(currentTheme == "t1") document.body.className = 'alternative4';
	else if (currentTheme == "t2") document.body.className = 'alternative';
	else if (currentTheme == "t3") document.body.className = 'alternative2';
	else if (currentTheme == "t4") document.body.className = 'alternative3';
	else if (currentTheme == "t5") document.body.className = 'alternative4';
}

//load paralaxx instance, init settings
var scene = document.getElementById('parallax');
var parallaxInstance = new Parallax(scene);

parallaxInstance.invertX=true
parallaxInstance.invertY=true
parallaxInstance.scalarX=10
parallaxInstance.frictionY=.1

//hamburger menu
var hamburger = document.querySelector(".hamburger"),
menuToggle = document.getElementById('menu-toggle')
menuItems = document.querySelectorAll( 'nav ul a' );
menuToggle.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    openNav();
} );

//open menus
function openNav() {
    document.getElementById("nav").classList.toggle("active");
}
function openSettings() {
	document.getElementById("settings").style.width="20%";
	document.getElementById("settings-button").style.visibility = "hidden";
}
function closeSettings() {
	document.getElementById("settings").style.width="0";
	document.getElementById("settings-button").style.visibility = "visible";
}

//setting themes
function theme1() {
	document.body.className = 'alternative4';
	localStorage.setItem("theme", "t1");
}
function theme2() {
	document.body.className = 'alternative';
	localStorage.setItem("theme", "t2");
}
function theme3() {
	document.body.className = 'alternative2';
	localStorage.setItem("theme", "t3");
}
function theme4() {
	document.body.className = 'alternative3';
	localStorage.setItem("theme","t4");
}
function theme5() {
	document.body.className = 'alternative4';
	localStorage.setItem("theme","t5");
}
function toggleParticles() {
	var checkbox = document.getElementById('particles-check');
	var template = document.getElementById('particlelayer');
	var parallax = document.getElementById('parallax');
	var child = document.getElementById('particle-identifier')
	if (checkbox.checked === true) { //make particles appear
		if(!parallax.contains(child)) {
			parallax.appendChild(template.content);
		}
	} else { //make particles disapear
		if(parallax.contains(child)) {
			parallax.removeChild(child);
		}
	}
}






