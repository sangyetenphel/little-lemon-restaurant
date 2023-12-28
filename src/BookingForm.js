import noPets from './assets/images/no-pets.png';
import noAlcohol from './assets/images/no-alcohol.png';
import noSmoking from './assets/images/no-smoking-sign.png';
import noCredit from './assets/images/credit-card.png';
import dateIcon from './assets/images/date.png';
import timeIcon from './assets/images/time.png';
import peopleIcon from './assets/images/people.png';
import occassionIcon from './assets/images/occassion.png';
import message from './assets/images/conversation.png';
import email from './assets/images/mail.png';
import { useState } from 'react';

function BookingForm(props) {
    const [date, setDate] = useState('');
    const [people, setPeople] = useState(1);
    const [occassion, setOccassion] = useState('Birthday');

    const handleDateChange = (e) => {
        setDate(e.target.value);
        props.dispatch({date: e.target.value });
    }
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
                        <label htmlFor='res-date'>
                            <img src={dateIcon}/>
                        </label>
                            <input id='res-date' type="date" value={date} onChange={handleDateChange}/>
                            <label htmlFor='res-time'>
                                <img src={timeIcon} />
                            </label>
                            <select id='res-time' value={props.time} >
                                <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                                <option>22:00</option>
                            </select>
                    </div>
                    <div className='input-group'>
                       <label htmlFor='guests'>
                            <img src={peopleIcon} />
                        </label>
                        <input type='number' placeholder='1' min="1" max="10" id='guests' value={people} onChange={(e) => setPeople(e.target.value)}/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor='occassion'>
                            <img src={occassionIcon}/>
                        </label>
                        <select id='occassion' value={occassion} onChange={(e) => setOccassion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
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

export default BookingForm;