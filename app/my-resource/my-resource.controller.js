(function() {
    'use strict';
    
    angular
        .module('my-application.controllers')
        .controller('MyResourceController', MyResourceController);

    MyResourceController.$inject = ['$routeParams', 'MyResourceService'];

    function MyResourceController($routeParams, MyResourceService) {
        var vm = this;
        vm.init = init;
        vm.save = save;
        vm.resource = {};
        vm.single = true;
        
        function init() {
            var id = parseInt($routeParams.id);
            
            MyResourceService.get(id)
                .then(function(resource) {
                    vm.resource = resource;
                    return resource;
                });
        }
        
        function save() {
            MyResourceService.save(vm.resource);
        }
        
        init();
    }
})();