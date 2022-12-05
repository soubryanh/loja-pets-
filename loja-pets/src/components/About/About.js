import { images } from '../../constants';
import './About.css';

function About() {
  return (
    <>
      <main id='about'>
        <section className='about-section'>
          <div className='content-section'>
            <h2>Sobre nós</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
              dolore ullam necessitatibus adipisci ea nam atque consectetur vel.
              Modi, beatae ratione nam consectetur voluptatem animi amet quidem
              repudiandae officiis id! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Mollitia id assumenda dolor ex numquam ea eos
              libero dolorem laudantium deserunt fuga et commodi voluptatibus
              sequi expedita, blanditiis doloribus quisquam architecto?
            </p>
          </div>
          <aside className='image'>
            <img src={images.dogs} alt='dogs' />
          </aside>
        </section>
      </main>
    </>
  );
}

export default About;
