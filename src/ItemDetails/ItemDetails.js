import Component from 'inferno-component';

import ItemDetailsContainer from './ItemDetailsContainer';

export default class ItemDetails extends Component {
  render() {
    return <ItemDetailsContainer itemId={ this.props.params.itemId } />;
  }
}
