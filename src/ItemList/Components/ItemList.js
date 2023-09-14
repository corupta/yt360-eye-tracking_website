import Component from 'inferno-component';

import Item from './Item';

const myStyle = {
  textAlign: 'center'
};

export default class Items extends Component {
  render() {
    console.log ('items props', this.props);
    return (
      <div style={ myStyle }>
        {this.props.items.map((item) => {
          return <Item key={ item.id } { ...item } />;
        })}
      </div>
    );
  }
}