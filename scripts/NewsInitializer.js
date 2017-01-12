import NewsDomLoader from './NewsDomLoader.js';
import Articles from './Articles.js';

class NewsInitializer
{
	Initialize(request, initRequest, newsInTheDom)
	{

		let newsDomLoader = new NewsDomLoader(newsInTheDom);
		this.GetAllNews(request, initRequest)
		.then(response => newsDomLoader.NewsLoad(response));

	}
	
	GetAllNews(request, initRequest)
	{
		return new Promise((resolve, reject) => {
		  fetch(request, initRequest)
			.then(response => response.json())
			.then(data => resolve((new Articles(data))))
			.catch(err => reject(err));
		});    
	}
	

}
export let newsInitializer = new NewsInitializer();