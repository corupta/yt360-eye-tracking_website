import Component from 'inferno-component';
import { Link } from 'inferno-router';

const myLiStyle = {
  display: 'inline-block',
  verticalAlign: 'middle'
};

const myStyle = {
  color: 'black',
  display: 'block',
  marginTop: 4,
  padding: '8px 0px',
  margin: '0px 4px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none'
};

const myActiveStyle = {
  borderTop: '4px black solid',
  marginTop: 0
};

const maskBase = {
  background: '#fff',
  height: 4,
  position: 'absolute',
  top: - 4,
  width: '16%'
};

const leftMask = {
  ...maskBase,
  left: 0
};

const rightMask = {
  ...maskBase,
  right: 0
};

/*
const myStyleWithBorder = {
  ...myStyle,
  borderLeft: '2px black solid'
};
*/

const imgStyle = {
  height: 'calc(1.2vw + 16px)',
};

export default class HeaderLink extends Component {
  render() {
    console.log(this.props.imgUrl);
    if (!this.props.imgUrl) {
      return (
        <li style={ myLiStyle }>
          <Link
            to={ this.props.url }
            style={ myStyle }
            activeStyle={ myActiveStyle }
          >
            { this.props.name }
            <div style={ leftMask } />
            <div style={ rightMask } />
          </Link>
        </li>
      );
    }
    const style = {
      ...imgStyle,
      ...this.props.imgStyle
    };
    return (
      <li style={ myLiStyle }>
        <a href={ this.props.url } style={ myStyle } target="_blank" rel="noreferrer noopener nofollow">
          <img src={ this.props.imgUrl } title={ this.props.name } alt={ this.props.name } style={ style }/>
        </a>
      </li>
    );
  }
}

/*
PropTypes:

this.props.name: string
this.props.url: string
this.props.isFirst: bool => deprecated

this.props.imgUrl: string

if true => url = link url
name => image name
 */
