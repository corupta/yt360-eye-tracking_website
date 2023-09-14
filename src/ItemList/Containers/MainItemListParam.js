import Component from 'inferno-component';

import MainItemListContainer from '../Containers/MainItemListContainer';
import { urlToFilter } from '../Functional/FilterUrl';


export default class MainItemListParam extends Component {
  constructor(props) {
    super(props);
    this.calculateFilter = this.calculateFilter.bind(this);
    this.filter = {
      isFixation: true,
      search: '',
      audio_types: [],
      scene_types: [],
    }
  }
  calculateFilter() {
    return this.filter;
  }
  render() {
    return <MainItemListContainer filter={ this.calculateFilter() } gallery={ 'darkviolet-rempel' } />;
  }
}

// this.props.params.customCode
