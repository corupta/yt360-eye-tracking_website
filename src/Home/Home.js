import Component from 'inferno-component';

const styles = {
  thumbnailCollage: {
    width: '100%'
  }
}

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>YT-360-Curated-Eye Dataset</h2>
          <p>
            We curated a subset of 360° videos with first order ambisonics from 
            {' '}
            <a href="https://pedro-morgado.github.io/AVSpatialAlignment/" target="_blank" rel="noopener noreferrer nofollow">
              YT-360 Dataset
            </a> 
            {' '}
            containing equal amounts of clips from each scene type (indoor, outdoor-natural, and outdoor-manmade) 
            and audio type (human speech, music instrument, and vehicle sounds). Each category combination has 9 clips, 
            totalling 81 clips. The clips were carefully chosen according to the following criteria:
            <ol>
              <li>They should contain valid ambisonics </li>
              <li>They shouldn't be still images </li>
              <li>They shouldn't have any scene cut/jump</li>
              <li>They should be of 30 seconds long (at least 3 consecutive 10 seconds YT-360 clips)</li>
              <li>They should have a high resolution (at least 4K or 3840x1920) </li>
              <li>They should fit only one of the audio categories (human speech, music instrument, and vehicle sounds) </li>
              <li>If more than 9 clips are available for a category combination, the ones with seemingly more different 
                content than others are chosen for better generalizability</li>
            </ol>
            Next up, the clips were shown to 102 observers in randomized conditions 
            (such that each video clip was watched by ~16 observers in each condition)
            in a free-viewing task, and their eye-tracking data were collected
            using HTC Vive Pro Eye headset. The randomized conditions are as follows:
            <ul>
              <li>360° colored video with spatial audio </li>
              <li>360° colored video with mono audio </li>
              <li>360° colored video with mute audio </li>
              <li>360° grayscale video with spatial audio </li>
              <li>360° grayscale video with mono audio </li>
              <li>360° grayscale video with mute audio </li>
            </ul>
            Finally, each observer filled out a questionnaire about their demographic information, 
            their experience with 360° videos, and their experience with video games.
            For more information, please refer to our research paper.
          </p>
          <p>
            <b>Paper link and information will be put here, once published.</b>
          </p>
        </div>

        { this.props.children }
      </div>
    );
  }
}
