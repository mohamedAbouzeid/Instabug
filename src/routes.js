module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/search');

    $stateProvider
        .state('app', {
            url: '/',
            component: 'app'
        })
        .state('search', {
            url: '/search',
            component: 'youtubeSearchPage'
        })
        .state('video', {
            url: '/video/:videoId',
            component: 'youtubeVideoPage'
        });
}