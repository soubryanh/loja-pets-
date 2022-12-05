import { images } from '../../constants';
import './Services.css';

function Services() {
  return (
    <>
      <section id='services' className='services-section'>
        <div className='content-section'>
          <h2>Serviços</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dolore
            ullam necessitatibus adipisci ea nam atque consectetur vel. Modi,
            beatae ratione nam consectetur voluptatem animi amet quidem
            repudiandae officiis id! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Mollitia id assumenda dolor ex numquam ea eos
            libero dolorem laudantium deserunt fuga et commodi voluptatibus
            sequi expedita, blanditiis doloribus quisquam architecto?
          </p>
        </div>
        <aside className='image'>
          <img src={images.barbinhas} alt='dogs' />
        </aside>
      </section>
    </>
  );
}

export default Services;
