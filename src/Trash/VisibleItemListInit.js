import Component from 'inferno-component';

import VisibleItemList from './VisibleItemList';

const filter = {
  intersectOrUnion: true,
  search: '',
  tags: []
};

export default class VisibleItemListInit extends Component {
  render() {
    return <VisibleItemList filter={ filter } gallery={ this.props.params.gallery } />;
  }
}
