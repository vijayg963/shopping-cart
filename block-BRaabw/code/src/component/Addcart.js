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
            {activeItem.map((item) => (
              <>
                <div className='beg-item-view flex-end'>
                  <div className='flex'>
                    <span>
                      <img src={`/static/products/${item.sku}_1.jpg`} alt='' />
                    </span>
                    <div className='details'>
                      <span>{item.title}</span>
                      <p>{item.style}</p>
                      <span>Quantity: {item.quantity}</span>
                    </div>
                  </div>
                  <span className='price-quantity'>
                    <p className='mrp'>$ {item.price}</p>
                    <span>
                      <span className='btn'> - </span>
                      <span className='btn'>+</span>
                    </span>
                  </span>
                </div>
                <div className='subtotal'>
                  <div className='flex-end'>
                    <span>SUBTOTAL</span>
                    <span>
                      <h2>{item.price}</h2>
                      <p>
                        {item.quantity === 0
                          ? ''
                          : `${item.quantity} + ' ' + '*'`}
                        {/* {item.price} */}
                      </p>
                    </span>
                  </div>
                  <button onClick={this.displayTotal} className='total-bill'>
                    Checkout
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Addcart;
