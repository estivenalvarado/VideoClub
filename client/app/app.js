'use strict';

angular.module('videoClubApp', [
        'videoClubApp.constants',
        'ngCookies',
        'ngResource',
        'ngMessages',
        'ngSanitize',
        'ui.router',
        'ngFileUpload',
        'satellizer',
        'ngImgCrop',
        'ngFileSaver',
        'ngMaterial',
        'LocalStorageModule',
        'md.data.table'
    ])
    .constant("API", "http://localhost:8080/adsi2017_backend")
    .config(function($urlRouterProvider, $locationProvider, $authProvider, API,localStorageServiceProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
        // Config Satellizer
        $authProvider.loginUrl = API + '/api/auth/login';
        $authProvider.tokenName = 'token';
        $authProvider.tokenPrefix = 'VideoClubAdsi';

        localStorageServiceProvider
            .setPrefix('VideoClubAdsi');
    });
