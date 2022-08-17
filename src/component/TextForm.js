import React,{useState} from 'react';
export default function TextForm(props) {
  const handupclick=()=>{
      console.log("Upper case was Clicked! ");
      let newtex= text.toUpperCase();
      settext(newtex); 
      props.showAlert('UpperCase',"success");         //place the old text to new text which is uppercase
  }
  const handloclick = ()=>{
    console.log("Clicked lowercase");
    let newtext=text.toLowerCase();
    settext(newtext); //place the old text to new text which is Lowercase
    props.showAlert('LowerCase',"success");  

  }
  const handlclick = ()=>{
    console.log("Clicked cleared");
    let newtext="";
    settext(newtext); //place the old text to new text which is Lowercase
    props.showAlert('Cleared Text',"success");  

  }
  const handleonchange = (event)=>{
      console.log("handle change!");
      settext(event.target.value);
  }
  let [text,settext] = useState('');
  return (
  <>
  
  <div>
    <div className="container my-22" style={{color:props.mode==="light"?"black":"white" ,marginTop: '20px',
  marginBottom: '19px'}}  >
  <h2 >
      {props.heading  }
  </h2>
  </div>
  <div className="mb-3">
<textarea className="form-control"  value={text} style={{backgroundColor:props.mode==="light"?"#dfd6d6":"white" , border: 'solid 3px black' , borderRadius: '15px'}} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button className="button btn btn-primary mx-1 " onClick={handupclick}>Convert to UpperCase</button>
  <button className="button btn btn-primary mx-1" onClick={handloclick}>Convert to LowerCase</button>
  <button className="button btn btn-primary mx-1" onClick={handlclick}>Clear</button>
</div>
<div className="container my-3" style={{color:props.mode==="light"?"black":"white"}}>
<h2 >
Summary
</h2>
<p>
Words {text.split(" ").length} Characters {text.length};
</p>
<p>
  Reading time : {0.008 * text.split(" ").length};
</p>
<div className="container my-3" style={{marginLeft: '-10px'}}>
<h2>Preview </h2>
<p>{text.length>0?text:"Enter Your Text in Above Textbox to Preview it"}</p>
</div>
</div>
</>
)
} 
