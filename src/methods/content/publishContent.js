import { buildAPIUrl, buildAuthHeader } from '../../utils'

/**
 * Publish a given content item.
 * @memberof AgilityManagement.Client.Content
 * @param {Object} requestParams - The paramaters for the API request.
 * @param {string} requestParams.languageCode - The language code of the content you want to publish.
 * @param {number} requestParams.contentID - The contentID of the item to publish.

 * @returns {Promise<number>} - Returns the contentID.
 * @example
 *
 * //TODO: add code example...
 *
*/
function publishContent(requestParams) {

	validateRequestParams(requestParams);

	const args = {
		"contentID": requestParams.contentID,
		"languageCode": requestParams.languageCode,
	}

	const methodName = "PublishContent";

	const data = ``

    const req = {
        url: buildAPIUrl({methodName, args}),
        method: 'post',
        baseURL: this.config.baseURL,
        headers: buildAuthHeader({config:this.config, methodName, args}),
        data: data
    };

    return this.makeRequest(req);
}

function validateRequestParams(requestParams) {
    if(!requestParams.languageCode) {
		throw new TypeError('You must include a languageCode in your request params.')
	} else if(!requestParams.contentID || !(requestParams.contentID > 0)) {
		throw new TypeError('You must include a contentID greater than 0 your request params.');
	} else {
        return;
    }
}


export default publishContent;