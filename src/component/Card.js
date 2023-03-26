import React from 'react';
import Addcart from './Addcart';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addData: [],
      sortByValue: '',
      updateQuantity: 1,
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

  handleIncrement = (id) => {
    this.setState((prev) => {
      let upadetedCartIteam = prev.addData.map((p) => p.id === id ? { ...p, quantity: p.quantity + 1 } : p);
      return {
        addData: upadetedCartIteam,
      };
    });
  };

  handleDecrement = (id) => {
    this.setState((prev) => {
      let upadetedCartIteam = prev.addData.map((p) => p.id === id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p);
      return {
        addData: upadetedCartIteam,
      };
    });
  };

  handleDelete = (d) => {
    let upadetedCartIteam = this.state.addData.filter((elm) => { return elm.id !== d })
    this.setState({ addData: upadetedCartIteam })
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
    var result = [...data];
    if (sorted === "") {
      result = data
    }
    if (sorted === 'lowest') {
      result = data.sort((a, b) => a.price - b.price);
    }
    if (sorted === 'highest') {
      result = data.sort((a, b) => b.price - a.price);
    }
    return result;
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
        <Addcart
          shoppingBeg={shoppingBeg}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
        />
        <div className='card-parent'>
          {newData.map((item, i) => (
            <div key={i} className='card'>
              <div className='item-img'>
                {item.isFreeShipping &&
                  <span className='free-shiping'>
                    {item.isFreeShipping ? 'Free Shiping' : ''}
                  </span>}
                <img
                  src={`/static/products/${item.sku}_1.jpg`}
                  alt={item.sku}
                />
              </div>
              <h2>{item.title}</h2>
              <div className='flex'>
                <div>
                  Size:-
                  {item.availableSizes.map((e) => (
                    <span key={e}>{e},</span>
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
          ))}
        </div>
      </>
    );
  }
}

export default Card;
