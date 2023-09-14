import Component from "inferno-component";

const styles = {
  container: {
    margin: '0 8px',
  },
  title: {

  },
  buttonGroup: {

  },
  button: {

  },
  buttonSelected: {
    filter: 'brightness(0.8)'
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
  }

  render() {
    return (
      <div style={styles.container}>
        <h4 style={styles.title}>{this.props.title}</h4>
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
      </div>
    )
  }
}