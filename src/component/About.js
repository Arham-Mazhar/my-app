import React,{useState}from 'react'

export default function About() {
// let myStyle ={
//     color: 'white',
//     backgroundColor: 'black'
//     // width: '50%', marginLeft: '27%',border: '3px solid white'
// }
const [myStyle,setMystyle] = useState({
color:'black' ,
bacckgroundColor:'white'
})
const[btntext,setbtntext] = useState('Enable darak mode!');
const handledark=()=>{
if(myStyle.color ==='white'){
    setMystyle({
        color:'black' , backgroundColor:'white'
    })
    setbtntext("Enable Dark Mode");
}
else{
    setMystyle({
        color:'white' , backgroundColor:'black'
    })
    setbtntext("Enable Light Mode");
}
}

return (
    <div claaname="container" style={myStyle}>
        <h1>About Us</h1>
    <div className="accordion" id="accordionExample">
<div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
    </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
</div>
<div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
    </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
</div>
<div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
    </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
</div>
</div>
<button className="button btn btn-primary mx-1 my-3" value={btntext} onClick={handledark}>Enable dark mode</button>
    </div>
    
)
}
