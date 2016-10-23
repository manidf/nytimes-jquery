/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	
	function loadData() {
	
	    let $body = $('body');
	    let $nytHeaderElem = $('#nytimes-header');
	    let $nytElem = $('#nytimes-articles');
	    let $greeting = $('#greeting');
	
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
	
	console.log('hello world');


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGY2ODA4MjNiMzQ2NDk0MDU0OGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNyQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBOztBQUVBO0FBQ0EsdUJBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDRmNjgwODIzYjM0NjQ5NDA1NDhkXG4gKiovIiwiXG5mdW5jdGlvbiBsb2FkRGF0YSgpIHtcblxuICAgIGxldCAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICBsZXQgJG55dEhlYWRlckVsZW0gPSAkKCcjbnl0aW1lcy1oZWFkZXInKTtcbiAgICBsZXQgJG55dEVsZW0gPSAkKCcjbnl0aW1lcy1hcnRpY2xlcycpO1xuICAgIGxldCAkZ3JlZXRpbmcgPSAkKCcjZ3JlZXRpbmcnKTtcblxuICAgIC8vIGNsZWFyIG91dCBvbGQgZGF0YSBiZWZvcmUgbmV3IHJlcXVlc3RcbiAgICAkbnl0RWxlbS50ZXh0KFwiXCIpO1xuICAgICRueXRIZWFkZXJFbGVtLnRleHQoXCJcIik7XG5cbiAgICAvLyBCdWlsZCBOZXcgWW9yayB0aW1lcyBBUEkgdWxyIFxuICAgIGxldCAkYXBpVXJsID0gJ2h0dHBzOi8vYXBpLm55dGltZXMuY29tL3N2Yy9zZWFyY2gvdjIvYXJ0aWNsZXNlYXJjaC5qc29uJztcbiAgICBcbiAgICAvLyBhZGQgYXBpIGtleSBhcyBwYXJhbWV0ZXJcbiAgICAkYXBpVXJsICs9ICc/JyArICQucGFyYW0oe1xuICAgICAgICAnYXBpLWtleSc6ICcyZTY5ODQ5YThjMWY0ZTc2YWFhZDA4MzVlM2UxNzljZCcsXG4gICAgICAgICdzb3J0JzogJ25ld2VzdCdcbiAgICB9KTtcblxuICAgICQuYWpheCh7XG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIHVybDogJGFwaVVybCxcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIFxuICAgICAgICAkbnl0SGVhZGVyRWxlbS50ZXh0KCdOZXcgWW9yayBUaW1lcyBBcnRpY2xlcyBBYm91dCcpO1xuICAgICAgICBcbiAgICAgICAgdmFyIGFydGljbGVzID0gcmVzdWx0LnJlc3BvbnNlLmRvY3M7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGFydGljbGUgPSBhcnRpY2xlc1tpXTtcbiAgICAgICAgICAgICRueXRFbGVtLmFwcGVuZCgnPGxpIGNsYXNzPVwiYXJ0aWNsZVwiPicrXG4gICAgICAgICAgICAgICAgJzxhIGhyZWY9XCInICsgYXJ0aWNsZS53ZWJfdXJsICsgJ1wiPicgKyBhcnRpY2xlLmhlYWRsaW5lLm1haW4gKyAnPC9hPicgKyBcbiAgICAgICAgICAgICAgICAnPHA+JyArIGFydGljbGUuc25pcHBldCArICc8L3A+JyArIFxuICAgICAgICAgICAgICAgICc8c21hbGw+JyArIGFydGljbGUucHViX2RhdGUgKyAnPC9zbWFsbD4nICtcbiAgICAgICAgICAgICAgICAnPC9saT4nKTtcbiAgICAgICAgfTtcblxuICAgIH0pLmVycm9yKGZ1bmN0aW9uKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTb3JyeSB0aGVyZSB3YXMgYW4gZXJyb3InLCBlcnIpO1xuICAgICAgICAkbnl0SGVhZGVyRWxlbS50ZXh0KCdFUlJPUjogYXJ0aWNsZXMgY291bGQgbm90IGJlIGxvYWRlZCcpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc29sZS5sb2coJ2hlbGxvIHdvcmxkJyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2pzL2FwcC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=