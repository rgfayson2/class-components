import React,{useState,useEffect} from 'react';

export default function 
FunctionalComponent({passCount}) {

    const [count,setCount] = useState(passCount)
    const [coffee,setCoffee] = useState([])

    useEffect(()=> {

        let url = "https://api.sampleapis.com/coffee/hot"
        fetch(url)
        .then(res=> res.json())
        .then(data => {
            // do something with data
            setCoffee(data)
        })

    },[])


    return (
        <>
         <h1> this is a functional component {count}</h1>
         <button onClick={()=> {
                setCount(count+1)
         }}>add one</button>
            {/* map through coffee */}
            {coffee.map(
                coffee => 
                <h1 key={coffee.id}>{coffee.title}</h1>
            )}
        </>
    )
}

//export default FunctionalComponents