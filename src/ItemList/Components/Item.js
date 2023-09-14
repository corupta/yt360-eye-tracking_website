import Component from 'inferno-component';
import { Link } from 'inferno-router';

const myStyle = {
  backgroundColor: '#FFF1DA',
  boxShadow: '0 0 6px 1px #764',
  color: 'black',
  display: 'inline-block',
  margin: '1vw',
  minWidth: '120px',
  textAlign: 'center',
  verticalAlign: 'middle',
  width: 'calc(15.3% + 4px - 1.8vw)'
};

const imgStyle = {
  width: '100%'
};

const moneyStyle = {
  color: '#005522'
};

const realMoneyStyle = {
  color: '#006688'
};

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.getTagList = this.getTagList.bind(this);
  }
  getTagList() {
    const res = [];
    return res;
  }
  render() {
    console.log('item props', this.props)
    return (
      <Link to={ `/details/${this.props.id}` }>
        <div style={ myStyle }>
          <img
            src={ `/images/full/${this.props.id}` }
            alt={ this.props.name }
            title={ this.props.description }
            style={ imgStyle }
          />
          <h4>{ this.props.name }</h4>
          <h5><span style={ moneyStyle }>Price: </span><span style={ realMoneyStyle }>15 $</span></h5>
        </div>
      </Link>
    );
  }
}
