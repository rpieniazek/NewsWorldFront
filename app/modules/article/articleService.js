(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:articleService
	 * @description
	 * # articleService
	 * Service of the app
	 */

  	angular
		.module('article')
		.factory('ArticleService', Article);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

	Article.$inject = ['$http'];

	function Article($http) {

			return {
				like: like,
				dislike: dislike
			};

		function like(articleId) {
			$http.get('http://37.187.52.160:9000/api/article/'.concat(articleId).concat('/like'));
			}

		function dislike(articleId) {
			$http.get('http://37.187.52.160:9000/api/article//'.concat(articleId).concat('/dislike'));
			}

		}

})();
