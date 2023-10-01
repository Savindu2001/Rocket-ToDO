import React,{ useState} from 'react'
import { FaPlaneDeparture , FaPlaneArrival } from "react-icons/fa6";

function Home() {

//  task state

 const  [tasks, setTasks]= useState([]);
 

// user input task(rockets)

const [inputTask, setInputTask]= useState('');

// add rocket

const addNewTask= (title) =>{

    if(title!==""){
        // last id
        const lastId = tasks.length === 0 ? 0 :  tasks[tasks.length -1 ].id;
        const newTask ={id: lastId + 1 , title: title, completed: false};
        setTasks([...tasks, newTask]);
        setInputTask("");

    }
}


// remove rocket

const removeTask = (id) => {
  setTasks((prevTask)=>{
    return prevTask.filter((task)=> task.id !==  id);
  })
};

// Task Completed

const taskCompleted =(task)=>{
    setTasks(
                tasks.map((item)=>{
                    if(item.id === task.id){
                        return{...item, completed:true};
                    }
                    return item;
                })
            )
};



  return (
    <div>
        <h1 className=' text-4xl font-extrabold py-6'> Rocket ToDo </h1>
        <p className=" text-sm font-thin px-20">
            This is Rocket ToDo app and This app is not collecting your personal Data. Don't Worry about that.
        </p>
        {/* user can add a task what he wants */}

        <section className='flex flex-col justify-center items-center mt-3'>
            <input 
            type='text' 
            value={inputTask} 
            onChange={(e)=>setInputTask(e.target.value)} 
            placeholder='Add New Rocket Task..' 
            className=' border-2 border-red-600 p-2 m-2 w-60 rounded-md '/>
            <button 
            className=' bg-red-600 p-2 m-2 w-60 rounded-md text-white'
            onClick={() => addNewTask(inputTask)}> Add Rocket Task +</button>
        </section>

        {/* Show Rocket List */}
        <section className=' p-5 border-t-4 m-5'>
            {tasks && tasks.map((task) => {
            return (

                <div key={task.id} className='flex flex-row items-center justify-center'>

                    <p className={
                        task.completed ? "bg-green-900 rounded-md p-2 m-2 text-white" : "bg-purple-900 rounded-md p-2 m-2 text-white"
                    }
                    >
                        {task.completed ? task.title +"(Marked!)" :task.title}
                        </p>


                    <div

                    onClick={()=>{taskCompleted(task)}}

                    className=' mx-1 p-3 bg-green-600 rounded-md cursor-pointer text-white'
                    
                    >
                        <FaPlaneDeparture/>
                    </div>


                    <div
                    onClick={() => removeTask(task.id)}
                    className=' mx-1 p-3 bg-red-600 rounded-md cursor-pointer text-white'>
                    <FaPlaneArrival/>
                    </div>
                   
                </div>

            );
        })}
        </section>
    </div>
  )
}

export default Home;




