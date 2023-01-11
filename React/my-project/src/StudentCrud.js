import { useState } from "react";

function StudentCrud() { 

    const  [stdArray, setStdArray]  =  useState([]);
    const [sid, setSid] = useState(0);
    const [sname, setSname] = useState("");
    const [course, setCourse] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");

    function  getStd_click()
    {
        let tempArray  = [     
            {  sid : 1, sname:"Ankeet", course : "HTML", age: 22, email: "ankeet@deloitee.com"},
            {  sid : 2, sname:"Mitalee", course : "CSS", age: 21, email: "mitalee@deloitte.com"},
            {  sid : 3, sname:"Evin", course : "JavaScript", age: 20, email: "evin@deloitte.com"},
            {  sid : 4, sname:"Shravan", course : "JQuery", age: 21, email: "shravan@deloitte.com"  }
        ];

        setStdArray( tempArray );
    }

    function  addStd_click()
    {
        let stdObj = {};
        stdObj.sid = sid; 
        stdObj.sname = sname; 
        stdObj.course = course; 
        stdObj.age = age; 
        stdObj.email = email; 

         let tempArray = [...stdArray];
         tempArray.push( stdObj );  
         
         setStdArray( tempArray );
    }

    function updateStd_click(){
        let tempArray = [...stdArray];

        let item = tempArray.find(item => item.sid === sid);
        item.sid = sid;
        item.sname = sname;
        item.age = age;
        item.course = course;
        item.email = email;

        setStdArray(tempArray);
    }

    function  deleteStd_click(sno)
    {
         let tempArray = [...stdArray];

         let index = tempArray.findIndex(item => item.sid == sno);
         tempArray.splice(index, 1);
         
         setStdArray( tempArray );
    }

    function  selectStd_click(sno)
    {
         let stdObj = stdArray.find(item => item.sid == sno);
         setSid(stdObj.sid);
         setSname(stdObj.sname);
         setCourse(stdObj.course);
         setAge(stdObj.age);
         setEmail(stdObj.email);
    }


    let result = stdArray.map( item => 
        <tr>
            <td> {item.sid}  </td>  
            <td> {item.sname}  </td>                
            <td> {item.course}  </td>  
            <td> {item.age}  </td>  
            <td> {item.email}  </td>  
            <td>
                <a href="javascript:void(0);"  onClick={() => deleteStd_click(item.sid)}>Delete</a> |
                <a href="javascript:void(0);"  onClick={() => selectStd_click(item.sid)}>Select</a>
            </td>
        </tr>);

  
  return (
      <>
          <h3>Student's Array</h3>
          <hr/>

          <input placeholder="Sid"  value={sid}  onChange={e => setSid(e.target.value)}  />
          <input placeholder="sname"  value={sname} onChange={e => setSname(e.target.value)}  />
          <input placeholder="course" value={course}  onChange={e => setCourse(e.target.value)}  />
          <input placeholder="age" value={age}  onChange={e => setAge(e.target.value)}  />
          <input placeholder="email" value={email}  onChange={e => setEmail(e.target.value)}  />
        <br/><br/>

          <input type="button" value="Get Std" onClick={getStd_click} />
          <input type="button" value="Add Std" onClick={addStd_click} />
          <input type="button" value="Update Std" onClick={updateStd_click} />
        <br/><br/>
          <table border="2"  width="500">
              <thead>
                <tr>
                    <th>Sid</th>
                    <th>Student Name</th>               
                    <th>Course</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>S/D</th>
                </tr>  
              </thead>

            <tbody>
                {result}
            </tbody>

            </table>

      </>   
  );
}

export default StudentCrud;