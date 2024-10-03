const seccion1 = document.getElementById("drops");
const seccion2 = document.getElementById("about");
const seccion3 = document.getElementById("normas");
const catalogoDrop1 = document.getElementById("catalogo-drop1");
const catalogoDrop2 = document.getElementById("catalogo-drop2");

OcultarTodos();
mostrar("drops");

function mostrar(seccion) {
    OcultarTodos();

    if (seccion === "drops") {
        seccion1.style.display = 'block';
    } else if (seccion === "about") {
        seccion2.style.display = 'block';
    } else if (seccion === "normas") {
        seccion3.style.display = 'block';
    } else if (seccion === "catalogo-drop1") {
        catalogoDrop1.style.display = 'block';
    } else if (seccion === "catalogo-drop2") {
        catalogoDrop2.style.display = 'block';
    }
}

function OcultarTodos() {
    seccion1.style.display = 'none';
    seccion2.style.display = 'none';
    seccion3.style.display = 'none'; // Ocultar normas
    catalogoDrop1.style.display = 'none';
    catalogoDrop2.style.display = 'none';
}




//scroll on top//
const scrollToTopButton = document.getElementById("scrollToTop");

// Muestra el botón tururu
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = "flex";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// pa arriba va
scrollToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

