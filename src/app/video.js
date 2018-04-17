module.exports = {
    template: require('./video.html'),
    controller: function($sce, $stateParams) {
        let self = this;
        this.videoLink = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + $stateParams.videoId);
        console.log('video');
    }
};