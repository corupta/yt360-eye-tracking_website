import Component from 'inferno-component';

import TopHeader from './Header/TopHeader';
import Header from './Header/Header';

const mainStyle = {
  minWidth: 300,
  width: '100%'
};

const viewStyle = {
  maxWidth: 800,
  margin: '0 auto',
  padding: '0 12px 32px 12px'
};

export default class Main extends Component {
  render() {
    return (
      <div style={ mainStyle }>
        <TopHeader />
        <Header />
        <div style={ viewStyle }>
          { this.props.children }
        </div>
        {this.props.footer}
      </div>
    );
  }
}
