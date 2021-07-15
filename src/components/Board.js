import React, {useState} from 'react'
import Square from './Square'
import $ from 'jquery'
const Board = () => {
const [result,setresult] =  useState(Array(9).fill(null));
const [isx,setisx] = useState(false);
const [line,setline] =useState([]);
const a=calculateWinner(result)?calculateWinner(result)[0]:calculateWinner(result);
const a1=calculateWinner(result)?calculateWinner(result)[1]:calculateWinner(result);
//const [wnner,setwnner] = useState(null)

   
    const oncl=(i)=>{
        console.log(isx? 'x':'y');
        $("#1").css("Color", "yellow");
        console.log(a1)
        //setisx(!isx);
        if(result[i])
        return;
        setresult( result.map((item,pos)=>{
         
            if(result[pos]|| a){
                 
                return item;
            }
            if(pos===i){
                //result[pos]=isx? 'x':'o';
                return isx? 'X':'O';

            } } ));
            setisx(!isx);


        
        //setwnner(calculateWinner(result));
        console.log(result)
        //console.log(wnner)
        
    }

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            
            console.log('winner : '+a+' is :'+ squares[a])
            
            return [squares[a],lines[i]];
          }
        }
        return null;
      }
      
    const renders=(i)=><Square id={i} oc={()=>oncl(i)} v={result[i]}  ln={a1} idd={i} bg={i in line?"#D6EAF8 ":'#D6EAF8 '} />

    
    //const a=calculateWinner(result);
    return (<><center>
        <div className="b" >
            <div>{renders(0)}{renders(1)}{renders(2)}</div>
            <div>{renders(3)}{renders(4)}{renders(5)}</div>
            <div>{renders(6)}{renders(7)}{renders(8)}</div>
            
            <div>{a?'winner is : '+ a +"!!!..Congrats "+ a+"!!":'current player is '+ (isx?"X":"O")}</div>

        </div></center></> 
    )
} 

export default Board
