import Component from 'inferno-component';
import Loading from '../../Loading';
// import browserHistory from '../../History';

export default class MainItemListRedirector extends Component {
  render() {
    const uri = `/galleries/${this.props.params.gallery}/_`;
    // browserHistory.push(uri);
    window.location.replace(uri);
    return <Loading />;
  }
}