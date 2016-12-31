window.$ = window.jQuery = require('jquery');
const moment = require('moment');

function loadData() {
    const $body = $('body');
    const $nytElem = $('#nytimes-articles');
	const $loadingIcon =$('.loading-icon');
	const searchQuery = $('.searchQuery').val();

    // clear out old data before new request
    $nytElem.text("");

	// build the query to API
	const nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q='
		+ searchQuery
		+ '&sort=newest&api-key=2e69849a8c1f4e76aaad0835e3e179cd';

	$($loadingIcon).show();
	$.getJSON(nytimesUrl, function (data){
        const articles = data.response.docs;
        for (let i = 0; i < articles.length; i++) {
            const article = articles[i];
			const pubDate = moment(article.pub_date).format('MM/DD/YYYY');
            $nytElem.append(
				'<li class="article">'
					+ '<a href="' + article.web_url + '" class="article-title">' + article.headline.main + '</a>'
					+ '<date class="article-pub-date">' + pubDate + '</date>'
					+ '<p>' + article.snippet + '</p>'
					+
				'</li>'
			);
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
