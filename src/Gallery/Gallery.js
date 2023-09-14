// import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import GalleryView from './GalleryView';

const mapStateToProps = (state) => {
  return state.loading ? { loading: true } : { galleries: state.data.galleries };
};

const Gallery = connect(mapStateToProps)(GalleryView);

export default Gallery;
