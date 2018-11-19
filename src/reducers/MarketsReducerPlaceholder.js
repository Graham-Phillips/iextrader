import isDefined from '../utils/isDefined';
import ActionConstants from '../ActionConstants';

const MARKET_ITEMS_INITIAL_STATE = {
	//isFetching: false,
	items: null,
};

function createMarketDataItems(state, response)
{
	//TODO
}

export default function marketsReducerPlaceholder(state = MARKET_ITEMS_INITIAL_STATE, action) {
	switch (action.type)
	{
	case ActionConstants.FILTER_MARKETS:
	{
		const { response } = action.payload;

		return Object.assign({}, state, {
			isFetching: false,
			items: createMarketDataItems(state, response.items),
		});
	}
	default:
		return state;
	}
}
