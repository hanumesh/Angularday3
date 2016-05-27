(function(){
	angular.module("app").factory("dataFactory", function($http){
		return {
			//hd  : $http.get("data/heroes.json")
			// hd  : $http.get("/heros")
			hd  : $http.get("http://localhost:1234/heros")
		};
		
	
	});
}());
