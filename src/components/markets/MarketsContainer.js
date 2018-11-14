import React, { Component } from 'react';
import { connect } from 'react-redux';

import MarketsActions from '../../actions/MarketsActions';

class MarketsContainer extends Component {
    
    componentWillMount()
    {
        this.dispatchGetMarketDataItems();
    }

    dispatchGetMarketDataItems()
    {
        const action = MarketsActions.getMarketsItems();
        this.props.dispatch(action);
    }

    render()
    {
        return (
            <div>MarketsContainer</div>
        )
    }

}

const mapStateToProps = (state) => {
    const promoItems = getPromoItems(state);
    return {
        marketDataItems,
    };
};

export default connect(mapStateToProps)(MarketsContainer);
