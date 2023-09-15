import Component from "inferno-component";
import ButtonGroup from "./ButtonGroup";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    position: 'sticky',
    backgroundColor: '#e5e5e5',
    width: '100%',
    zIndex: 99999998,
    paddingTop: 12,
    paddingBottom: 12,
    boxShadow: '0 2px 4px -3px #444',
  },

}

const eye_types = [
  {
    label: 'Fixation',
    value: 'Fixation'
  },
  {
    label: 'Gaze',
    value: 'Gaze'
  },
]

const color_conditions = [
  {
    label: 'Colored',
    value: 'colored'
  },
  {
    label: 'Grayscale',
    value: 'grayscale'
  },
]

const audio_types = [
  {
    label: 'Music Instrument',
    value: 'music'
  },
  {
    label: 'Human Speech',
    value: 'human_speech'
  },
  {
    label: 'Vehicle Sound',
    value: 'vehicle'
  },
]

const scene_types = [
  {
    label: 'Indoors',
    value: 'inside'
  },
  {
    label: 'Outdoors (Manmade)',
    value: 'outside_man-made'
  },
  {
    label: 'Outdoors (Natural)',
    value: 'outside_natural'
  }
]

export default class FilterBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container} class="filter-bar">
        <ButtonGroup title='Eye Type' name='eye_type' options={eye_types} filter={this.props.filter} setFilter={this.props.setFilter} isRequired />
        <ButtonGroup title='Color Condition' name='color_condition' options={color_conditions} filter={this.props.filter} setFilter={this.props.setFilter} />
        <ButtonGroup title='Audio Type' name='audio_type' options={audio_types} filter={this.props.filter} setFilter={this.props.setFilter} />
        <ButtonGroup title='Scene Type' name='scene_type' options={scene_types} filter={this.props.filter} setFilter={this.props.setFilter} />
      </div>
    )
  }
}