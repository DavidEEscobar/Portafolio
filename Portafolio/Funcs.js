function addClassToDivsInProj() {
    const divs = document.querySelectorAll('.Proj div');
    
    divs.forEach(div => {
        div.classList.add('show');
    });
}

function isInViewport(element) {
    if(element instanceof Element){
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    }
    return false;
}

function showOnScroll() {
    const text = document.querySelectorAll('.Grid-L div, .Grid-R div');
    
    if (text.length > 0) {
        text.forEach(div => {
            if (isInViewport(div)) {
                div.classList.add('show');
            }
            else{
                div.classList.remove('show');
            }
        });
    }
}


window.addEventListener('load', addClassToDivsInProj);
window.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener('scroll', showOnScroll);
});