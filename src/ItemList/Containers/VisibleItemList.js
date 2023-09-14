/* eslint no-bitwise: 0 */
// import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import ItemList from '../Components/ItemList';
import { perInt } from '../../Globals';
import isSimilar from '../Functional/SearchFilter';

const getVisibleItems = (items, galleryId, filter) => {
  const ans = [];
  const galKey = galleryId !== - 1 && `galleries${Math.floor(galleryId / perInt)}`;
  const galBin = galleryId !== - 1 && 1 << galleryId % perInt;
  items.forEach((item) => {
    if (galleryId === - 1 || item[galKey] & galBin) {
      let tagKey, tagBin;
      let res = true;
      console.log('tag', item);
      for (let i = 0; i < filter.tags.length; ++i) {
        tagBin = filter.tags[i];
        if (tagBin) {
          tagKey = `tags${i}`;
          const q = item[tagKey] & tagBin;
          if (filter.intersectOrUnion ? q !== tagBin : q) {
            // less black magic :P
            res = false;
            break;
          }
        }
      }
      if (res === filter.intersectOrUnion && isSimilar(item.name, filter.search)) {
        ans.push(item);
      }
    }
  });
  return ans;
};

const mapStateToProps = (state, ownProps) => {
  /*
  console.log(state);
  return state.loading
    ? { loading: true }
    : { items: getVisibleItems(state.data.obj, state.galMap[ownProps.gallery], ownProps.filter) };
  */
  return {
    items: getVisibleItems(
      state.data.obj,
      ownProps.gallery === 'all'
        ? - 1
        : state.galMap[ownProps.gallery],
      ownProps.filter
    )
  };
};

const VisibleItemList = connect(mapStateToProps)(ItemList);

export default VisibleItemList;
