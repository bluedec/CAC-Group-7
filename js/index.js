
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
	showed         = true;
	let opacity    = 0;
	let margin_top = 0;
	let newsletter = document.getElementById('newsletter');

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
	let opacity    = 1;
	let margin_top = 100;

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


