
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    var $streetStr = $('#street').val();
    var $cityStr = $('#city').val();

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    $body.append('<img class="bgimg" src="http://maps.googleapis.com/maps/api/streetview?size=1200x1200&location=' + $streetStr + $cityStr + '">');

    // Build New York times API ulr 
    var $apiUrl = 'https://api.nytimes.com/svc/search/v2/artikjhclesearch.json';
    
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
        
        $nytHeaderElem.text('New York Times Articles About:' + $cityStr);
        
        var articles = result.response.docs;
        for(var i = 0; i < articles.length; i++) {
            var article = articles[i];
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

    return false;
};

$('#form-container').submit(loadData);
