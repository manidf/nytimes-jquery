webpackJsonp([0],[
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
	    }).done(function (result) {
	        console.log(result);
	
	        $nytHeaderElem.text('New York Times Articles About');
	
	        let articles = result.response.docs;
	
	        for (let i = 0; i < articles.length; i++) {
	            let article = articles[i];
	            $nytElem.append('<li class="article">' + '<a href="' + article.web_url + '">' + article.headline.main + '</a>' + '<p>' + article.snippet + '</p>' + '<small>' + article.pub_date + '</small>' + '</li>');
	        };
	    }).error(function (err) {
	        console.log('Sorry there was an error', err);
	        $nytHeaderElem.text('ERROR: articles could not be loaded');
	    });
	
	    console.log('APP INIT');
	
	    return false;
	};
	
	module.exports = loadData;

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsVUFBUyxXQUVMOztTQUFJLFFBQVEsRUFDWjtTQUFJLGlCQUFpQixFQUNyQjtTQUFJLFdBQVcsRUFDZjtTQUFJLFlBQVksRUFFaEI7O0FBQ0E7Y0FBUyxLQUNUO29CQUFlLEtBRWY7O0FBQ0E7U0FBSSxVQUVKOztBQUNBO2dCQUFXLFFBQVE7b0JBRWY7aUJBR0o7QUFKSSxNQURhOztPQUtmO21CQUVFO2NBQ0E7aUJBQVE7QUFGUixRQUdELEtBQUssVUFBUyxRQUNiO2lCQUFRLElBRVI7O3dCQUFlLEtBRWY7O2FBQUksV0FBVyxPQUFPLFNBRTVCOztjQUFJLElBQUksSUFBSSxHQUFHLElBQUksU0FBUyxRQUFRLEtBQzFCO2lCQUFJLFVBQVUsU0FDZDtzQkFBUyxPQUFPLHlCQUNaLGNBQWMsUUFBUSxVQUFVLE9BQU8sUUFBUSxTQUFTLE9BQU8sU0FDL0QsUUFBUSxRQUFRLFVBQVUsU0FDMUIsWUFBWSxRQUFRLFdBQVcsYUFFdEM7QUFFSjtBQXBCRCxRQW9CRyxNQUFNLFVBQVMsS0FDZDtpQkFBUSxJQUFJLDRCQUNaO3dCQUFlLEtBQ2xCO0FBRUo7O2FBQVEsSUFFUjs7WUFDQTs7O0FBR0QsUUFBTyxVQUFVLFMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbG9hZERhdGEoKSB7XG5cbiAgICBsZXQgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgbGV0ICRueXRIZWFkZXJFbGVtID0gJCgnLm55dGltZXMtaGVhZGVyJyk7XG4gICAgbGV0ICRueXRFbGVtID0gJCgnLm55dGltZXMtYXJ0aWNsZXMnKTtcbiAgICBsZXQgJGdyZWV0aW5nID0gJCgnLmdyZWV0aW5nJyk7XG5cbiAgICAvLyBjbGVhciBvdXQgb2xkIGRhdGEgYmVmb3JlIG5ldyByZXF1ZXN0XG4gICAgJG55dEVsZW0udGV4dChcIlwiKTtcbiAgICAkbnl0SGVhZGVyRWxlbS50ZXh0KFwiXCIpO1xuXG4gICAgLy8gQnVpbGQgTmV3IFlvcmsgdGltZXMgQVBJIHVsclxuICAgIGxldCAkYXBpVXJsID0gJ2h0dHBzOi8vYXBpLm55dGltZXMuY29tL3N2Yy9zZWFyY2gvdjIvYXJ0aWNsZXNlYXJjaC5qc29uJztcblxuICAgIC8vIGFkZCBhcGkga2V5IGFzIHBhcmFtZXRlclxuICAgICRhcGlVcmwgKz0gJz8nICsgJC5wYXJhbSh7XG4gICAgICAgICdhcGkta2V5JzogJzJlNjk4NDlhOGMxZjRlNzZhYWFkMDgzNWUzZTE3OWNkJyxcbiAgICAgICAgJ3NvcnQnOiAnbmV3ZXN0J1xuICAgIH0pO1xuXG4gICAgJC5hamF4KHtcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgdXJsOiAkYXBpVXJsLFxuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSkuZG9uZShmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgICAgICAkbnl0SGVhZGVyRWxlbS50ZXh0KCdOZXcgWW9yayBUaW1lcyBBcnRpY2xlcyBBYm91dCcpO1xuXG4gICAgICAgIGxldCBhcnRpY2xlcyA9IHJlc3VsdC5yZXNwb25zZS5kb2NzO1xuXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXJ0aWNsZSA9IGFydGljbGVzW2ldO1xuICAgICAgICAgICAgJG55dEVsZW0uYXBwZW5kKCc8bGkgY2xhc3M9XCJhcnRpY2xlXCI+JytcbiAgICAgICAgICAgICAgICAnPGEgaHJlZj1cIicgKyBhcnRpY2xlLndlYl91cmwgKyAnXCI+JyArIGFydGljbGUuaGVhZGxpbmUubWFpbiArICc8L2E+JyArXG4gICAgICAgICAgICAgICAgJzxwPicgKyBhcnRpY2xlLnNuaXBwZXQgKyAnPC9wPicgK1xuICAgICAgICAgICAgICAgICc8c21hbGw+JyArIGFydGljbGUucHViX2RhdGUgKyAnPC9zbWFsbD4nICtcbiAgICAgICAgICAgICAgICAnPC9saT4nKTtcbiAgICAgICAgfTtcblxuICAgIH0pLmVycm9yKGZ1bmN0aW9uKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTb3JyeSB0aGVyZSB3YXMgYW4gZXJyb3InLCBlcnIpO1xuICAgICAgICAkbnl0SGVhZGVyRWxlbS50ZXh0KCdFUlJPUjogYXJ0aWNsZXMgY291bGQgbm90IGJlIGxvYWRlZCcpO1xuICAgIH0pO1xuXG5cdGNvbnNvbGUubG9nKCdBUFAgSU5JVCcpO1xuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBsb2FkRGF0YTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=