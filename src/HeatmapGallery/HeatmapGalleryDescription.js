import Component from "inferno-component";

export class HeatmapGalleryDescription extends Component {
  render() {
    return (
      <div>
        <h2>Heatmap Gallery</h2>
        <p>
          Below are heatmap overlayed video clips, filtered according to
          visualized eye tracking data (fixation or raw gaze), 
          color condition, audio type, and scene type. Heatmap color channels
          correspond to audio conditions. Red corresponds to ambisonics, 
          green corresponds to mono, and blue corresponds to mute. As an example,
          yellow spots mean that observers from both ambisonics and mono conditions
          looked at the same spot, but observers from the mute condition did not.
        </p>
      </div>
    );
  }
}