import Component from 'inferno-component';

const myStyle = {
  background: '#F0F0F0',
  // height: 'calc(62px + 18vw)'
  padding: '1vw 0',
  textAlign: 'center'
};


// min 296, 185   300     1960  800    100 50  100 -> 56.25 1 -> 0.5625 vw
// 144px + 50 vw => 72px + 25vw
const imgStyle = {
  // height: 'calc(50px + 16vw)',
  maxWidth: '90%',
  maxHeight: '67vh',
  display: 'block',
  margin: '0 auto',
};

const logoStyle = {
  height: 36,
  margin: '0 12px',
  verticalAlign: 'middle',
  display: 'inline',
  borderRadius: 4,
}

const titleStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}

const subtitleStyle = {
  // textAlign: 'left',
  // maxWidth: 800,
  // margin: '0 auto 16px auto',
}

export default class TopHeader extends Component {
  render() {
    return (
      <div style={ myStyle }>
        <h1 style={titleStyle}>
          <img 
            src="/assets/logos/yt360-chosen-eye.png" 
            alt="YT360-Chosen-Eye Dataset" 
            title="YT360-Chosen-Eye Dataset"
            style={logoStyle} 
          />
          YT360-Chosen-Eye Dataset
        </h1>
        <h3 style={subtitleStyle}>
          A curated dataset of 360 degree video content with spatial audio, alongside eye-tracking data from observers of different conditions.
        </h3>
        <img 
          alt="YT360-Chosen-Eye Dataset"
          title="YT360-Chosen-Eye Dataset"
          src="/assets/collages/thumbnails_target_rows__en.png" 
          style={imgStyle} 
        />
      </div>
    );
  }
}
