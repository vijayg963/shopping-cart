import React from 'react';
import Card from './Card';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
  }
  handleSelect = () => {
    this.setState({});
  };
  handledata = (event) => {
    let selectedOption = event.target.value;
    this.setState({ selected: selectedOption });
  };
  render() {
    return (
      <div className='main'>
        <div className='selector'>
          <h3 className='countProduct'>
            {this.props.filterSize.length
              ? this.props.filterSize.length + '/'
              : ''}
            {this.props.data.length} Products Found
          </h3>
          <select value={this.state.selected} onChange={this.handledata}>
            <option value=''>Select</option>
            <option value='lowest'>Lowest to highest</option>
            <option value='highest'>Highest to lowest</option>
          </select>
        </div>

        <Card
          selected={this.state.selected}
          data={this.props.data}
          filterSize={this.props.filterSize}
        />
      </div>
    );
  }
}

export default Main;
