/* eslint no-bitwise: 0 */
/* eslint inferno/jsx-boolean-value: 0 */
/* eslint inferno/jsx-no-bind: 0 */
import Component from 'inferno-component';
import { connect } from 'inferno-redux';

import { eqObj, perInt } from '../../Globals';
import LinkedList from '../Functional/LinkedList';

const mainStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 8,
  textAlign: 'left'
};

const leftBlockStyle = {
  display: 'inline-block',
  maxWidth: 'calc(50% + 16px)',
  verticalAlign: 'top',
  width: 122
};

const selectStyle = {
  display: 'block',
  marginBottom: 4,
  width: 122
};

const selectedTagListStyle = {
  background: '#c5d3f0',
  boxShadow: '0 0 8px -1px #135',
  display: 'inline-block',
  marginLeft: 'auto',
  minHeight: 'calc(100% - 4px)',
  minWidth: 100,
  textAlign: 'center',
  verticalAlign: 'top',
  width: 'calc(100% - 144px)'
};

const selectedTagHeaderStyle = {
  display: 'block',
  fontSize: 14,
  fontWeight: 'bold',
  margin: 4
};

const tagStyle = {
  background: '#bfc7ff',
  border: '2px #3a3f74 groove',
  borderRadius: 6,
  display: 'inline-block',
  fontSize: 10,
  fontWeight: 'bold',
  letterSpacing: 0.4,
  margin: '1px 2px',
  padding: '1px 2px'
};

const tagButtonStyle = {
  background: '#313562',
  border: 'none',
  borderRadius: 3,
  color: '#ddd',
  display: 'inline-block',
  fontSize: 8,
  fontWeight: 'bold',
  marginRight: 1.5,
  padding: '1px 3px',
  verticalAlign: 'text-top'
};

class TagFilterView extends Component {
  constructor(props) {
    super(props);
    console.log('cons');
    this.listOfTags = new LinkedList();
    this.addSelected = this.addSelected.bind(this);
    this.removeSelected = this.removeSelected.bind(this);
    this.initTagCodes = this.initTagCodes.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.initTagCodes(this.props.tagCodes);
  }
  shouldComponentUpdate(/* nextProps */) {
    /*
    if (!eqObj(this.props.tagCodes, nextProps.tagCodes)) {
      this.initTagCodes(nextProps.tagCodes);
      return true;
    }
    */
    return false;
  }
  addSelected(tagId) {
    this.tagCodes[Math.floor(tagId / perInt)] |= 1 << tagId % perInt;
    console.log('before select', this.listOfTags.getLen());
    this.tagSituations[tagId] = this.listOfTags.push(tagId);
    console.log('after select', this.listOfTags.getLen());
    this.forceUpdate();
  }
  removeSelected(tagId) {
    this.tagCodes[Math.floor(tagId / perInt)] -= 1 << tagId % perInt;
    this.listOfTags.remove(this.tagSituations[tagId]);
    this.tagSituations[tagId] = - 1;
    this.forceUpdate();
  }
  initTagCodes(tagCodes) {
    this.listOfTags.clear();
    this.tagCodes = [];
    this.tagSituations = [];
    for (let i = 0; i < this.props.tags.length; ++i) {
      this.tagSituations[i] = - 1;
    }
    for (let i = 0; i < this.props.tags.length; i += perInt) {
      this.tagCodes[Math.floor(i / perInt)] = 0;
    }
    this.tagCodes = [...tagCodes];
    this.props.setTagValue(this.tagCodes);
    for (let i = 0; i < this.props.tagCodes; ++i) {
      const baseTagId = i * perInt;
      let j = 0;
      let tmp = tagCodes[i];
      while (tmp) {
        if (tmp & 1) {
          this.tagSituations[baseTagId + j] = this.listOfTags.push(baseTagId + j);
        }
        tmp >>>= 1;
        ++j;
      }
    }
  }
  handleSelect() {
    const val = document.getElementById('mySelect').value;
    if (val !== '-1') {
      this.addSelected(parseInt(val, 10));
    }
  }
  render() {
    console.log('before render', this.listOfTags.getLen());
    return (
      <div style={ mainStyle }>
        <div style={ leftBlockStyle }>
          { this.props.topElem }
          <select id='mySelect' onChange={ this.handleSelect } style={ selectStyle }>
            <option selected disabled value='-1' />
            { this.props.tags.map((tag, i) => {
              return this.tagSituations[i] === - 1 && <option key={ tag.id } value={ i }>{ tag.name }</option>;
            })}
          </select>
          { this.props.botElem }
        </div>
        <div style={ selectedTagListStyle }>
          <span style={ selectedTagHeaderStyle }>Selected Tags</span>
          { this.listOfTags.iterate((tagId) => {
            return (
              <span key={ this.props.tags[tagId].id } style={ tagStyle }>
                <button onClick={ () => { this.removeSelected(tagId); } } style={ tagButtonStyle }>X</button>
                { this.props.tags[tagId].name }
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { ...ownProps, tags: state.data.tags };
}

const TagFilter = connect(mapStateToProps)(TagFilterView);

export default TagFilter;
