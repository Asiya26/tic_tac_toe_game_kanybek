
import { useEffect, useState} from 'react'
import './App.css';

function App() {
  const [flag,setFlag] = useState(true)
  const [pathForX,setPathForX] = useState([])
  const [pathForO,setPathForO] = useState([])
  const [winner, setWinner] = useState("")
  const [matrix, setMatrix] = useState([


    {id:1,key:""},
    {id:2,key:""},
    {id:3,key:""},
    {id:4,key:""},
    {id:5,key:""},
    {id:6,key:""},
    {id:7,key:""},
    {id:8,key:""},
    {id:9,key:""},
  ])
  const handleClick = (clickedIndex) => {
    // console.log(clickedIndex)
    let newMatrix = [...matrix]
    if(flag){
      newMatrix[clickedIndex].key = "X"
      setMatrix(newMatrix)
      setFlag(!flag)
      setPathForX([...pathForX,clickedIndex+1])

    }else{
      newMatrix[clickedIndex].key = "O"
      setMatrix(newMatrix)
      setFlag(!flag)
      setPathForO([...pathForO,clickedIndex+1])
    }

    // let foundIndex = matrix.findIndex (i=> i.id === clickedID)
  }

const winningCombination=[
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7],
]

useEffect(()=>{

  for(let i of winningCombination){
    if (i.join("")===pathForO.join("")){
      console.log("O won the game")
      setWinner("O won the game")
    }
    if (i.join("")===pathForX.join("")){
      console.log("X won the game")
      setWinner("X won the game")

    }
  }
},[pathForO,pathForX])
 

  return (
    <div className="container">
      <div className='row'>
        {
          matrix.map((i, index)=>{
            return(
              <div className='col-sm-4 cell' onClick={()=>handleClick(index)}>{i.key}</div>
            )
          })

        }
      </div>
      <div className='row'>
        <div className="col">
          <h3>{winner}</h3>
        </div>

      </div>
    </div>
  );
}

export default App;
