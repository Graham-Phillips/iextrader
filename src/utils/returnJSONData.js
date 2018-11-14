
export default function returnJSONData(response)
{
	const contentType = response.headers['content-type'];

	if (contentType.indexOf('application/json') >= 0)
	{
		if (typeof response.data === 'string')
		{
			// axios swallows parse errors and returns the string instead
			// parse the data again, so we have the error in the rejection handler
			return JSON.parse(response.data);
		}

		return response.data;
	}

	return Promise.reject(new Error(`Invalid content type: ${contentType}`));
}
