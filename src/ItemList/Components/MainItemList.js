import Component from 'inferno-component';

import SearchBar from '../Mixed/SearchBar';
import VisibleItemList from '../Containers/VisibleItemList';
import Loading from '../../Loading';

const myStyle = {

};

const topStyle = {
  background: '#d8ecf0',
  boxShadow: '0 4px 8px -4px #444',
  marginBottom: 16,
  padding: '12px 3%',
  textAlign: 'center'
};

const headingStyle = {
  marginBottom: 12,
  marginTop: 8
};

export default class MainItemList extends Component {
  constructor(props) {
    super(props);
    console.log('cons');

  }
  render() {
    if (this.props.loading) {
      return (
        <div style={ myStyle }>
          <Loading />
        </div>
      );
    }
    return (
      <div style={ myStyle }>
        <div style={ topStyle }>
          <h2 style={ headingStyle }>{ this.props.galleryName }</h2>
          <SearchBar filter={ this.props.filter } gallery={ this.props.gallery } />
        </div>
        <VisibleItemList filter={ this.props.filter } gallery={ this.props.gallery } />
      </div>
    );
  }
}


/*
gallery: str
filter: {
  search: str,
  intersectOrUnion: bool,
  tags: []
}
 */
