
function Student() {
  
  let  studentsArray = [{"sid": "1", "sname": "Shravan", "course": "HTML", "age": 22, "total": 97 }, 
                      {"sid": "2", "sname": "Ankeet", "course": "CSS", "age": 22, "total": 98 }, 
                      {"sid": "3", "sname": "Evin", "course": "JavaScript", "age": 21, "total": 99 }, 
                      {"sid": "4", "sname": "Mithalii", "course": "React", "age": 23, "total": 100 }];

  return (
    
    <>
    <table border="2" cellPadding="5" cellSpacing="0">
        <thead>
            <tr>
                <th>sid</th>
                <th>sname</th>
                <th>course</th>
                <th>age</th>
                <th>total</th>
            </tr>

            {studentsArray.map(item => 
            <tr key={item.sid}>
                <td>{item.sid}</td>
                <td>{item.sname}</td>
                <td>{item.course}</td>
                <td>{item.age}</td>
                <td>{item.total}</td>
                </tr>
            
            )}
  
        </thead> 
    </table>
    </>


)}

export default Student;
