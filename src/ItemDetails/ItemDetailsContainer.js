/* eslint no-bitwise: 0 */
import Component from 'inferno-component';
import { connect } from 'inferno-redux';

import Loading from '../Loading';
import { perInt, maxTagGroups } from '../Globals';

const hStyle = {
  display: 'block',
  padding: '2vw',
  textAlign: 'center'
};

const myStyle = {
  textAlign: 'center',
};

const topStyle = {
  background: '#FFE4D9',
  boxShadow: '0 4px 8px 1px #987',
  color: '#560026',
  marginBottom: 'calc(2vw + 12px)',
  padding: 'calc(1vw + 2px) 6vw',
  paddingBottom: 32,
  textAlign: 'left',
};

const pStyle = {
  color: 'black',
  fontWeight: 'bold',
  letterSpacing: 0.5,
  lineHeight: 1.5
};
const botStyle = {
  display: 'inline-block',
  margin: 'auto',
  position: 'relative',
  textAlign: 'left'
};

const imgStyle = {
  boxShadow: '0 2px 5px 2px #666',
  display: 'block',
  margin: 'auto',
  maxWidth: '92vw'
};

const oddTagStyle = {
  color: '#662244'
};

const evenTagStyle = {
  color: '#442266'
};

const enBottomStyle = {
  letterSpacing: 0.2,
  lineHeight: 1.3,
  margin: 'calc(2vw + 4px) 0 calc(4vw + 4px) 0',
  position: 'absolute'
};

class ItemDetailsView extends Component {
  constructor(props) {
    super(props);
    this.getTagWithId = this.getTagWithId.bind(this);
    this.getTags = this.getTags.bind(this);
  }
  getTagWithId(tagId, ind) {
    return (
      <span
        key={ this.props.tags[tagId].id }
        style={ ind & 1 ? oddTagStyle : evenTagStyle }
      >
        { ind > 0 ? ', ' : ' '}
        { this.props.tags[tagId].name }
      </span>
    );
  }
  getTags() {
    const res = [];
    let j, tmp, tagKey, baseTagId;
    for (let i = 0; i < maxTagGroups; ++i) {
      tagKey = `tags${i}`;
      if (typeof this.props.item[tagKey] === 'undefined') {
        break;
      } else {
        tmp = this.props.item[tagKey] & 0x3fffffff;
        baseTagId = i * perInt;
        j = 0;
        while (tmp) {
          res.push(this.getTagWithId(baseTagId + j, res.length));
          tmp >>>= 1;
          ++j;
        }
      }
    }
    return res;
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
          <h1 style={ hStyle }>
            {this.props.item.name}
            { ' ~ ' }
            {/*this.props.item.price*/'15 $' }
          </h1>
          <p style={ pStyle }>
            {this.props.item.description}
          </p>
        </div>
        <div style={ botStyle }>
          <img
            src={ `/images/full/${this.props.item.id}` }
            alt={ this.props.item.name }
            title={ this.props.item.name }
            style={ imgStyle }
          />
          <div style={ enBottomStyle }>
            <b>Tags:&nbsp;</b>
            { this.getTags() }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state.loading
    ? { loading: true }
    : { item: state.data.obj[state.itemMap[ownProps.itemId]], tags: state.data.tags };
};

const ItemDetailsContainer = connect(mapStateToProps)(ItemDetailsView);

export default ItemDetailsContainer;
