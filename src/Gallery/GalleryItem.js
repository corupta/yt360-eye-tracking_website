import Component from 'inferno-component';
import { Link } from 'inferno-router';

const myStyle = {
  boxShadow: '0 0 6px 2px #666',
  display: 'inline-block',
  margin: 8,
  padding: '12px 32px',
  textDecoration: 'none'
  // textShadow: '2px 2px 8px #888888'
};

const oddStyle = {
  ...myStyle,
  background: '#FFFBC9',
  color: '#726A00'
};

const evenStyle = {
  ...myStyle,
  background: '#DDFEC8',
  color: '#276400'
};

const linkStyle = {
  color: 'inherit',
  display: 'block',
  fontSize: '1.2em',
  fontWeight: 'bold',
  textAlign: 'center',
  textDecoration: 'none'
};

export default class GalleryItem extends Component {
  render() {
    console.log('props', this.props);
    return (
      <li style={ this.props.odd ? oddStyle : evenStyle }>
        <Link to={ `/galleries/${this.props.path}` } style={ linkStyle }>
          { this.props.name }
        </Link>
      </li>
    );
  }
}
