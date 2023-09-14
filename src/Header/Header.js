import Component from 'inferno-component';

import HeaderLink from './HeaderLink';

const logoStyle = {
  maxWidth: '128px',
  maxHeight: '128px'
};

const links = [
  {
    name: 'Bogazici University',
    imgUrl: '/assets/logos/bogazici_university.svg',
    url: 'https://boun.edu.tr/en-US/Index',
    imgStyle: {
      height: 'calc(2.4vw + 18px)',
    }
  },
  {
    name: 'Koc University',
    imgUrl: '/assets/logos/koc_university.svg',
    url: 'https://www.ku.edu.tr/en/',
  },
  {
    name: 'Hacettepe University',
    imgUrl: '/assets/logos/hacettepe_university.svg',
    url: 'https://www.hacettepe.edu.tr/english',
  },
  {
    name: 'Bogazici University Virtual Reality Laboratory',
    imgUrl: '/assets/logos/buviar_lab.png',
    url: 'http://buviar.boun.edu.tr/',
  },
  {
    name: 'Koc University & Is Bank Artificial Intelligence Center',
    imgUrl: '/assets/logos/kuis_ai_lab.png',
    url: 'https://ai.ku.edu.tr/',
  }
];

const myStyle = {
  background: '#F0F0F0',
  boxShadow: '0 2px 4px -3px #444',
  paddingTop: 4,
  position: 'sticky',
  textAlign: 'center',
  top: - 1,
  zIndex: 99999999,
};

const listStyle = {

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  flexDirection: 'row',
  
  fontSize: 'calc(0.8vw + 10px)',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

export default class Header extends Component {
  render() {
    console.log('Header', this.params);
    return (
      <div style={ myStyle }>
        <ul style={ listStyle }>
          { links.map((link, i) => {
            return <HeaderLink key={ link.url } { ...link } isFirst={ i === 0 } />;
          })}
        </ul>
      </div>
    );
  }
}
