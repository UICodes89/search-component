"use strict";
app.component('userList', {
  templateUrl: 'components/users-list-component.html',
  bindings: {
    list : "<"
  },
  controller: function(searchFactory) {
     var vm = this;
        vm.list;
        vm.change = function(string){
             searchFactory.getSearchResult(string)
        .then(sucessHandler)
        .catch(ErrorHandler);

          function ErrorHandler(response){
              $log.warn(response.statusText);
        }

        function sucessHandler(response){
          vm.list = response;
        }
      }
    
  }
});