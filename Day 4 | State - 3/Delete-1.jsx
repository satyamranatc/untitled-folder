import React,{useState} from 'react'
import "./App.css"
import Card from './Card'
export default function App() {

    let [Users,setUsers] = useState([]);

    function handleSubmit(e)
    {
        e.preventDefault();
    
        let UserDetails = {
            Id:e.target[0].value,
            Name:e.target[1].value,
            Age:e.target[2].value
        }


        let IdFound = false;
        for(let i of Users)
        {
            if(i.Id == UserDetails.Id)
            {
                IdFound = true;
                break;
            }
        }

        if(IdFound == false)
        {
            setUsers([...Users,UserDetails])
            e.target[0].value = ""
            e.target[1].value = ""
            e.target[2].value = ""
        }
        else
        {
            alert("Sorry Id Exists")
        }        
      
    }


    function deleteCard()
    {
        let Id = prompt("Enter Id to delete");
        let Arr = Users.filter((e,i)=>e.Id != Id);
        setUsers(Arr);
      
    }

  return (
    <div className='App'>

        <div id="Form">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" placeholder='Enter Your Id:' />
                <input type="text" placeholder='Enter Your Name:' />
                <input type="text" placeholder='Enter Your Age' />
                <br />
                <button id = "Btn" type='Submit'>Submit</button>
                <button onClick={()=>deleteCard()} className='deleteBtn' type='button' >Delete</button>

            </form>
        </div>

        <div id="ShowCase">
            <h2>List Of Users</h2>

            <div id="UserList">
                {
                    Users.map((e)=>(
                        <Card Id={e.Id} Name={e.Name} Age={e.Age}/>
                    ))
                }
            </div>
        </div>


    </div>
  )
}
