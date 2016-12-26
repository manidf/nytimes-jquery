window.$ = window.jQuery = require("jquery");

var loadDataButton = function () {
	var searchArticles = document.querySelector('.form-container');
	searchArticles.submit(loadData);
}

module.exports = loadDataButton;

function loadData() {
	console.log('load data function');
    let $body = $('body');
    let $nytHeaderElem = $('.nytimes-header');
    let $nytElem = $('.nytimes-articles');
    let $greeting = $('.greeting');
	var searchQuery = $('.searchQuery').val();

    // clear out old data before new request
    $nytElem.text("");
    $nytHeaderElem.text("");

    // Build New York times API ulr
    // let $apiUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

    // // add api key as parameter
    // $apiUrl += '?' + $.param({
    //     'api-key': '2e69849a8c1f4e76aaad0835e3e179cd',
    //     'sort': 'newest'
    // });

	var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchQuery + '&sort=newest&api-key=2e69849a8c1f4e76aaad0835e3e179cd';
    $.getJSON(nytimesUrl, function(data){

        $nytHeaderElem.text('New York Times Articles About ' + searchQuery);

        articles = data.response.docs;
        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];
            $nytElem.append('<li class="article">'+
                '<a href="'+article.web_url+'">'+article.headline.main+'</a>'+
                '<p>' + article.snippet + '</p>'+
            '</li>');
        };

    }).error(function(e){
        $nytHeaderElem.text('New York Times Articles Could Not Be Loaded');
    });

	console.log('APP INIT');

};

module.exports = loadData;
