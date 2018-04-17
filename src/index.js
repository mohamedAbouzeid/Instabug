var angular = require('angular');

var techsModule = require('./app/techs/index');
require('angular-ui-router');
var routesConfig = require('./routes');

var main = require('./app/main');
var searchPage = require('./app/searchPage');
var video = require('./app/video');
var relatedVideos = require('./app/relatedVideos');
var filter = require('./app/filter');
var title = require('./app/title');
var footer = require('./app/footer');
var videoPage = require('./app/videoPage');

require('./index.scss');

angular
    .module('app', [techsModule, 'ui.router'])
    .config(routesConfig)
    .component('app', main)
    .component('youtubeSearchPage', searchPage)
    .component('youtubeVideoPage', videoPage)
    .component('youtubeRelatedVideos', relatedVideos)
    .component('youtubeFilter', filter)
    .component('youtubeVideo', video)
    .component('fountainTitle', title)
    .component('fountainFooter', footer);
// .service('httpSvc', httpSvc);