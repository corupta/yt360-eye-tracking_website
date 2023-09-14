import Component from 'inferno-component';

import GalleryItem from './GalleryItem';
import Loading from '../Loading';

const myStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  listStyleType: 'none',
  margin: 0,
  padding: '8px 16px',
  textAlign: 'center'
};

export default class GalleryView extends Component {
  render() {
    if (this.props.loading) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    return (
      <ul style={ myStyle }>
        <GalleryItem key={ 0 } path='all' name='All' odd={ true } />
        { this.props.galleries.map((gallery, i) => {
          return <GalleryItem key={ gallery.id } { ...gallery } odd={ (i & 1) === 1 } />;
        })}
      </ul>
    );
  }
}

/*
  this.props.loading === true => loading
  else present this.props.gallery
 */
