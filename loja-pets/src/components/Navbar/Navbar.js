import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <ul className='site-nav'>
          <li>
            <a href='#about'>
              <img
                className='footprint'
                src={
                  'https://static.vecteezy.com/system/resources/previews/009/344/670/original/dog-paw-free-png.png'
                }
                alt='footprint'
              />
              Sobre
            </a>
          </li>
          <li>
            <a href='#products'>
              <img
                className='footprint'
                src={
                  'https://static.vecteezy.com/system/resources/previews/009/344/670/original/dog-paw-free-png.png'
                }
                alt='footprint'
              />
              Produtos
            </a>
          </li>
          <li>
            <a href='#services'>
              <img
                className='footprint'
                src={
                  'https://static.vecteezy.com/system/resources/previews/009/344/670/original/dog-paw-free-png.png'
                }
                alt='footprint'
              />
              Serviços
            </a>
          </li>
          <li>
            <a href='#contact'>
              <img
                className='footprint'
                src={
                  'https://static.vecteezy.com/system/resources/previews/009/344/670/original/dog-paw-free-png.png'
                }
                alt='footprint'
              />
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
