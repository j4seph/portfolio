console.log('hello there');
const mouse = document.querySelector('.cursor');

function cursor(e) {
	mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
}

function activeCursor(e) {
    const item = e.target;

	if (
        item.classList.contains('projects-button') ||
        item.classList.contains('green-button') ||
        item.classList.contains('navy-button')
	) {
		mouse.classList.add('cursor-active');
	} else {
		mouse.classList.remove('cursor-active');
	}
}


//event listener
window.addEventListener('mousemove', cursor);
window.addEventListener('mouseover', activeCursor);