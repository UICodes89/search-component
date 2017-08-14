"use strict";
app.factory("searchFactory", searchFactory);
searchFactory.$inject = ['$http', '$q'];
function searchFactory($http, $q){
  
  	function getSearchResult(searchString){
  		var deferred = $q.defer(),
		    req = {
	            url: 'json/users-list-component.json'
	        };
	        if (!searchString) {
				      return searchString;
				    }
        return $http.get(req.url).then(function(response) {
           	var result = [];
            	angular.forEach(response.data, function(item) {
		
			      if (item.title.toLowerCase().indexOf(searchString) !== -1 || item.email.toLowerCase().indexOf(searchString) !== -1 || item.phone.toLowerCase().indexOf(searchString) !== -1 || item.policyno.toLowerCase().indexOf(searchString) !== -1) {
			        	result.push(item);			
			      }

			    });
			    return result;
			    //deferred.resolve(response.data);
                //deferred.resolve(result);
            }).catch(function(response) {
                return $q.reject('Error in retrieving data.');
            });           
  	}

  	return{
  		getSearchResult:getSearchResult
  	}


}
