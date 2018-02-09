(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController', function(){
		this.products = gems;
	});
			
			var gems =[ 
				{name: '1. Dodecahedron',price: 2.95,description: 'Description Of First Gem',canPurchase: true, image:"logo-preview.png",
				
				},
				{name: '2. Pentagonal Gem',price: 5.95,description: 'Description Of Second Gem',canPurchase: true, image:"logo-preview.png"},
			];
})();