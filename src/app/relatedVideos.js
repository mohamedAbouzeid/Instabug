module.exports = {
    template: require('./relatedVideos.html'),
    controller: function($http, $stateParams) {
        this.videos = [];
        let self = this;
        this.videoId = $stateParams.videoId;
        this.getRelatedVideos = function() {
            $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&relatedToVideoId=' + self.videoId + '&key=AIzaSyAgc504Z-6cEI7IVZO8TbaXD42qedr4N9I')
                .then(function(response) {
                    self.totalResults = response.data.pageInfo.totalResults;
                    self.videos = response.data.items;
                    console.log(self.videos);
                    self.videos.forEach(function(video) {
                        console.log(video.snippet.title);
                    });
                });
        };
        this.getRelatedVideos();
    }
};