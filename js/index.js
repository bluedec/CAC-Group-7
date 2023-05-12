
// whenever the user scrolls, show the newsletter advertisement
let showed = false;
window.onscroll = function() {
	if (showed === true) {
		return
	} else {
		show_newsletter();
	}
}

function show_newsletter() {
	let newsletter = document.getElementById('newsletter');
	let margin_top = 0;
	let opacity    = 0;

	showed = true; // showed se vuelve true para que no se vuelva a mostrar 

	const interv = setInterval(function() {
		console.log("Showing newsletter...")

		margin_top += 1;
		opacity    += 0.01; 

		newsletter.style.marginTop = `${margin_top}px`
		newsletter.style.opacity = opacity;

		if (newsletter.style.opacity >= 1) {
			clearInterval(interv);
		}
	}, 10)
}

function hide_newsletter() {
	let newsletter = document.getElementById('newsletter');
	let margin_top = 100;
	let opacity    = 1;

	const interv = setInterval(function() {
		console.log("Hiding newsletter...")

		margin_top -= 1; 
		opacity -= 0.01;

		newsletter.style.marginTop = `${margin_top}px`;
		newsletter.style.opacity = opacity;

		if (newsletter.style.opacity <= 0) {
			clearInterval(interv);
		}
	}, 10)

	newsletter.style.top = 1;
}

let is_nav_open = false;

function show_side_nav_bar() {
	if (is_nav_open) {
		close_side_nav_bar();
		return
	}
	const nav = document.getElementById("side-nav-bar");
	const dimmer = document.getElementById("screen-dimmer");

	is_nav_open = true;
	
	let right_position = -260;
	let dimmer_opacity = 0;
	let sum = 11;

	const interv = setInterval(function() {
		dimmer_opacity += 0.01;
		right_position += sum;
		sum -= 0.2;

		dimmer.style.opacity = dimmer_opacity;
		if (right_position < 0) {
			nav.style.right = `${right_position}px` 
		}

		if (dimmer_opacity > 0.49 && right_position > -5) {
			clearInterval(interv);
		}
	}, 5);

}

function close_side_nav_bar() {
	const nav = document.getElementById("side-nav-bar");
	const dimmer = document.getElementById("screen-dimmer");

	is_nav_open = false;
	
	let right_position = 0;
	let dimmer_opacity = 0.5;

	const interv = setInterval(function() {
		dimmer_opacity -= 0.01;
		right_position -= 7;

		dimmer.style.opacity = dimmer_opacity;
		nav.style.right = `${right_position}px` 
		
		if (dimmer_opacity < 0.01 && right_position < -260) {
			clearInterval(interv);
		}
	}, 5);
	
}

// function that is passed an html element and changes it's 
// opacity to a float point.
function change_opacity_with_id(id, op) {
	let element = document.getElementById(id);
	element.style.opacity = op;	
}

// function to change opacity of a group of nodes based on the className
function change_opacity_with_className(classN, op) {
	let elements = document.getElementsByClassName(classN, op);
	for (let i = 0; i < classN.lenth; i++) {
		elements[i].style.opacity = op;
	}
}


