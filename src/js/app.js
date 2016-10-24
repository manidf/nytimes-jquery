
function loadData() {

    let $body = $('body');
    let $nytHeaderElem = $('.nytimes-header');
    let $nytElem = $('.nytimes-articles');
    let $greeting = $('.greeting');

    // clear out old data before new request
    $nytElem.text("");
    $nytHeaderElem.text("");

    // Build New York times API ulr
    let $apiUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

    // add api key as parameter
    $apiUrl += '?' + $.param({
        'api-key': '2e69849a8c1f4e76aaad0835e3e179cd',
        'sort': 'newest'
    });

    $.ajax({
        dataType: 'json',
        url: $apiUrl,
        method: 'GET'
    }).done(function(result) {
        console.log(result);

        $nytHeaderElem.text('New York Times Articles About');

        let articles = result.response.docs;

		for(let i = 0; i < articles.length; i++) {
            let article = articles[i];
            $nytElem.append('<li class="article">'+
                '<a href="' + article.web_url + '">' + article.headline.main + '</a>' +
                '<p>' + article.snippet + '</p>' +
                '<small>' + article.pub_date + '</small>' +
                '</li>');
        };

    }).error(function(err){
        console.log('Sorry there was an error', err);
        $nytHeaderElem.text('ERROR: articles could not be loaded');
    });

	console.log('APP INIT');

	return false;
};


