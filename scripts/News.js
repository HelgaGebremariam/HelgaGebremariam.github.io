class News
{
	constructor(newsData)
	{
		Object.assign(this, newsData);
	}

	GetDate()
	{
	  return new Date(this.publishedAt).toLocaleString('en-US', {day: 'numeric', month: 'short', year:'numeric'});
	}
}
export default News;