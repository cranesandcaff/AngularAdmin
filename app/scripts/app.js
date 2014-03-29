'use strict';
//A Reminder -- You were tired when coding this part up, if something isn't working
//Check that it's included both on page and on this. It'll probably throw a missing error, but you'll be confused at first anyway
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
  .config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "views/main.html"
      })
  });
