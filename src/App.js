import React from 'react';
// import Addcart from './component/Addcart';
import Header from './component/Header';
import Main from './component/Main';
import data from './data.json';
const size = ['S', 'M', 'L', 'X', 'XL', 'XXL'];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sizes: [],
    };
  }
  handleSize = (s) => {
    this.setState((preState) => {
      if (preState.sizes.includes(s)) {
        return { ...preState, sizes: preState.sizes.filter((e) => e !== s) };
      } else {
        return { ...preState, sizes: [...preState.sizes, s] };
      }
    });
  };
  render() {
    let filterSize = data.products.filter((item) =>
      item.availableSizes.find((s) => this.state.sizes.includes(s))
    );
    return (
      <div className='App'>
        <Header />
        <div className='container'>
          <div className='aside'>
            {size.map((s) => (
              <span
                key={s}
                className={
                  this.state.sizes.includes(s) ? 'active-size circle' : 'circle'
                }
                onClick={() => this.handleSize(s)}
              >
                {s}
              </span>
            ))}
          </div>
          <Main filterSize={filterSize} data={data.products} />
        </div>
      </div>
    );
  }
}

export default App;
