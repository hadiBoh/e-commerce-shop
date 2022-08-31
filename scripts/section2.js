const cardsWrapper = document.querySelector(".cards-wrapper")
//config
const cardsCount = 4;
const show = 3;

let names = ["Xiaomi","Honor","LG","Apple","samsung"]

let showCards = ()=>{
	let card = ""
	for (let i = 1; i <= cardsCount+1; i++) {
		card += `
				<div class="card swiper-slide">
					<div class="card-top">
						<div class="circle-1">
							<div class="circle-2">
								<img src="images/${i}.png">
							</div>
						</div>
					</div>
					<div class="card-down">
						<header class="header">${names[i-1]}</header>
						<P class="info">this is some info about this brand of mobile such as breif introduce and new products in following year </P>
						<div class="more-read">view more</div>
					</div>
				</div>	
		`
	}
	cardsWrapper.innerHTML = card;

}
showCards()

var swiper = new Swiper(".container", {
	slidesPerView: 3,
	spaceBetween: 30,
	/* slidesPerGroup: 3, */
	/* loop: true, */
	centerSlide: "true",
	grabCursor : "true",
	fade:"true",
	loopFillGroupWithBlank: true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	  dynamicBullets: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},

	breakpoints:{
		0:{
			slidesPerView:1,
		},
		520:{
			slidesPerView:2,
		},
		950:{
			slidesPerView:3,
		},
	}

  });



