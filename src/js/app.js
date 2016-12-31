window.$ = window.jQuery = require('jquery');
var moment = require('moment');

function loadData() {

    var $body = $('body');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
	var $loadingIcon =$('.loading-icon');
	var searchQuery = $('.searchQuery').val();

    // clear out old data before new request
    $nytElem.text("");
    $nytHeaderElem.text("");

	var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' +
		searchQuery +
		'&sort=newest&api-key=2e69849a8c1f4e76aaad0835e3e179cd';

	$($loadingIcon).show();
	$.getJSON(nytimesUrl, function (data){
        var articles = data.response.docs;
        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];
			var pubDate = moment(article.pub_date).format('MM/DD/YYYY');
            $nytElem.append('<li class="article">' +
                '<a href="' + article.web_url + '" class="article-title">' + article.headline.main + '</a>' +
				'<date class="article-pub-date">' + pubDate + '</date>' +
                '<p>' + article.snippet + '</p>' +
			'</li>');
        };
		$($loadingIcon).hide();
    }).fail(function(e){
        $nytHeaderElem.text('New York Times Articles Could Not Be Loaded');
    });

};

$('#form-container').submit(function (e) {
	e.preventDefault();
	loadData();
});

module.exports = loadData;
