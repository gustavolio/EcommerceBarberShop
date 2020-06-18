// navAjax("bread.html", "#content", true); //Inicializa na página home

function navAjax(url, selector, push = true) {
    if (!url || !selector) return
    console.log("navigation: ", url);
    const element = document.querySelector(selector)
    fetch(url)
        .then(resp => resp.text())
        .then(html => {
            element.innerHTML = html
            if (push) {
                history.pushState({ selector }, null, url)
            }
        });
};

document.querySelectorAll('[nav-link]').forEach(link => {

    const url = link.attributes['nav-link'].value
    const sel = link.attributes['nav-selector'].value


    link.onclick = function(e) {
        e.preventDefault();
        navAjax(url, sel);
        var target = event.target || event.srcElement;

        // console.log("Classes: ", document.querySelector(".active-option").classList.remove("active-option"));

        var optNav = document.querySelectorAll('[nav-link]');

        optNav.forEach(function(opt) {
            if (opt.classList.contains("active-option")) {
                opt.classList.remove("active-option");
            }
        });

        if (target.attributes['nav-link'].value != "home.html") {
            target.classList.add('active-option');
        }
    }
});

window.onpopstate = e => {
    if (e.state) {
        navAjax(window.location.href, e.state.selector, false)
    }
};