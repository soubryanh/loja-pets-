import './Contact.css';

function Contact() {
  return (
    <>
      <div className='contact-section' id='contact'>
        <form className='form' id='form'>
          <div className='form-control'>
            <input
              type='text'
              id='subject'
              name='subject'
              placeholder='Insira seu nome completo'
            />
          </div>
          <div className='form-control'>
            <input
              type='text'
              id='contact1'
              name='contact'
              placeholder='exemplo@teste.com'
            />
          </div>
          <div className='form-control'>
            <p>hola</p>
            <textarea
              id='message'
              name='message'
              placeholder='Assunto'
              style={{ height: 200 }}
            ></textarea>
          </div>
          <div>
            <a href='#d' className='custom-cta dark'>
              <button className='submit'>Get in touch</button>
            </a>
          </div>
        </form>
        <div className='maps'>
          <iframe
            title='google'
            src={
              'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14700.75667290777!2d-43.22588516983642!3d-22.906392499481363!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ef6e7cdb0f1%3A0x6d68626aa682c3a!2sBioParque%20do%20Rio!5e0!3m2!1spt-BR!2sco!4v1670244989693!5m2!1spt-BR!2sco'
            }
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
