import { buildAPIUrl, buildAuthHeader } from '../../utils'

/**
 * Request approval for a given content item.
 * @memberof AgilityManagement.Client.Content
 * @param {Object} requestParams - The paramaters for the API request.
 * @param {number} requestParams.contentID - The contentID of the item to request approval.
 * @param {string} requestParams.languageCode - The language code of the content you want to request approval for.
 * @returns {Promise<number>} - Returns the contentID.
 * @example
 *
 * import agilityMgmt from '@agility/content-management'
 *
 * #Create a new instance API client
 * const api = agilityMgmt.getApi({
 *   location: 'MyLocation',
 *   websiteName: 'MyWebsiteName',
 *   securityKey: 'MySecurityKey'
 * });
 * 
 * #Set the contentID and language code of content you want to request for approval
 * let contentID = contentIDToWorkOn;
 * let languageCode = "en-us";
 * 
 * api.requestApproval({
 *  contentID,
 *  languageCode
 * })
 * .then(function(contentID) {
 *  #check contentID is greater > 0 for success
 * })
 * .catch(function(error) {
 *  #handle error
 * });
 * 
 * 
*/
function requestApproval(requestParams) {

	validateRequestParams(requestParams);

	const args = {
		"contentID": requestParams.contentID,
		"languageCode": requestParams.languageCode,
	}

	const methodName = "RequestApproval";

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


export default requestApproval;