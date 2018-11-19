
import ActionConstants from '../ActionConstants';
import marketsReducerPlaceholder from '../../reducers/marketsReducerPlaceholder';

describe('placeholder Reducer', () => {
	it('ADD_COLOR success', () => {
		const state = {}
		const action = {
			type: ActionConstants.FILTER_MARKETS,
			id: 0,
			
		};
		const results = marketsReducerPlaceholder(state, action);
		expect(results)
			.toEqual({
				id: 0,
				title: 'Test Teal',
				color: '#90C3D4',
				timestamp: action.timestamp,
				rating: 0
			});
	});


});
