import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './Style.css'
import axios from 'axios'


function Schedule(props) {

    const initialDate = new Date();
    const [startDate, setStartDate] = useState(new Date());
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numOfPeople, setNumOfPeople] = useState(""); 
    const [test, setTest] = useState("")


    let data = JSON.stringify({
        reservation: {
            name: name,
            email: email,
            startDate: startDate.toString().substring(0,15),
            time: time,
            numOfPeople: numOfPeople,
        }
    })

    const handleSubmit = () => {
        axios.post("https://renspa-rails-backend.herokuapp.com/send_mail",
            data,
            {headers:{"Content-Type" : "application/json"}},
            { withCredentials: true }
        ).then(props.history.push('/checkout'))
         .catch(error => {
            console.log("registration error", error)
        })
    }


    return (
      <div className="ui container" id="container">
        <form className="Search__Form" onSubmit={handleSubmit}>

        {/* タイトル */}
        <div className="title">
            <h1 className="title_message">予約フォーム</h1>
        </div>

        {/* 名前 */}
        <div className="cp_iptxt">
            <input type="text" placeholder="お名前(代表者様)" onChange={e => setName(e.target.value)}/>
        </div>

        {/* メール */}
        <div class="cp_iptxt">
            <input type="text" placeholder="E-Mail" onChange={e => setEmail(e.target.value)}/>
        </div>

        {/* 日付 */}
        <div className = "calendar">
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                inline
            />  
        </div>

        {/* 時間 */}
        <div className="cp_ipselect">
        <select class="cp_sl06" required onChange={e => setTime(e.target.value)}>
        <option value="hidden disabled selected"></option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
        </select>
        <span class="cp_sl06_highlight"></span>
        <span class="cp_sl06_selectbar"></span>
        <label class="cp_sl06_selectlabel">開始時間をお選びください</label>
        </div>


        {/* 人数 */}
        <div class="cp_ipselect">
        <select class="cp_sl06" required onChange={e => setNumOfPeople(e.target.value)}>
        <option value="hidden disabled selected"></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5~">5名以上</option>
        </select>
        <span class="cp_sl06_highlight"></span>
        <span class="cp_sl06_selectbar"></span>
        <label class="cp_sl06_selectlabel">来店人数をお選びください</label>
        </div>


        <div>
            <button 
                href="#" 
                class="btn-flat-double-border" 
            >予約を確定する</button>
        </div>
          
        </form>
      </div>
    );

}

export default Schedule;


