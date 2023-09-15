import Component from 'inferno-component';

export default class Attributions extends Component {
  render() {
    return (
      <div>
        <h2>Attributions</h2>
        <p>
          Website logo was generated from Midjourney via 
          {' '}
          <a 
            href="https://beta.dreamstudio.ai/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            DreamStudio
          </a>
          . (CC BY-NC 4.0)
        </p>
      </div>
    );
  }
}