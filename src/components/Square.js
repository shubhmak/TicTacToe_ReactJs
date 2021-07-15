import React from 'react'

const Square = ({v,oc,bg,ln,idd}) => {
  //  const [iswin,setiswin] = useState(ln);
    console.log(ln);  
    console.log("idd: "+idd);
    //const iswin = ln ?idd in ln : false;
    const iswin = ln ? ln.includes(idd) : false;
    return (
        <>
             <button style={{'backgroundColor':iswin?'#8E44AD ' : bg}} type = "button" onClick={oc} >{v?v:'.'}</button>
        </>
    )
}

export default Square
