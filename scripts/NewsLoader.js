require('../styles/NLStyles.css');
import {newsInitializer} from './NewsInitializer.js';
import {error} from './Error.js';

(() => {
	
	const requestParams = require('./config.js');
	const request = new Request(requestParams.uri + '&apiKey=' + requestParams.apiKey);
	const initRequest = { method: 'GET', mode: 'cors' };
	
	let newsInTheDom;
	let errorInTheDom;
	
	function Init()
	{
		errorInTheDom = document.querySelector('#error');
		newsInTheDom = document.querySelector('#news');
		
		try
		{
			newsInitializer.Initialize(request, initRequest, newsInTheDom);
		}
		catch(err)
		{
			error.ShowError(err, errorInTheDom);
		}
	}
	
	document.addEventListener("DOMContentLoaded", Init);

})();