var localStorageKey = "bedabots-nsfw-allowed";

// Animates the passed jQuery element to some standard default values.
function animateToStandard(elem, duration) {
	elem.animate({opacity: 1.0, top: 0.0}, duration);
}

// Sets offsets for the various splash screen elements, to then animate back to the defaults.
function setSplashOffsets() {
	$('#freezetess').css({opacity: 0, top: 100});
	$('#shockitty').css({opacity: 0, top: 100});
	$('#smirkitsune').css({opacity: 0, top: 100});
	$('#logo').css({opacity: 0, top: 250});
	$('#desktop').css({opacity: 0});
	$('#portable').css({opacity: 0});
}

// Animates the splash screen by making a bunch of elements return to their default layouts.
function animateSplashToDefaults() {
	animateToStandard($('#freezetess'), 1000);
	animateToStandard($('#shockitty'), 1000);
	animateToStandard($('#smirkitsune'), 1000);
	animateToStandard($('#logo'), 1000);
	animateToStandard($('#desktop'), 2500);
	animateToStandard($('#portable'), 2500);
}

// Plays the intro animation.
function introAnimation() {
	setSplashOffsets();
	var p = $("#nsfw-prompt");
	p.fadeOut(200, animateSplashToDefaults);
	p.animate({height: 0, top: "100%"}, 200);
}

// Called when the age check button is clicked.
function ageCheckComplete() {
	localStorage.setItem(localStorageKey, true);
	window.scrollTo(0, 0);
	introAnimation();
}

// Registers a listener for the age check button.
function registerAgeCheckListener() {
	$("#nsfw-prompt-button").click(ageCheckComplete);
}

// Main function, starting point for all JavaScript.
function startup() {
	registerAgeCheckListener();
	if(localStorage.getItem(localStorageKey) == null) {
		$("#nsfw-prompt-inner").fadeIn(200);
		$("#nsfw-prompt-button").fadeIn(200);
	} else {
		introAnimation();
	}
}

// Call startup when the DOM has loaded.
$(startup);
