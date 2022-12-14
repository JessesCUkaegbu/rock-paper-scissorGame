import React from "react";


export default function Body(){
    return(
        <>
           <div className="scoreboard">
             <div id="user_label" className="badges">user</div>
             <div id="comp_label" className="badges">comp</div>
             <span>0</span>:
             <span>0</span>
           </div>

           <div className="result">
                <h3>Paper cover rock. You Win!</h3>
             </div>

             <div className="choices">
                <div className="choice">
                    <img src="" alt=""></img>
                </div>
                <div className="choice">
                    <img src="" alt=""></img>
                </div>
                <div className="choice">
                    <img src="" alt=""></img>
                </div>
             </div>

             <p className="message">Make your Move</p>
        </>
    )
}