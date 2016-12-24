webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

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
	
	
	module.exports = loadData;
	


/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBOztBQUVBOztBQUVBLGlCQUFnQixxQkFBcUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7OztBQUdBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWREYXRhKCkge1xuXG4gICAgbGV0ICRib2R5ID0gJCgnYm9keScpO1xuICAgIGxldCAkbnl0SGVhZGVyRWxlbSA9ICQoJy5ueXRpbWVzLWhlYWRlcicpO1xuICAgIGxldCAkbnl0RWxlbSA9ICQoJy5ueXRpbWVzLWFydGljbGVzJyk7XG4gICAgbGV0ICRncmVldGluZyA9ICQoJy5ncmVldGluZycpO1xuXG4gICAgLy8gY2xlYXIgb3V0IG9sZCBkYXRhIGJlZm9yZSBuZXcgcmVxdWVzdFxuICAgICRueXRFbGVtLnRleHQoXCJcIik7XG4gICAgJG55dEhlYWRlckVsZW0udGV4dChcIlwiKTtcblxuICAgIC8vIEJ1aWxkIE5ldyBZb3JrIHRpbWVzIEFQSSB1bHJcbiAgICBsZXQgJGFwaVVybCA9ICdodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvc2VhcmNoL3YyL2FydGljbGVzZWFyY2guanNvbic7XG5cbiAgICAvLyBhZGQgYXBpIGtleSBhcyBwYXJhbWV0ZXJcbiAgICAkYXBpVXJsICs9ICc/JyArICQucGFyYW0oe1xuICAgICAgICAnYXBpLWtleSc6ICcyZTY5ODQ5YThjMWY0ZTc2YWFhZDA4MzVlM2UxNzljZCcsXG4gICAgICAgICdzb3J0JzogJ25ld2VzdCdcbiAgICB9KTtcblxuICAgICQuYWpheCh7XG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIHVybDogJGFwaVVybCxcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICAgICAgJG55dEhlYWRlckVsZW0udGV4dCgnTmV3IFlvcmsgVGltZXMgQXJ0aWNsZXMgQWJvdXQnKTtcblxuICAgICAgICBsZXQgYXJ0aWNsZXMgPSByZXN1bHQucmVzcG9uc2UuZG9jcztcblxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGFydGljbGUgPSBhcnRpY2xlc1tpXTtcbiAgICAgICAgICAgICRueXRFbGVtLmFwcGVuZCgnPGxpIGNsYXNzPVwiYXJ0aWNsZVwiPicrXG4gICAgICAgICAgICAgICAgJzxhIGhyZWY9XCInICsgYXJ0aWNsZS53ZWJfdXJsICsgJ1wiPicgKyBhcnRpY2xlLmhlYWRsaW5lLm1haW4gKyAnPC9hPicgK1xuICAgICAgICAgICAgICAgICc8cD4nICsgYXJ0aWNsZS5zbmlwcGV0ICsgJzwvcD4nICtcbiAgICAgICAgICAgICAgICAnPHNtYWxsPicgKyBhcnRpY2xlLnB1Yl9kYXRlICsgJzwvc21hbGw+JyArXG4gICAgICAgICAgICAgICAgJzwvbGk+Jyk7XG4gICAgICAgIH07XG5cbiAgICB9KS5lcnJvcihmdW5jdGlvbihlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZygnU29ycnkgdGhlcmUgd2FzIGFuIGVycm9yJywgZXJyKTtcbiAgICAgICAgJG55dEhlYWRlckVsZW0udGV4dCgnRVJST1I6IGFydGljbGVzIGNvdWxkIG5vdCBiZSBsb2FkZWQnKTtcbiAgICB9KTtcblxuXHRjb25zb2xlLmxvZygnQVBQIElOSVQnKTtcblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gbG9hZERhdGE7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9