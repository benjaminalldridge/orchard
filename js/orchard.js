// Define the application
var aegApp = angular.module('aegApp', []);

// Invoke the `AegController` controller on the `aegApp` module
aegApp.controller('AegController', function AegController($scope) {
  
	/* Define the contents of our scope */
	
	// Set the initial state for the modal as a fallback for load
	$scope.modalImages = {
		uuid: '00000000-0000-0000-0000-000000000000',
		x1: 'https://picsum.photos/200/300',
		x2: 'https://picsum.photos/200/300'
	};

	// Define the page's content
	$scope.answers = {
		title: "Answer Your Body's Needs",
		body: "The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally devolops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.",
		subAnswers: {
			title: "Be Mindful",
			body: "Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating."
		},
		images: [
			{
				uuid: '78595745-1512-425a-a24e-86979f7e16d4',
				x1: "img/Image-02.jpg",
				x2: "img/Image-02@2x.jpg"
			},
			{
				uuid: '53c14e8a-90d5-4d2e-b7fc-5249cee730ec',
				x1: "img/Image-06.jpg",
				x2: "img/Image-06@2x.jpg"
			},
			{
				uuid: 'ab54d036-a9c4-4b6f-a6ca-b1e02e00a328',
				x1: "img/Image-01.jpg",
				x2: "img/Image-01@2x.jpg"
			}
		]
	};

	// Define the articles
	$scope.articles = [
		{
			uuid: '90e2d14d-6c7c-423d-b90c-c6a17d5ce1e8',
			image: {
				x1: "img/Image-05.jpg",
				x2: "img/Image-05@2x.jpg",
			},
			title: "Summer Lunch Menu By Mark Best",
			body: "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
			more: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sem blandit, fermentum nisi ut, euismod diam. Aenean diam turpis, faucibus vel tortor eu, molestie hendrerit ligula. Donec quis sagittis nulla, ut euismod ligula. Quisque ac urna eu nulla laoreet faucibus. Cras laoreet, nunc vitae volutpat gravida, eros tellus bibendum leo, eget auctor ante nibh sed magna. Nam eget pulvinar elit, in aliquam sem. Pellentesque elementum dolor sodales lacus dictum vestibulum. In in sapien ac sapien porttitor vestibulum quis quis nibh. Nulla ut eros mattis, feugiat lectus id, vehicula nulla. Nullam velit diam, blandit in ultricies efficitur, blandit ut dui. Vivamus nulla elit, mollis eget lacus dapibus, egestas pharetra nibh. Mauris sollicitudin dictum felis vel maximus."
		},
		{
			uuid: 'd36432fa-07d1-4a7d-9da2-8a425ef5d977',
			image: {
				x1: "img/Image-04.jpg",
				x2: "img/Image-04@2x.jpg",
			},
			title: "A Traditional Christmas Eve, Mark Best Style",
			body: "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.",
			more: "Proin vel eros eu elit maximus vestibulum eu ut felis. Quisque vel enim sed dui ullamcorper ullamcorper ac sit amet turpis. Quisque vitae justo justo. Donec scelerisque egestas neque sed auctor. Praesent suscipit sapien ex. Nulla molestie rutrum elit, bibendum ullamcorper massa feugiat nec. Aliquam vel magna ullamcorper, volutpat sapien nec, malesuada velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse bibendum ante in nisl auctor, maximus congue lectus tempus. Integer condimentum rhoncus molestie. Fusce facilisis neque eu elit varius bibendum."
		},
		{
			uuid: 'c260f1de-0fa4-43ba-be8f-e19ffc1fa6c2',
			image: {
				x1: "img/Image-03.jpg",
				x2: "img/Image-03@2x.jpg",
			},
			title: "Taking Taste Further",
			body: "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products &ndash; and the best out of your food.",
			more: "Ut non est id neque molestie consectetur. Pellentesque ac tristique neque, vel venenatis nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam sed euismod enim, eget scelerisque nisi. Donec interdum erat velit, sed gravida velit fermentum sit amet. Pellentesque sed urna justo. Vestibulum eu neque auctor, placerat ipsum eu, lacinia orci. Etiam mollis, tellus et tincidunt rhoncus, tellus enim suscipit nulla, sed tincidunt erat est ac nulla. Donec non mattis mi. Etiam at ex tellus. Suspendisse volutpat ultricies tristique."
		},
	];

	// Open an article 
	$scope.openArticle = function($event, article) {
		// Log the click
		$scope.logClick($event, article);

		// Alert about opening a new page?
		console.debug('If this were a live site, you would now be going to the page... /articles/' + article.uuid);
	};

	// Handle the modal filling
	$scope.passModalImg = function($event, images) {
		// Log the click
		$scope.logClick($event, images);

		// Overload the images
		// Both are passed in to handle HDPI resolutions
		$scope.modalImages = {
			uuid: images.uuid,
			x1: images.x1,
			x2: images.x2
		};
	}

	// Log relevant clicks
	$scope.logClick = function($event, el) {
		console.log('Element clicked with UUID: ' +  el.uuid + '. The element was:', $event.target);
	}
});