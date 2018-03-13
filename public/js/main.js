var navigation = document.getElementById('navigation');
var burger_toggle = document.getElementById('burger');
var dropdown_menu = document.getElementById('dropdown');

var shopping_cart = document.getElementById('shopping_cart');
var shopping_cart_overlay = document.getElementById('shopping_cart_overlay');
var shopping_cart_close = document.getElementById('shopping_cart_close');


burger_toggle.addEventListener('mouseup', function() {
	navigation.style.background = dropdown_menu.style.display === 'none' ? '#fff' : '';
	if(dropdown_menu.classList.contains('active')) {
		dropdown_menu.classList.remove('active');
	} else {
		dropdown_menu.classList.add('active');
	}
});

shopping_cart.addEventListener('mouseup', function() {
	shopping_cart_overlay.setAttribute('aria-hidden', 'false');
	document.body.classList.add('no-scroll');
});

shopping_cart_close.addEventListener('mouseup', function() {
	shopping_cart_overlay.setAttribute('aria-hidden', 'true');
	document.body.classList.remove('no-scroll');
});

window.addEventListener('resize', function(e) {
	if(e.target.innerWidth > 980) {
		dropdown_menu.classList.remove('active');
	}
});

function watchForHover() {
    var hasHoverClass = false;
    var container = document.body;
    var lastTouchTime = 0;

    function enableHover() {
        // filter emulated events coming from touch events
        if (new Date() - lastTouchTime < 500) return;
        if (hasHoverClass) return;

        container.className += ' hasHover';
        hasHoverClass = true;
    }

    function disableHover() {
        if (!hasHoverClass) return;

        container.className = container.className.replace(' hasHover', '');
        hasHoverClass = false;
    }

    function updateLastTouchTime() {
        lastTouchTime = new Date();
    }

    document.addEventListener('touchstart', updateLastTouchTime, true);
    document.addEventListener('touchstart', disableHover, true);
    document.addEventListener('mousemove', enableHover, true);

    enableHover();
}

watchForHover();

