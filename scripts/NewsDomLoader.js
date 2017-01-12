class NewsDomLoader
{

	constructor(newsInTheDom)
	{
		this.newsInTheDom = newsInTheDom;
	}

	NewsLoad(news)
	{
		let newsHtml = '';
		
		for (var item = news.first(); news.hasNext(); item = news.next()) {
            newsHtml += this.ShowNewsInTheDOM(item);
        }

		this.newsInTheDom.insertAdjacentHTML('beforeEnd', newsHtml);
	}
	
	ShowNewsInTheDOM(news)
	{
		let newsHtml = `
		<div class="NewsCell">
			
			<div>
				<h1><a href="${news.url}" target="_blank">${news.title}</a></h1>
				<h4>${news.description}</h4>
			</div>
			<div>
				<img src="${news.urlToImage}" alt="(no image)">
			</div>
			<div>
				<a href="http://www.bbc.co.uk/news" target="_blank">${news.author}</a>
				<div>${news.GetDate()}</div>
			</div>
		  </div>
		`;
		return newsHtml;
	}
}
export default NewsDomLoader;