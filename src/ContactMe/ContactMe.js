import Component from 'inferno-component';

export default class ContactMe extends Component {
  render() {
    return (
      <div>
        <h1>ContactMe</h1>
        { this.props.children }
      </div>
    );
  }
}