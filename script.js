$('.loadingbar').delay(1500).animate({ left: '0' }, 3000);
$('.loadingBox').delay(500).animate({ opacity: '1' }, 1000);
$('.splashScreen').delay(4500).animate({ top: '-100%' }, 1500);
$('.loadingCircle').delay(4500).animate({ opacity: '0' }, 500);
$('body').delay(5000).queue(function () {
	$('body').addClass("visibleSplash");
});







let active = false;
let scrollerMiddle = document.querySelector('.scroller-middle');
let scrollerTop = document.querySelector('.scroller-top');

scrollerMiddle.addEventListener('mousedown', function () {
	active = "middle";
	scrollerMiddle.classList.add('scrolling');
});
document.body.addEventListener('mouseup', function () {
	active = false;
	scrollerMiddle.classList.remove('scrolling');
});
document.body.addEventListener('mouseleave', function () {
	active = false;
	scrollerMiddle.classList.remove('scrolling');
});
scrollerTop.addEventListener('mousedown', function () {
	active = "top";
	scrollerTop.classList.add('scrolling');
});
document.body.addEventListener('mouseup', function () {
	active = false;
	scrollerTop.classList.remove('scrolling');
});
document.body.addEventListener('mouseleave', function () {
	active = false;
	scrollerTop.classList.remove('scrolling');
});

document.body.addEventListener('mousemove', function (e) {
	if (!active) return;
	let x = e.pageX;
	x -= document.querySelector('.wrapper').getBoundingClientRect().left;
	scrollIt(x);
});

const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
function scrollIt(x) {
	let transform = Math.max(0, (Math.min(x, document.querySelector('.wrapper').offsetWidth)));
	if (active === "middle") {
		document.querySelector('.middle').style.width = transform + "px";
		scrollerMiddle.style.left = transform - 0.025 * vh + "px";
		if (scrollerTop.getBoundingClientRect().left > scrollerMiddle.getBoundingClientRect().left) {
			document.querySelector('.top').style.width = transform + "px";
			scrollerTop.style.left = transform - 0.025 * vh + "px";
		}
	}
	if (active === "top") {
		document.querySelector('.top').style.width = transform + "px";
		scrollerTop.style.left = transform - 0.025 * vh + "px";
		if (scrollerTop.getBoundingClientRect().left > scrollerMiddle.getBoundingClientRect().left) {
			document.querySelector('.middle').style.width = transform + "px";
			scrollerMiddle.style.left = transform - 0.025 * vh + "px";
		}
	}
}

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
active = "middle";
scrollIt(0.16 * vh);
active = "top";
scrollIt(0.08 * vh);
active = false;


scrollerMiddle.addEventListener('touchstart', function () {
	active = "middle";
	scrollerMiddle.classList.add('scrolling');
});
document.body.addEventListener('touchend', function () {
	active = false;
	scrollerMiddle.classList.remove('scrolling');
});
document.body.addEventListener('touchcancel', function () {
	active = false;
	scrollerMiddle.classList.remove('scrolling');
});

scrollerTop.addEventListener('touchstart', function () {
	active = "top";
	scrollerTop.classList.add('scrolling');
});
document.body.addEventListener('touchend', function () {
	active = false;
	scrollerTop.classList.remove('scrolling');
});
document.body.addEventListener('touchcancel', function () {
	active = false;
	scrollerTop.classList.remove('scrolling');
});

document.querySelector('.wrapper').addEventListener('touchmove', function (e) {
	if (!active) return;
	e.preventDefault();
	let x = e.touches[0].pageX;
	x -= document.querySelector('.wrapper').getBoundingClientRect().left;
	scrollIt(x);
});






(function () {
	const link = document.querySelectorAll('nav > .social-link');
	const animateit = function (e) {
		const span = this.querySelector('span');
		const { offsetX: x, offsetY: y } = e,
			{ offsetWidth: width, offsetHeight: height } = this,
			move = 25,
			xMove = x / width * (move * 2) - move,
			yMove = y / height * (move * 2) - move;
		span.style.transform = `translate(${xMove}px, ${yMove}px)`;
		if (e.type === 'mouseleave') span.style.transform = '';
	};
	link.forEach(b => b.addEventListener('mousemove', animateit));
	link.forEach(b => b.addEventListener('mouseleave', animateit));
})();

(function () {
	const cursor = document.querySelector('.cursor');
	const editCursor = e => {
		const { clientX: x, clientY: y } = e;
		cursor.style.left = x + 'px';
		cursor.style.top = y + 'px';
	};
	window.addEventListener('mousemove', editCursor);
})();

function checkForVisibility() {
	var a = document.querySelectorAll(".intro-text-no-transition");
	a.forEach(function (header) {
		if (isElementInViewport(header)) {
			header.classList.add("intro-text-transition");
		} else {
			header.classList.remove("intro-text-transition");
		}
	});
}

function isElementInViewport(el) {
	var rect = el.getBoundingClientRect();

	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
		(window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

if (window.addEventListener) {
	addEventListener("DOMContentLoaded", checkForVisibility, false);
	addEventListener("load", checkForVisibility, false);
	addEventListener("scroll", checkForVisibility, false);
}







console.clear();

const { gsap, imagesLoaded } = window;

const buttons = {
	prev: document.querySelector(".btn--left"),
	next: document.querySelector(".btn--right"),
};
const cardsContainerEl = document.querySelector(".cards__wrapper");

const cardInfosContainerEl = document.querySelector(".info__wrapper");

buttons.next.addEventListener("click", () => swapCards("right"));

buttons.prev.addEventListener("click", () => swapCards("left"));

function swapCards(direction) {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	const previousCardEl = cardsContainerEl.querySelector(".previous--card");
	const nextCardEl = cardsContainerEl.querySelector(".next--card");

	changeInfo(direction);
	swapCardsClass();

	removeCardEvents(currentCardEl);

	function swapCardsClass() {
		currentCardEl.classList.remove("current--card");
		previousCardEl.classList.remove("previous--card");
		nextCardEl.classList.remove("next--card");


		currentCardEl.style.zIndex = "50";

		if (direction === "right") {
			previousCardEl.style.zIndex = "20";
			nextCardEl.style.zIndex = "30";


			currentCardEl.classList.add("previous--card");
			previousCardEl.classList.add("next--card");
			nextCardEl.classList.add("current--card");

		} else if (direction === "left") {
			previousCardEl.style.zIndex = "30";
			nextCardEl.style.zIndex = "20";


			currentCardEl.classList.add("next--card");
			previousCardEl.classList.add("current--card");
			nextCardEl.classList.add("previous--card");

		}
	}
}

function changeInfo(direction) {
	let currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	let previousInfoEl = cardInfosContainerEl.querySelector(".previous--info");
	let nextInfoEl = cardInfosContainerEl.querySelector(".next--info");

	gsap.timeline()
		.to([buttons.prev, buttons.next], {
			duration: 0.2,
			opacity: 0.5,
			pointerEvents: "none",
		})
		.to(
			currentInfoEl.querySelectorAll(".text"),
			{
				duration: 0.4,
				stagger: 0.1,
				translateY: "-120px",
				opacity: 0,
			},
			"-="
		)
		.call(() => {
			swapInfosClass(direction);
		})
		.call(() => initCardEvents())
		.fromTo(
			direction === "right"
				? nextInfoEl.querySelectorAll(".text")
				: previousInfoEl.querySelectorAll(".text"),
			{
				opacity: 0,
				translateY: "40px",
			},
			{
				duration: 0.4,
				stagger: 0.1,
				translateY: "0px",
				opacity: 1,
			}
		)
		.to([buttons.prev, buttons.next], {
			duration: 0.2,
			opacity: 1,
			pointerEvents: "all",
		});

	function swapInfosClass() {
		currentInfoEl.classList.remove("current--info");
		previousInfoEl.classList.remove("previous--info");
		nextInfoEl.classList.remove("next--info");

		if (direction === "right") {
			currentInfoEl.classList.add("previous--info");
			nextInfoEl.classList.add("current--info");
			previousInfoEl.classList.add("next--info");
		} else if (direction === "left") {
			currentInfoEl.classList.add("next--info");
			nextInfoEl.classList.add("previous--info");
			previousInfoEl.classList.add("current--info");
		}
	}
}

function updateCard(e) {
	const card = e.currentTarget;
	const box = card.getBoundingClientRect();
	const centerPosition = {
		x: box.left + box.width / 2,
		y: box.top + box.height / 2,
	};
	let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
	gsap.set(card, {
		"--current-card-rotation-offset": `${angle}deg`,
	});
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(currentInfoEl, {
		rotateY: `${angle}deg`,
	});
}

function resetCardTransforms(e) {
	const card = e.currentTarget;
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(card, {
		"--current-card-rotation-offset": 0,
	});
	gsap.set(currentInfoEl, {
		rotateY: 0,
	});
}

function initCardEvents() {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	currentCardEl.addEventListener("pointermove", updateCard);
	currentCardEl.addEventListener("pointerout", (e) => {
		resetCardTransforms(e);
	});
}

initCardEvents();

function removeCardEvents(card) {
	card.removeEventListener("pointermove", updateCard);
}

function init() {

	let tl = gsap.timeline();

	tl.to(cardsContainerEl.children, {
		delay: 0.15,
		duration: 0.5,
		stagger: {
			ease: "power4.inOut",
			from: "right",
			amount: 0.1,
		},
		"--card-translateY-offset": "0%",
	})
		.to(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
			delay: 0.5,
			duration: 0.4,
			stagger: 0.1,
			opacity: 1,
			translateY: 0,
		})
		.to(
			[buttons.prev, buttons.next],
			{
				duration: 0.4,
				opacity: 1,
				pointerEvents: "all",
			},
			"-=0.4"
		);
}

const waitForImages = () => {
	const images = [...document.querySelectorAll("img")];
	const totalImages = images.length;
	let loadedImages = 0;
	const loaderEl = document.querySelector(".loader span");

	gsap.set(cardsContainerEl.children, {
		"--card-translateY-offset": "100vh",
	});
	gsap.set(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
		translateY: "40px",
		opacity: 0,
	});
	gsap.set([buttons.prev, buttons.next], {
		pointerEvents: "none",
		opacity: "0",
	});

	images.forEach((image) => {
		imagesLoaded(image, (instance) => {
			if (instance.isComplete) {
				loadedImages++;
				let loadProgress = loadedImages / totalImages;

				if (totalImages == loadedImages) {
					gsap.timeline()
						.call(() => init());
				}
			}
		});
	});
};

waitForImages();


let xPos = 0;

const hob_list = [
	'https://res.cloudinary.com/dy8o8zipa/image/upload/v1698088825/8_copy_zkz75c.png',
	'https://res.cloudinary.com/dy8o8zipa/image/upload/v1698088861/2_copy_pdwzjv.png',
	'https://res.cloudinary.com/dy8o8zipa/image/upload/v1698088859/3_copy_burje0.png',
	'https://res.cloudinary.com/dy8o8zipa/image/upload/v1698088864/1_copy_so0sas.png',
	'https://res.cloudinary.com/dy8o8zipa/image/upload/v1698088825/9_copy_l5xabg.png',
	'https://res.cloudinary.com/dy8o8zipa/image/upload/v1698088853/6_copy_hbvalb.png',
	'https://res.cloudinary.com/dy8o8zipa/image/upload/v1698088857/4_copy_aq7ohu.png',
	'https://res.cloudinary.com/dy8o8zipa/image/upload/v1698088855/5_copy_kbwdri.png'
];

gsap.set('.container4', {
	width: 0.35 * vh + 'px',
	height: 0.5 * vh + 'px',
	perspective: 1.5 * vh + 'px'
})
gsap.timeline()
	.set('.ring', { rotationY: 180, cursor: 'grab' })
	.set('.img', {
		rotateY: (i) => i * -45,
		transformOrigin: '50% 50%' + 0.5 * vh + 'px',
		z: -500,
		backgroundImage: (i) => 'url(' + hob_list[i] + ')',
		backgroundPosition: (i) => getBgPos(i),
		backfaceVisibility: 'hidden'
	})
	.from('.img', {
		duration: 1.5,
		y: 200,
		opacity: 0,
		stagger: 0.1,
		ease: 'expo'
	})
	.add(() => {
		$('.img').on('mouseenter', (e) => {
			let current = e.currentTarget;
			gsap.to('.img', { opacity: (i, t) => (t == current) ? 1 : 0.8, ease: 'power3' })
		})
		$('.img').on('mouseleave', (e) => {
			gsap.to('.img', { opacity: 1, ease: 'power2.inOut' })
		})
	}, '-=0.5')

$(window).on('mousedown touchstart', dragStart);
$(window).on('mouseup touchend', dragEnd);


function dragStart(e) {
	if (e.touches) e.clientX = e.touches[0].clientX;
	xPos = Math.round(e.clientX);
	gsap.set('.ring', { cursor: 'grabbing' })
	$(window).on('mousemove touchmove', drag);
}


function drag(e) {
	if (e.touches) e.clientX = e.touches[0].clientX;

	gsap.to('.ring', {
		rotationY: '-=' + ((Math.round(e.clientX) - xPos) % 360),
		onUpdate: () => { gsap.set('.img', { backgroundPosition: (i) => getBgPos(i) }) }
	});

	xPos = Math.round(e.clientX);
}


function dragEnd(e) {
	$(window).off('mousemove touchmove', drag);
	gsap.set('.ring', { cursor: 'grab' });
}


function getBgPos(i) {
	return (0.05 * vh - gsap.utils.wrap(0, 360, gsap.getProperty('.ring', 'rotationY') - 180 - i * 45) / 360 * 0.5 * vh) + 'px 0px';
}
