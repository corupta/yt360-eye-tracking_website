/* eslint inferno/jsx-no-bind: 0 */
import Component from 'inferno-component';

import { filterToUrl } from '../Functional/FilterUrl';
import { eqObj } from '../../Globals';
import TagFilter from './TagFilter';
import browserHistory from '../../History';

const myStyle = {
};

const searchBarStyle = {
  background: '#d3e2f0',
  border: '1px #0b4c62 ridge',
  color: '#0e5b74',
  fontSize: 10,
  height: 12,
  marginBottom: 8,
  maxWidth: 'calc(100% - 6px)',
  overflow: 'hidden',
  padding: '2px 2px',
  textAlign: 'center',
  WebkitTextFillColor: '#0e5b74',
  width: 116
};

const filterBtnStyle = {
  background: '#b4d9e0',
  borderColor: '#151250',
  borderRadius: 16,
  borderWidth: 2,
  fontSize: 12,
  fontWeight: 'bold',
  letterSpacing: 1,
  marginTop: 2,
  padding: '4px 48px'
};

const radioGroupStyle = {
  fontSize: 10,
  fontWeight: 'bold',
  letterSpacing: 0.5
};

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.setTagValue = this.setTagValue.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.tagValue = [];
    // this.intersectOrUnion = this.props.filter.intersectOrUnion;
    console.log('cons');
  }
  componentDidMount() {
    this.resetRadioBtn();
  }
  shouldComponentUpdate(nextProps) {
    if (eqObj(this.props.filter, nextProps.filter)) {
      return false;
    }
    return true;
  }
  componentDidUpdate() {
    this.resetRadioBtn();
  }
  setTagValue(newTagValue) {
    this.tagValue = newTagValue;
  }
  handleFilter() {
    const newFilter = {};
    newFilter.search = document.getElementById('searchBar').value;
    newFilter.isFixation = !document.getElementById('fixation').checked;
    console.log('tagValue', this.tagValue);
    newFilter.tags = this.tagValue;
    const uri = `/galleries/${this.props.gallery}/${filterToUrl(newFilter)}`;
    browserHistory.push(uri);
  }
  handleEnter(e) {
    console.log('e', e);
    if (e.key === 'Enter') {
      this.handleFilter();
    }
  }
  handleSearchChange(e) {
    document.getElementById('searchBar').value = e.target.value;
  }
  resetRadioBtn() {
    document.getElementById('fixation').checked = this.props.filter.isFixation;
    document.getElementById('gaze').checked = !this.props.filter.isFixation;
  }
  render() {
    const topElem = (
      <input
        id='searchBar'
        onChange={ this.handleSearchChange }
        onKeyPress={ this.handleEnter }
        style={ searchBarStyle }
        type='text'
        placeholder='Enter text to search.'
        value={ this.props.filter.search }
      />
    );
    const botElem = (
      <div style={ radioGroupStyle }>
        <input
          name='a'
          type='radio'
          id='fixation'
        />
        Heatmaps from Eye Fixation
        <br />
        <input
          name='a'
          type='radio'
          id='gaze'
        />
        Heatmaps from Eye Gaze
      </div>
    );
    return (
      <div style={ myStyle }>
        <TagFilter
          setTagValue={ this.setTagValue }
          tagCodes={ this.props.filter.tags }
          topElem={ topElem }
          botElem={ botElem }
        />
        <button
          onClick={ this.handleFilter }
          style={ filterBtnStyle }
        >
          Filter Results
        </button>
      </div>
    );
    /*
    return (
      <div style={ myStyle }>
        <div style={ filterGroupStyle }>
          <input
            id='searchBar'
            onChange={ this.handleSearchChange }
            onKeyPress={ this.handleEnter }
            style={ searchBarStyle }
            type='text'
            placeholder='Enter text to search.'
            value={ this.props.filter.search }
          />
          <TagFilter setTagValue={ this.setTagValue } tagCodes={ this.props.filter.tags } />
          <input
            name='a'
            type='radio'
            id='intersect'
          />
          Intersection of Tags
          <br />
          <input
            name='a'
            type='radio'
            id='union'
          />
          Union of Tags
        </div>
        <button onClick={ this.handleFilter } style={ filterBtnStyle }>Filter Results</button>
      </div>
    );
    */
  }
}

/*
gallery: str
filter: {
  search: str,
  intersectOrUnion: bool,
  tags: []
}
 */
