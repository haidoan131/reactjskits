
import {useState} from "react"
function Hook(){
    console.log("hook")
    const [count,setCount]=useState(1);
    function handle_count_up(){
            setCount(count+1)
    }

    return (
        <div>
            <h1>tìm hiểu hook</h1>
            <p>count {count}</p>
            <button onClick={handle_count_up}>count up</button>
        </div>
    )
}
export default Hook