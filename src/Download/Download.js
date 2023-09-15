import Component from 'inferno-component';

const styles = {
  pre: {
    // backgroundColor: '#e0e0e0',
    fontSize: 10,
  }
}

export default class Download extends Component {
  render() {
    return (
      <div>
        <h2>Download</h2>
        <ol>
          <li>
            <b>Original Video Clips:</b>
            {' '}
            Download youtube video ids, and segment start timestamps from <a href="#">here</a>. 
            Using that, you can download the original video clips and audios from youtube and extract 30 second clips.
            For this purpose
            {' '}
            <a 
              href="https://github.com/yt-dlp/yt-dlp" 
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              @yt-dlp/yt-dlp
            </a>
            {' '}
            or any similar tool can be used. In order to fix audio of two videos, use below command after downloading them:
            <pre style={styles.pre}>
              {'ffmpeg -i c-tL8nt3Nak-280.wav -af "pan=4C|c0=c0|c1=-1*c3|c2=c2|c3=c1" -f wav fixed/c-tL8nt3Nak-280.wav\n'}
              {'ffmpeg -i Y8ujvRbuZUU-112.wav -af "pan=4C|c0=0.5*c0|c1=0.5*c3|c2=0.5*c1|c3=0.5*c2" -f wav fixed/Y8ujvRbuZUU-112.wav'}
            </pre>
          </li>
          <li>
            <b>Semantic Segmantation Data:</b>
            {' '}
            Download semantic segmantation data from <a href="#">here</a>. 
            These are created via joining 10 second segments for target clips from the original YT-360 dataset. 
            For more information about the semantic segmantation data content, please refer to their
            {' '}
            <a 
              href="https://pedro-morgado.github.io/AVSpatialAlignment/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              website 
            </a>
            {' '}
            and 
            {' '}
            <a
              href="https://doi.org/10.48550/arXiv.2011.01819"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              research paper
            </a>
            .
          </li>
          <li>
            <b>Eye Gaze Data per frame:</b>
            {' '}
            Download eye gaze data per frame from <a href="#">here</a>.
          </li>
          <li>
            <b>Eye Fixation Data per frame:</b>
            {' '}
            Download eye fixation data per frame from <a href="#">here</a>.
          </li>
          <li>
            <b>Eye Fixations per observer:</b>
            {' '}
            Download eye fixations per observer from <a href="#">here</a>.
          </li>
          <li>
            <b>Observer Demographics:</b>
            {' '}
            Download observer demographic metadata from <a href="#">here</a>.
          </li>
          <li>
            <b>Observer Questionnaire:</b>
            {' '}
            Download observer questionnaire data from <a href="#">here</a>.
          </li>
          <li>
            <b>Video Metadata:</b>
            {' '}
            Download video metadata from <a href="#">here</a>.
          </li>
          <li>
            <b>Raw Eye Tracking Data:</b>
            {' '}
            Contact authors via email. Once processed, raw eye tracking data will be available for download.
          </li>

        </ol>
        <p>
          In case of any trouble obtaining the data, or required clarification of the data format, 
          please contact authors via email for further assistance.
        </p>
      </div>
    );
  }
}