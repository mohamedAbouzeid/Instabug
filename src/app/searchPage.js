module.exports = {
    template: require('./searchPage.html'),
    controller: function($http) {
        let self = this;
        this.placeholder = 'Enter Text Here';
        this.searchValue = '';
        this.count = 0;
        this.videos = [];
        this.uploadDate = '';
        this.type = '';
        this.sortBy = '';
        this.showVideos = false;
        this.filterVisible = false;
        this.filterVisibleText = "show filter";
        this.totalResults = 0;
        this.click = function() {
            self.showVideos = true;
            this.count = this.count + 1;
            self.videos = [];
            var searchString = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + this.searchValue + '&key=AIzaSyAgc504Z-6cEI7IVZO8TbaXD42qedr4N9I';
            if (self.uploadDate !== '') {
                if (self.uploadDate == 'last-hour') {
                    var lastHour = new Date(new Date() - (60 * 60 * 1000));
                    searchString = searchString + '&publishedAfter=' + lastHour.toISOString();
                }
                if (self.uploadDate == 'today') {
                    var today = new Date(new Date() - (24 * 60 * 60 * 1000));
                    searchString = searchString + '&publishedAfter=' + today.toISOString();
                }
                if (self.uploadDate == 'this-week') {
                    var previousWeek = new Date(new Date() - (7 * 24 * 60 * 60 * 1000));
                    searchString = searchString + '&publishedAfter=' + previousWeek.toISOString();
                }
                if (self.uploadDate == 'this-month') {
                    var previousMonth = new Date(new Date() - (30 * 24 * 60 * 60 * 1000));
                    searchString = searchString + '&publishedAfter=' + previousMonth.toISOString();
                }
            }
            if (self.type == '') {
                searchString += '&type=video';
            } else {
                searchString += '&type=' + self.type;
            }
            if (self.sortBy !== '') {
                searchString += '&order=' + self.sortBy;
            }
            console.log(searchString);
            $http.get(searchString)
                .then(function(response) {
                    self.totalResults = response.data.pageInfo.totalResults;
                    self.videos = response.data.items;
                    console.log(self.videos);
                    self.videos.forEach(function(video) {
                        console.log(video.snippet.title);
                    });
                });
        };
        this.showOrHideFilter = function() {
            self.filterVisible = !self.filterVisible;
            if (self.filterVisibleText == "show filter") {
                self.filterVisibleText = "hide filter";
            } else {
                self.filterVisibleText = "show filter";
            }
        };
    }

};