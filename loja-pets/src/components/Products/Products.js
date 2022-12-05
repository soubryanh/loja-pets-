import { images } from '../../constants';
import './Products.css';

function Products() {
  return (
    <>
      <div id='products'>
        <div className='section-title'> Produtos</div>
        <div className='section-content'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quam
          qui autem tempora fuga suscipit quo odio, velit harum, magnam
          provident totam. Reprehenderit reiciendis voluptas deleniti odit dolor
          atque quisquam.
        </div>
        <div className='section-products'>
          <div className='product-card'>
            <div className='product-img'>
              <img src={images.shapoo} alt='produto' />
            </div>
            <p>
              <b>Produto Pet #1</b>
            </p>
            <p>R$150,00</p>
            <button>
              <img
                className='footprint'
                src={
                  'https://static.vecteezy.com/system/resources/previews/009/344/670/original/dog-paw-free-png.png'
                }
                alt='footprint'
              />
              Comprar
            </button>
          </div>
          <div className='product-card'>
            <div className='product-img'>
              <img src={images.casa} alt='produto' />
            </div>
            <p>
              <b>Produto Pet #1</b>
            </p>
            <p>R$150,00</p>
            <button type='submit'>
              <img
                className='footprint'
                src={
                  'https://static.vecteezy.com/system/resources/previews/009/344/670/original/dog-paw-free-png.png'
                }
                alt='footprint'
              />
              Comprar
            </button>
          </div>
          <div className='product-card'>
            <div className='product-img'>
              <img src={images.comida} alt='produto' />
            </div>
            <p>
              <b>Produto Pet #1</b>
            </p>
            <p>R$150,00</p>
            <button>
              <img
                className='footprint'
                src={
                  'https://static.vecteezy.com/system/resources/previews/009/344/670/original/dog-paw-free-png.png'
                }
                alt='footprint'
              />
              Comprar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
