class Error
{
	constructor()
	{
		if(PROD)
			this.GetErrorContext = this.errorProdContent;
		else
			this.GetErrorContext = this.errorDevContent;
	}
	
	ShowError(errorMessage, errorInTheDom)
	{
		errorInTheDom.insertAdjacentHTML('beforeEnd', this.GetErrorContext(errorMessage));
	}
	
	errorProdContent(error)
	{
		let errorContent = `
		<img src="images/oops.jpg"/>
		`;
		return errorContent;
	}
	
	errorDevContent(error)
	{
		let errorContent = `
		<p>${error}</p>
		`;
		return errorContent;
	}
}

export let error = new Error();