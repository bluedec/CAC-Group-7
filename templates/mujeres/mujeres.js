
// Esta mal tener una carpeta JS y un JS afuera de esa carpeta para 
// este template especifico, pero creo que mantener los componentes
// junto con el JS correspondiente es mas logico.
// Cuando usemos un framework (Vue) esto va a estar resuelto

let is_nav_open = false;
function show_side_nav_bar() {
	console.log(is_nav_open)
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
