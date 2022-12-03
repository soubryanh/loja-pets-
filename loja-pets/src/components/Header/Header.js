import './Header.css';
import { images } from '../../constants';

function Header() {
  return (
    <div className='Header'>
      <img src={images.background} alt='background' />
    </div>
  );
}

export default Header;
