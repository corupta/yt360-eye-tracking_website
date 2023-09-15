import Component from "inferno-component";

const styles = {
  container: {
    margin: '8px 8px',
    borderRadius: 4,
    border: '1px solid #888',
  },
  title: {
    color: '#444',
    margin: '4px 0',
  },
  buttonGroup: {

  },
  button: {

  },
  buttonSelected: {
    boxShadow:  'inset 0px 2px 4px #b5b5b5, inset 0px -2px 4px #ffffff',
    // border: '1px inset #e5e5e5',
  }
}

export default class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    const name = this.props.name;
    const { value } = e.target;
    if (this.props.filter[name] === value) {
      if (this.props.isRequired) return;
      this.props.setFilter({ [name]: null });
    } else {
      this.props.setFilter({ [name]: value });
    }
    e.preventDefault();
  }

  render() {
    return (
      <fieldset style={styles.container}>
        <legend style={styles.title}>{this.props.title}</legend>
        <div style={styles.buttonGroup} class="btn-group">
          {
            this.props.options.map(({ key, value, label }) => (
              <button 
                style={
                  this.props.filter[this.props.name] === value 
                    ? styles.buttonSelected 
                    : styles.button
                }
                type='button' 
                key={key} 
                onClick={this.handleButtonClick}
                value={value}
              >
                {label}
              </button>
            ))
          }
        </div>
      </fieldset>
    )
  }
}