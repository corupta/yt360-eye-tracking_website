import Component from 'inferno-component';

import VisibleItemList from './VisibleItemList';
import { urlToFilter } from '../Functional/FilterUrl';

const initFilter = {
  intersectOrUnion: true,
  search: '',
  tags: []
};

export default class VisibleItemListParam extends Component {
  constructor(props) {
    super(props);
    this.calculateFilter = this.calculateFilter.bind(this);
  }
  calculateFilter() {
    const filter = urlToFilter(this.params.customCode | '');
    return filter === false ? initFilter : filter;
  }
  render() {
    return <VisibleItemList filter={ this.calculateFilter() } gallery={ this.props.params.gallery } />;
  }
}

// this.props.params.customCode
