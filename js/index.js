

const validate = () => {
	let name = document.getElementById('user-name').innerHTML;
	let email = document.getElementById('user-mail').innerHTML;
	console.log(name, email);

	if (validateName(name) && validateEmail(email)) {
		alert("Good to go!");	
	} else {
		alert("The name or email is incorrect.");
	}

}

function validateName(name) {
	const regex = /^[a-zA-Z ]+$/;
	return regex.test(name);
}

function validateEmail(email) {
	const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	return regex.test(email);
}

document.getElementById('user-mail').onblur = function() {
	if (validateEmail(this.value)) {
		// it's correct
	} else {
		alert("please add a correct email address");
	}
}


window.addEventListener('resize', () => {
	console.log("Nooooo don't touch me! Aararrggg");
});

window.addEventListener('scroll', () => {
	console.log('Aaaaaaaaaaaaaaaaaaaaa');
});

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
	newsletter.style.zIndex = 40;
	showed = true; // para que no se vuelva a mostrar 
	console.log("Showing newsletter...")
	
	newsletter.style.top = "0rem";

	const interv = setInterval(function() {
		margin_top += 1;
		opacity    += 0.01; 

		newsletter.style.marginTop = `${margin_top}px`
		newsletter.style.opacity = opacity;

		if (newsletter.style.opacity >= 1) {
			clearInterval(interv);
		}
	}, 8)
}

function hide_newsletter() {
	let newsletter = document.getElementById('newsletter');
	let opacity = 1;
	let top = 0;
	console.log("Hiding newsletter...")

	const interv = setInterval(function() {
		top -= 2; 
		opacity -= 0.01;

		newsletter.style.top = `${top}px`;
		newsletter.style.opacity = opacity;

		if (newsletter.style.opacity <= 0) {
			clearInterval(interv);
			newsletter.style.top = "-30rem";
		}
	}, 8);


}

let is_nav_open = false;

function show_side_nav_bar() {
    if (is_nav_open) {
        close_side_nav_bar();
        return
    }
    const nav = document.getElementById("side-nav-bar");
    const dimmer = document.getElementById("screen-dimmer");

    dimmer.style.zIndex = 20;
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
    if (is_nav_open === false) {
        return;
    }
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
            dimmer.style.zIndex = -20;
        }
    }, 5);

}

function alert_something(text) {
	alert(text);
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
