import Component from 'inferno-component';

export default class Download extends Component {
  render() {
    return (
      <div>
        <h2>Download</h2>
        { this.props.children }
      </div>
    );
  }
}