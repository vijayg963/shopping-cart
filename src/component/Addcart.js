import React from 'react';

class Addcart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
  }
  handleDisplay = () => {
    this.setState({
      display: true,
    });
  };
  handleClose = () => {
    this.setState({
      display: false,
    });
  };

  alertTotal = (activeItem) => {
    let total =
      activeItem.length > 0
        ? activeItem
            .reduce((acc, cv) => acc + cv.quantity * cv.price, 0)
            .toFixed(2)
        : null;
    return alert(`Total amount is ${total}`);
  };

  render() {
    let activeItem = this.props.shoppingBeg;
    console.log(activeItem);
    return (
      <div className='addCart'>
        <div onClick={this.handleDisplay} className='beg-logo'>
          <img src={`/static/bag-icon.png`} alt='beg' />
          <span className='circle count'>{activeItem.length}</span>
        </div>
        <div className={this.state.display ? 'addCart-box' : 'hidden'}>
          <span onClick={this.handleClose} className='close-button'>
            ❌
          </span>
          <section className='header'>
            <img src={`/static/bag-icon.png`} alt='beg' />
            <span className='circle count2'>{activeItem.length}</span>
            <span className='cart-name'>Cart</span>
          </section>
          <div className='cart-view'>
            {activeItem.map((item, key) => (
              <>
                <div key={key} className='beg-item-view flex-end'>
                  <div className='flex'>
                    <span>
                      <img src={`/static/products/${item.sku}_1.jpg`} alt='' />
                    </span>
                    <div className='details'>
                      <span>{item.title}</span>
                      <p className='style-color'>{item.style}</p>
                      <span>Quantity: {item.quantity}</span>
                    </div>
                  </div>
                  <span className='price-quantity'>
                    <p className='deletItem' onClick={this.props.handleDelete}>
                      ❌
                    </p>
                    <p className='mrp'>
                      $ {(item.price * item.quantity).toFixed(2)}
                    </p>
                    <span>
                      <span
                        onClick={() => this.props.handleDecrement(item.id)}
                        className='btn'
                      >
                        -
                      </span>
                      <span
                        onClick={() => this.props.handleIncrement(item.id)}
                        className='btn'
                      >
                        +
                      </span>
                    </span>
                  </span>
                </div>
              </>
            ))}
          </div>
          <div className='subtotal'>
            <div className='flex-end'>
              <span>SUBTOTAL : </span>
              <span>
                <p>
                  {activeItem.length > 0
                    ? activeItem
                        .reduce((acc, cv) => acc + cv.quantity * cv.price, 0)
                        .toFixed(2)
                    : null}
                </p>
              </span>
            </div>
            <button
              onClick={() => this.alertTotal(activeItem)}
              className='total-bill'
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Addcart;
