import noPets from './assets/images/no-pets.png';
import noAlcohol from './assets/images/no-alcohol.png';
import noSmoking from './assets/images/no-smoking-sign.png';
import noCredit from './assets/images/credit-card.png';
import dateTime from './assets/images/calendar.png';
import people from './assets/images/people.png';
import message from './assets/images/conversation.png';
import email from './assets/images/mail.png';

function ReserveTable() {
    return (
        <>
            <div className="wrapper grey">
                <div className="content">
                    <div className="text-content">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                    </div>
                </div>
            </div>
            <div className='wrapper'>
                <h3>RESERVE A TABLE</h3>
                <div className='not-allowed'>
                    <img src={noPets} />
                    <img src={noAlcohol} />
                    <img src={noSmoking} />
                    <img src={noCredit} />
                </div>
                <form id='reserve-table-form'>
                    <div className='input-group'>
                        <label htmlFor='datetime'>
                            <img src={dateTime} />
                        </label>
                        <input id='datetime' type="text" placeholder='Date and time'></input>
                    </div>
                    <div className='input-group'>
                        <label>
                            <img src={people} />
                        </label>
                        <div className='input-wrapper'>
                            <input type="text" placeholder='Adults'></input>
                            <input type="text" placeholder='Teacher'></input>
                        </div>
                    </div>
                    <textarea placeholder='Special Requests'></textarea>
                    <div className='center'>
                        <h3>Confirmation & Reminder</h3>
                        <div className='communication'>
                            <img src={message} />
                            <img src={email} />
                        </div>
                        <button className="button">Continue</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ReserveTable;