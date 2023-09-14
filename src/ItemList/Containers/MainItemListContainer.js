import { connect } from 'inferno-redux';

import MainItemList from '../Components/MainItemList';

const mapStateToProps = (state, ownProps) => {
  return state.loading
    ? { loading: true }
    : {
      galleryName: ownProps.gallery === 'all'
        ? 'All'
        : state.data.galleries[state.galMap[ownProps.gallery]].name,
      ...ownProps
    };
};

const MainItemListContainer = connect(mapStateToProps)(MainItemList);

export default MainItemListContainer;
