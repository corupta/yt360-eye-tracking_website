import Component from 'inferno-component';

export default class Loading extends Component {
  render() {
    return (
      <img src='/assets/loading.gif' alt='Loading...' title='Loading...' />
    );
  }
}
