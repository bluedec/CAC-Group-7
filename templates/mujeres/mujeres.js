document.getElementById("nav").innerHTML = `
<button id="home-button" type="button">
<a href="../../index.html" class="home-link">
    <i class="fa-solid fa-mountain-sun fa-2x"></i>
</a>
</button>

<!-- Container de botones -->
<section class="nav-flex-container">
<a href="#" type="button" class="nav-button"><span>Mujeres</span></a>
<a href="#" class="nav-button unavailable"><span>Hombres</span></a>
</section>	

<!-- Container de botones a la derecha -->
<section id="nav-flex-container-right">
<button class="nav-button" type="button" onClick="show_side_nav_bar()">
    <i class="fa-solid fa-bars fa-2x"></i>			
</button>
<button id="search" class="nav-button" type="button" onclick="expand_or_retract()">
    <i class="fa-solid fa-magnifying-glass fa-2x"></i>				
</button>
<input class="search" type="text" name="search" value="">
</section>`;