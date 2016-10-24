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
	    }).done(function (result) {
	        console.log(result);
	
	        $nytHeaderElem.text('New York Times Articles About');
	
	        var articles = result.response.docs;
	        for (var i = 0; i < articles.length; i++) {
	            var article = articles[i];
	            $nytElem.append('<li class="article">' + '<a href="' + article.web_url + '">' + article.headline.main + '</a>' + '<p>' + article.snippet + '</p>' + '<small>' + article.pub_date + '</small>' + '</li>');
	        };
	    }).error(function (err) {
	        console.log('Sorry there was an error', err);
	        $nytHeaderElem.text('ERROR: articles could not be loaded');
	    });
	
	    return false;
	};
	
	console.log('APP INIT');

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZThlNDNlYTRkZTllZGU4MTE4ZTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNyQ0EsVUFBUyxXQUVMOztTQUFJLFFBQVEsRUFDWjtTQUFJLGlCQUFpQixFQUNyQjtTQUFJLFdBQVcsRUFDZjtTQUFJLFlBQVksRUFFaEI7O0FBQ0E7Y0FBUyxLQUNUO29CQUFlLEtBRWY7O0FBQ0E7U0FBSSxVQUVKOztBQUNBO2dCQUFXLFFBQVE7b0JBRWY7aUJBR0o7QUFKSSxNQURhOztPQUtmO21CQUVFO2NBQ0E7aUJBQVE7QUFGUixRQUdELEtBQUssVUFBUyxRQUNiO2lCQUFRLElBRVI7O3dCQUFlLEtBRWY7O2FBQUksV0FBVyxPQUFPLFNBQ3RCO2NBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxTQUFTLFFBQVEsS0FDaEM7aUJBQUksVUFBVSxTQUNkO3NCQUFTLE9BQU8seUJBQ1osY0FBYyxRQUFRLFVBQVUsT0FBTyxRQUFRLFNBQVMsT0FBTyxTQUMvRCxRQUFRLFFBQVEsVUFBVSxTQUMxQixZQUFZLFFBQVEsV0FBVyxhQUV0QztBQUVKO0FBbkJELFFBbUJHLE1BQU0sVUFBUyxLQUNkO2lCQUFRLElBQUksNEJBQ1o7d0JBQWUsS0FDbEI7QUFFRDs7WUFDSDs7O0FBRUQsU0FBUSxJQUFJLFkiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBlOGU0M2VhNGRlOWVkZTgxMThlOVxuICoqLyIsIlxuZnVuY3Rpb24gbG9hZERhdGEoKSB7XG5cbiAgICBsZXQgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgbGV0ICRueXRIZWFkZXJFbGVtID0gJCgnI255dGltZXMtaGVhZGVyJyk7XG4gICAgbGV0ICRueXRFbGVtID0gJCgnI255dGltZXMtYXJ0aWNsZXMnKTtcbiAgICBsZXQgJGdyZWV0aW5nID0gJCgnI2dyZWV0aW5nJyk7XG5cbiAgICAvLyBjbGVhciBvdXQgb2xkIGRhdGEgYmVmb3JlIG5ldyByZXF1ZXN0XG4gICAgJG55dEVsZW0udGV4dChcIlwiKTtcbiAgICAkbnl0SGVhZGVyRWxlbS50ZXh0KFwiXCIpO1xuXG4gICAgLy8gQnVpbGQgTmV3IFlvcmsgdGltZXMgQVBJIHVsclxuICAgIGxldCAkYXBpVXJsID0gJ2h0dHBzOi8vYXBpLm55dGltZXMuY29tL3N2Yy9zZWFyY2gvdjIvYXJ0aWNsZXNlYXJjaC5qc29uJztcblxuICAgIC8vIGFkZCBhcGkga2V5IGFzIHBhcmFtZXRlclxuICAgICRhcGlVcmwgKz0gJz8nICsgJC5wYXJhbSh7XG4gICAgICAgICdhcGkta2V5JzogJzJlNjk4NDlhOGMxZjRlNzZhYWFkMDgzNWUzZTE3OWNkJyxcbiAgICAgICAgJ3NvcnQnOiAnbmV3ZXN0J1xuICAgIH0pO1xuXG4gICAgJC5hamF4KHtcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgdXJsOiAkYXBpVXJsLFxuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSkuZG9uZShmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgICAgICAkbnl0SGVhZGVyRWxlbS50ZXh0KCdOZXcgWW9yayBUaW1lcyBBcnRpY2xlcyBBYm91dCcpO1xuXG4gICAgICAgIHZhciBhcnRpY2xlcyA9IHJlc3VsdC5yZXNwb25zZS5kb2NzO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYXJ0aWNsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBhcnRpY2xlID0gYXJ0aWNsZXNbaV07XG4gICAgICAgICAgICAkbnl0RWxlbS5hcHBlbmQoJzxsaSBjbGFzcz1cImFydGljbGVcIj4nK1xuICAgICAgICAgICAgICAgICc8YSBocmVmPVwiJyArIGFydGljbGUud2ViX3VybCArICdcIj4nICsgYXJ0aWNsZS5oZWFkbGluZS5tYWluICsgJzwvYT4nICtcbiAgICAgICAgICAgICAgICAnPHA+JyArIGFydGljbGUuc25pcHBldCArICc8L3A+JyArXG4gICAgICAgICAgICAgICAgJzxzbWFsbD4nICsgYXJ0aWNsZS5wdWJfZGF0ZSArICc8L3NtYWxsPicgK1xuICAgICAgICAgICAgICAgICc8L2xpPicpO1xuICAgICAgICB9O1xuXG4gICAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyKXtcbiAgICAgICAgY29uc29sZS5sb2coJ1NvcnJ5IHRoZXJlIHdhcyBhbiBlcnJvcicsIGVycik7XG4gICAgICAgICRueXRIZWFkZXJFbGVtLnRleHQoJ0VSUk9SOiBhcnRpY2xlcyBjb3VsZCBub3QgYmUgbG9hZGVkJyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zb2xlLmxvZygnQVBQIElOSVQnKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2FwcC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=