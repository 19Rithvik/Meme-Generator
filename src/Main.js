import React from "react";

export default function Main() {
    const [memess , func1] = React.useState([])
    const [changememe , func] = React.useState({
    toptext : "",
    bottomtext : "",
    imagegen : "https://i.imgflip.com/m78d.jpg"
})

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => func1(data.data.memes))
    },[])

    function getMemeImage() {
            const randomvar = Math.floor(Math.random() * memess.length)
            let ran = memess[randomvar].url
            func(fff => ({
                ...fff,
                imagegen: ran
            }))
    }

    function changetext(event){ 
       const {name,value} = event.target
       func(prevem => ({
        ...prevem,
        [name]: value
       }))
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    className="texts" 
                    type="text" 
                    placeholder="top-text"
                    name ="toptext"
                    value ={changememe.toptext}
                    onChange = {changetext}
                    />
                <input  
                    className="texts"  
                    type="text" 
                    placeholder="bottom-text"
                    name = "bottomtext"
                    value={changememe.bottomtext}
                    onChange = {changetext}
                    />
                <button className="buttons" onClick={getMemeImage}>Get a new meme image </button>
            </div>
            <div className="meme">
                <img src={changememe.imagegen} className="memesimage"/>
                <h3 className="meme-text top">{changememe.toptext}</h3>
                <h3 className="meme-text bottom">{changememe.bottomtext}</h3>
            </div>
            
        </main>
    )   
}