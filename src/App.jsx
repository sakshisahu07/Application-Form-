// ============json server display data==========================================================================


import { useState,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
const App=()=>{
  const [mydata,setMydata]=useState([]);
  const loadData=()=>{
    let api="http://localhost:3000/student";
    axios.get(api).then((res)=>{
      console.log(res.data);
      setMydata(res.data);
    });
  }
  useEffect(()=>{
    loadData()
  },[])

  const ans=mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>

      </tr>
      </>
    )
  });

  return(
    <>
    <h1>Welcome to my app</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Rollno</th>
          <th> Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
    </>
  )
}
export default App;


