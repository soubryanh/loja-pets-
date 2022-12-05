import { images } from '../../constants';
import './Header.css';

function Header() {
  return (
    <>
      <section id='header' className='app__header'>
        <img className='background' src={images.barbinha} alt='background' />
      </section>
    </>
  );
}

export default Header;
