function navAjax(url, selector, push = true) {
    if (!url || !selector) return
    const element = document.querySelector(selector)
    fetch(url)
        .then(resp => resp.text())
        .then(html => {
            element.innerHTML = html
            if (push) {
                history.pushState({ selector }, null, url)
            }
        });
}

document.querySelectorAll('[nav-link]').forEach(link => {

    const url = link.attributes['nav-link'].value
    const sel = link.attributes['nav-selector'].value

    link.onclick = function(e) {
        e.preventDefault();
        navAjax(url, sel)
    }
});

window.onpopstate = e => {
    if (e.state) {
        navegarViaAjax(window.location.href, e.state.selector, false)
    }
}