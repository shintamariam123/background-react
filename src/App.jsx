
import { useState } from 'react';
import './App.css'
import { Stack,Button } from '@mui/material';

function App() {
 const [bgColor,setBgcolor] = useState("red")
const changeColor = (color) =>{ 
setBgcolor(color)
}

  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center  '>
      <div style={{width:'600px',height:'500px',backgroundColor:bgColor}} className=' p-3 rounded shadow  d-flex  flex-column justify-content-center align-items-center '>
        <h1 className='text-light fw-bolder mb-5'>Background Color Change</h1>
     
        <Stack direction="row" spacing={2}>
        <Button onClick ={() =>changeColor('blue')} style={{width:'85px',height:'48px',color:'black'}} className='bg-light' variant="contained">Blue</Button> 
        <Button onClick ={() =>changeColor('green')}style={{width:'85px',height:'48px',color:'black'}} className='bg-light' variant="contained">Green</Button> 
        <Button onClick ={() =>changeColor('purple')} style={{width:'85px',height:'48px',color:'black'}} className='bg-light' variant="contained">Purple</Button> 
        <Button onClick ={() =>changeColor('brown')} style={{width:'85px',height:'48px',color:'black'}} className='bg-light' variant="contained">Brown</Button> 
        </Stack>
       
      </div>
    </div>
      
    
  )
}

export default App
