'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
	var News = function () {
		function News(newsData) {
			_classCallCheck(this, News);

			Object.assign(this, newsData);
		}

		_createClass(News, [{
			key: 'GetDate',
			value: function GetDate() {
				return new Date(this.publishedAt).toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
			}
		}]);

		return News;
	}();

	var requestParams = {
		apiKey: '993898ce497a4e7993f5340687c29fd4',
		uri: 'https://newsapi.org/v1/articles?source=bbc-news'
	};

	var request = new Request(requestParams.uri + '&apiKey=' + requestParams.apiKey);
	var initRequest = { method: 'GET', mode: 'cors' };
	var newsInTheDom = void 0;

	function Initialize() {
		newsInTheDom = document.querySelector('#news');

		GetAllNews().then(function (response) {
			return NewsLoad(response);
		}).catch(function (err) {
			return ShowError(err);
		});
	}

	function NewsToDataArray(data) {
		if (!data.articles) return [];
		var news = new Map();
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = data.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var n = _step.value;

				var newsModel = new News(n);
				news.set(newsModel.title, newsModel);
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return news;
	}

	function GetAllNews() {
		return new Promise(function (resolve, reject) {
			fetch(request, initRequest).then(function (response) {
				return response.json();
			}).then(function (data) {
				return resolve(NewsToDataArray(data));
			}).catch(function (err) {
				return reject(err);
			});
		});
	}

	function NewsLoad(news) {
		var newsHtml = '';
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = news.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var n = _step2.value;

				newsHtml += ShowNewsInTheDOM(n);
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		newsInTheDom.insertAdjacentHTML('beforeEnd', newsHtml);
	}

	function ShowNewsInTheDOM(news) {
		var newsHtml = '\n\t\t<div>\n\t\t\t\n\t\t\t<div>\n\t\t\t\t<h1><a href="' + news.url + '" target="_blank">' + news.title + '</a></h1>\n\t\t\t\t<h4>' + news.description + '</h4>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<img src="' + news.urlToImage + '" alt="(no image)">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<a href="http://www.bbc.co.uk/news" target="_blank">' + news.author + '</a>\n\t\t\t\t<div>' + news.GetDate() + '</div>\n\t\t\t</div>\n\t\t  </div>\n\t\t';
		return newsHtml;
	}

	function ShowError(error) {
		alert(error);
	}

	document.addEventListener("DOMContentLoaded", Initialize);
})();
