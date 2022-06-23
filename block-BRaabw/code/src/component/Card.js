import React from 'react';
import Addcart from './Addcart';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addData: [],
      sortByValue: '',
    };
  }
  handleOrder = (item) => {
    this.setState((preState) => {
      if (this.productExist(item)) {
        return {
          ...preState,
          addData: preState.addData.map((x) =>
            x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
          ),
        };
      } else {
        return {
          ...preState,
          addData: [...preState.addData, { ...item, quantity: 1 }],
        };
      }
    });
  };
  productExist = (item) => {
    const len = this.state.addData.length;
    const items = this.state.addData;
    for (let i = 0; i < len; i++) {
      if (item.id === items[i].id) {
        return true;
      }
    }
    return false;
  };
  handledata = (sorted, data) => {
    let result = [...data];

    if (sorted === 'lowest') {
      result = data.sort((a, b) => a.price - b.price);
    } else if (sorted === 'highest') {
      result = data.sort((a, b) => b.price - a.price);
    }
    return data;
  };
  render() {
    let sorted = this.props.selected;
    let data = this.props.filterSize.length
      ? this.props.filterSize
      : this.props.data;
    const shoppingBeg = this.state.addData;
    const newData = this.handledata(sorted, data);
    return (
      <>
        <Addcart shoppingBeg={shoppingBeg} />
        <div className='card-parent'>
          {newData.map((item, i) => (
            <>
              <div key={i} className='card'>
                <div className='item-img'>
                  <span className='free-shiping'>
                    {item.isFreeShipping ? 'Free Shiping' : ''}
                  </span>
                  <img
                    src={`/static/products/${item.sku}_1.jpg`}
                    alt={item.sku}
                  />
                </div>
                <h2>{item.title}</h2>
                <div className='flex'>
                  <div>
                    Size:-
                    {item.availableSizes.map((e, i) => (
                      <span key={i}>{e},</span>
                    ))}
                  </div>
                  <p className='price-tag'>
                    {item.currencyFormat} <strong>{item.price}</strong>
                  </p>
                </div>
                <button
                  onClick={() => this.handleOrder(item)}
                  className='Add-cart'
                >
                  Add to cart
                </button>
              </div>
            </>
          ))}
        </div>
      </>
    );
  }
}

export default Card;
