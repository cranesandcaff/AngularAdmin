'use strict';
angular
  .module('angularAdminApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'ui.calendar',
    'ngBootstrap',
    'colorpicker.module',
    'angularFileUpload'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/dashboard");
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.html'
      })
      
  });
