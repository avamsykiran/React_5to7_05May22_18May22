import { useEffect, useState } from "react";

const Counter2 = props => {

    let [count,setCount] = useState(0);
    let [rounds,setRounds] = useState(0);

    useEffect(()=> {
        setCount(1);
    },[]);

    useEffect(()=>{
        if(count==10){
            setRounds(rounds+1);
            setCount(0);
        }
    },[count])

    return (
        <div className="p-4">
            <span className='m-2'><strong> Count: {count} </strong></span>
            <span className='m-2'><strong> Rounds: {rounds} </strong></span>

            <button
                className='btn btn-sm btn-primary m-2'
                onClick={e => setCount(count+1)} >
                UP
            </button>
        </div>
    );
};

export default Counter2;