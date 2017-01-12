import News from './News.js';

class Articles
{
	constructor(data)
	{
		this.index = 0;
		if (!data.articles)
			this.news = [];
		let news = new Array();
		for (let n of data.articles) {
		  let newsModel = new News(n);        
		  news.push(newsModel);
		  var date = newsModel.GetDate();
		}
		this.news = news;
	}
	
	reset()
	{
		this.index = 0;
	}
	
	next()
	{
		return this.news[this.index++];
	}
	
	first()
	{
		this.reset;
		return this.next();
	}
	
	hasNext()
	{
		let bln = this.index <= this.news.length;
		return this.index <= 9;
	}
	
	each(callback) {
        for (var item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    }
}

export default Articles;