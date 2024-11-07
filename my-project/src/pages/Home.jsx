// eslint-disable-next-line no-unused-vars
import {React,useState} from 'react';

const Home = () => {
  const[students, setStudents] = useState([])
  fetch('http://127.0.0.1:8000/api/students')
  .then((res) => res.json())
  .then((data) => setStudents(data))
  .catch((error) => console.log("Error in fetching students",error));
  return (
    <>
    <h1 className='title'>Latest Students</h1>
    <table>
      <thead>
<tr>
  <td>First Name</td>
  <td>Last Name</td>
  <td>Grade ID</td>
</tr>
      </thead>
    
    {students.map((student) =>(
      <tbody>
        <tr key={student.id}>
          <td>{student.first_name}</td>
          <td>{student.last_name}</td>
          <td>{student.grade_id}</td>
        </tr>

      </tbody>
      
  
))}
</table>

    </>
   
  )
}

export default Home