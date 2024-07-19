
import {useState} from "react"
function Hook2(){
    console.log("hook 2")
    const [number,setNumber]=useState(10);
    function handle_number_up(){
        setNumber(number+10)
    }

    return (
        <div>
            <h1>tìm hiểu hook</h1>
            <p>numner {number}</p>
            <button onClick={handle_number_up}>number up</button>
        </div>
    )
}
export default Hook2