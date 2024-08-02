import './style.scss'
import Heading from '../common/Heading';

function Contacts(props) {
    function submit(e) {
        e.preventDefault()
    }

    return (
        <div className='contacts'>
            <div id="contacts-wrapper">
                <div className="left">
                    <Heading size={1.5}>Контакты</Heading>
                    <div className='info'>
                        <h4>Задайте нам любой вопрос</h4>
                        <p>(202) 555-0123</p>
                    </div>
                    <div className='info'>
                        <h4>Электронная почта</h4>
                        <p>test123@gmail.com</p>
                    </div>
                    <div className='info'>
                        <h4>Юридический адрес</h4>
                        <p>1234 Innovation Blvd, Suite 500, Tech City, CA 90210, USA</p>
                    </div>
                </div>
                <div className="right">
                    <form onSubmit={submit}>
                        <input type="text" placeholder='Полное Имя' required />
                        <input type="email" placeholder='Email' required />
                        <input type="text" placeholder='Телефон' required />
                        <button className='submit-btn'>
                            Отправить
                        </button>
                    </form>
                </div>
            </div>

            <div className="maps">
                <div className="left">
                    <div id="map-1">
                        <h1>Map</h1>
                    </div>
                </div>
                <div className="right">
                    <div id="map-2">
                        <h1>Map</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
