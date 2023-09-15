import Component from "inferno-component";
import { connect } from 'inferno-redux';
import Loading from "../Loading";

const styles = {
  container: {
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 0'
  },
  item: {
    backgroundColor: '#F8F8F8',
    boxShadow: '0 0 2px 0px #888',
    color: 'black',
    display: 'inline-block',
    margin: 8,
    width: '320px',
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  video: {
    width: '100%'
  },
  title: {
    margin: 8,
  },
  titleLink: {
    textDecoration: 'none',
    color: '#1e3a8a' // blue-900
  },
  tag: {
    border: '1px solid #ddd',
    display: 'inline-block',
    padding: '2px 4px',
    margin: '0 2px',
    borderRadius: 10,
    fontSize: 10,
  },
  tagContainer: {
    marginBottom: 8
  }
}

const color_condition_to_folder = {
  'colored': 'coarse4__videos-audios,videos-audios_mono,videos-audios_mute',
  'grayscale': 'coarse4__videos_mono-audios,videos_mono-audios_mono,videos_mono-audios_mute',
}

const constants = {
  heatmap_url_base: 'https://pub-4129ac557d5d4e52bad6ed033918d035.r2.dev',
  thumbnail_url_base: 'https://pub-4129ac557d5d4e52bad6ed033918d035.r2.dev/heatmap_thumbnails',
  youtube_url_base: 'https://youtube.com/watch'
}

const tag_to_color = {
  'Fixation': '#f0fdf4', //green-50
  'Gaze': '#eff6ff', //blue-50
  'grayscale': '#f9fafb', //gray-50
  'colored': '#fdf2f8', // pink-50
  'music': '#ecfdf5', //emerald-50
  'human_speech': '#fffbeb', //amber-50
  'vehicle': '#f5f3ff', //violet-50
  'inside': '#fff1f2', //rose-50
  'outside_natural': '#f7fee7', //lime-50
  'outside_man-made': '#f0f9ff', //sky-50
}

const tag_to_label = {
  'Fixation': 'Fixation',
  'Gaze': 'Gaze',
  'grayscale': 'Grayscale',
  'colored': 'Colored',
  'music': 'Music Instrument',
  'human_speech': 'Human Speech',
  'vehicle': 'Vehicle Sound',
  'inside': 'Indoors',
  'outside_natural': 'Outdoors (Natural)',
  'outside_man-made': 'Outdoors (Manmade)',
}

class SingleItem extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps) {
    return this.props.item !== nextProps.item || this.props.visible !== nextProps.visible;
  }

  render() {

    const { item, visible } = this.props;

    const thumbnail_url = `${
      constants.thumbnail_url_base
    }/${
      item.eye_type
    }/${
      color_condition_to_folder[item.color_condition]
    }/${
      item.youtube_id
    }-${
      item.youtube_ts
    }.png`;

    const heatmap_url = `${
      constants.heatmap_url_base
    }/${
      item.eye_type
    }/${
      color_condition_to_folder[item.color_condition]
    }/${
      item.youtube_id
    }-${
      item.youtube_ts
    }.mp4`;

    const youtube_url = `${
      constants.youtube_url_base
    }?v=${
      item.youtube_id
    }&t=${
      item.youtube_ts
    }`;

    const title = `View ${
      item.youtube_id
    } at ${
      item.youtube_ts
    }-${
      item.youtube_ts + 30
    } in YouTube`

    const tags = [
      item.eye_type,
      item.color_condition,
      item.audio_type,
      item.scene_type,
    ]

    return (
      <div style={styles.item} class={visible ? undefined : 'hidden'}>
        {/* <a 
          target="_blank"
          rel="noopener noreferrer nofollow"
          href={heatmap_url}
        >
          <img src={thumbnail_url} alt={title} style={styles.video} />
        </a> */}

        <video width="320" height="160" controls style={styles.video} poster={thumbnail_url} preload="none">
          <source src={heatmap_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h5 style={styles.title}>
          <a 
            target="_blank"
            rel="noopener noreferrer nofollow"
            href={youtube_url}
            style={styles.titleLink}
          >
            {title}
          </a>
        </h5>
        <div style={styles.tagContainer}>
          {tags.map((tag) => (
            <span 
              key={tag} 
              style={{
                ...styles.tag,
                backgroundColor: tag_to_color[tag],
              }}
            >
              {tag_to_label[tag]}
            </span>
          ))}
        </div>
      </div>
    )
  }
}

// TODO we might gain a small speedup by changing filtering logic.
class FilteredItems extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // if (this.props.loading) {
    //   return (
    //     <div style={styles.container}>
    //       <Loading />
    //     </div>
    //   )
    // }
    const { filter } = this.props;
    return (
      <div style={styles.container}>
        {
          this.props.items.map((item) => {
            let visible = true;
            if (filter.audio_type) {
              if (item.audio_type !== filter.audio_type) visible = false;
            }
            if (filter.scene_type) {
              if (item.scene_type !== filter.scene_type) visible = false;
            }
            if (filter.color_condition) {
              if (item.color_condition !== filter.color_condition) visible = false;
            }
            if (filter.eye_type) {
              if (item.eye_type !== filter.eye_type) visible = false;
            }
            return (
              <SingleItem 
                key={item.key} 
                item={item}
                visible={visible}
              />
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state.loading) {
    return { loading: true, items: [] };
  }
  return { loading: false, items: state.data.videos };
};

const FilteredItemsContainer = connect(mapStateToProps)(FilteredItems);

export default FilteredItemsContainer;