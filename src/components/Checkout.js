import './Style.css'

function Checkout(props){

    return (
    <div className="ui container" id="container">
        
        {/* <div className="title"> */}
            <h1 className="title_message">Thank you!</h1>
            <h2 className="title_message">お客様のご予約が完了いたしました。</h2>
            <h2 className="title_message"> 宛に詳細メールを送りしましたのでご確認ください。</h2>

            <h2 className="title_message"> Enjoy!</h2>

        {/* </div> */}

    </div>
        
    );
}

export default Checkout;


