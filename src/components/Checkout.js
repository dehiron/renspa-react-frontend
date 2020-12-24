import './Style.css'

function Checkout(props){


    const handleClick = () => {
        props.history.push("/")
    }

    return (
    <div className="ui container" id="container">
        
        
            <h1 className="title_message">Thank you!</h1>
            <h2 className="title_message">お客様のご予約が完了いたしました。</h2>
            <h2 className="title_message"> 宛に詳細メールを送りしましたのでご確認ください。</h2>

            <h2 className="title_message"> Enjoy!</h2>

            <button className="back-to-home" onClick={handleClick}>Homeに戻る↩︎</button>
    </div>
        
    );
}

export default Checkout;


