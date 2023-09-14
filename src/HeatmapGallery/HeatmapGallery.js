import Component from "inferno-component";
import FilterBar from "./FilterBar";
import FilteredItems from "./FilteredItems";

const styles = {
  container: {
    backgroundColor: '#f0f0f0',
  }
}

export default class HeatmapGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // search: "",
      eye_type: "Fixation",
      color_condition: null,
      audio_type: null,
      scene_type: null,
    }
    this.setState = this.setState.bind(this);
  }
  render() {
    return (
      <div style={styles.container}>
        <FilterBar filter={this.state} setFilter={this.setState} />
        <FilteredItems filter={this.state} />
      </div>
    );
  }

}
