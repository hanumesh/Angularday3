(function(){
	angular.module("app").factory("heroFactory", function($http){
			return {
				hd : $http.get("http://127.0.0.1:1234/heros")
			}
		})
}())
