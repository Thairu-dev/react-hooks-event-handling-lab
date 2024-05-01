// Code Keypad Component Here

function Keypad (){
    function handleChange(){
        console.log("Entering password...");
    }
    return (
        <div>
            <input 
            type="password"
            onChange={handleChange} >
            </input>
        </div>
    )
}

export default Keypad;