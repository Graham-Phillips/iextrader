import MarketsAPI from '../serverapi/MarketsAPI';

const MarketsActions = {

    GET_MARKETS_ITEMS: 'markets/GET_MARKETS_ITEMS',
	GET_MARKETS_ITEMS_SUCCESS: 'markets/GET_MARKETS_ITEMS_SUCCESS',
	GET_MARKETS_ITEMS_FAILED: 'markets/GET_MARKETS_ITEMS_FAILED',

    getMarketsItems()
	{
		return (dispatch) => {
			dispatch({
				type: this.GET_MARKETS_ITEMS,
				payload: {
				},
			});

			return MarketsAPI.fetchAllMarketsData()
				.then((response) => {
					console.log('fetchAllMarketsData ');
					dispatch(this.getMarketItemsSuccess(response, false));
				}, (error) => {
					dispatch(handleResponseError(error));
					dispatch(this.getMarketSummaryItemsFailed(error));
				});
		};
    },
    
    getMarketItemsSuccess(response, requestedMore)
	{
		return {
			type: this.GET_MARKETS_ITEMS_SUCCESS,
			payload: {
				response,
			},
		};
	},

	getMarketSummaryItemsFailed(error)
	{
		return {
			type: this.GET_MARKETS_ITEMS_FAILED,
			payload: {
				error,
			},
		};
	},


};

export default MarketsActions;