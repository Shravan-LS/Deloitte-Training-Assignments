import './DoctorComponent.css';

function doctor_comp(){

    let docArray = [
        {"id":1 ,"src": "https://reqres.in/img/faces/1-image.jpg" ,"dname":"Patey Cruiser" , "profession": "Neurosurgeon", "rate":3},
        {"id":2 ,"src": "https://reqres.in/img/faces/2-image.jpg" ,"dname":"Mario Speedway" , "profession": "Cardiologist", "rate": 5},
        {"id":3 ,"src": "https://reqres.in/img/faces/3-image.jpg","dname":"Annasthesia Paul" , "profession": "Surgeon", "rate": 2},
        {"id":4 ,"src": "https://reqres.in/img/faces/4-image.jpg","dname":"Paul Shawn" , "profession": "Dentist", "rate": 1},
        {"id":5 ,"src": "https://reqres.in/img/faces/5-image.jpg","dname":"Anna Maul" , "profession": "ENT", "rate": 7},
        {"id":6 ,"src": "https://reqres.in/img/faces/6-image.jpg","dname":"Patey Parker" , "profession": "Eye Specialist", "rate": 3},
        {"id":7 ,"src": "https://reqres.in/img/faces/4-image.jpg","dname":"Emma Stain" , "profession": "Urologist", "rate": 4},
        {"id":8 ,"src": "https://reqres.in/img/faces/2-image.jpg","dname":"Gail Forcewind" , "profession": "Neurosurgeon", "rate": 3}]

    

return(
        <>
        <div className="outer">
            {docArray.map(item =>
                <div key={item.id}>
                    <div className="card">
                        
                        <img src={item.src}></img>
                        
                        <h2>{item.dname}</h2>
                        
                        {[...Array(item.rate)].map((item, index) =>
                        <img className="star" key={index} src="https://www.citypng.com/public/uploads/small/11659043903eyvtsezy4ggvxqpml1vm20llfrhutwvziycxyopxjeexufvl7arkm3fduk80kwyi2vuxie3ootphq1kvtyqibnzb58i3gylfrbz5.png"></img>
                        )}
                        
                        <h5>{item.profession}</h5>
                        
                        <button>Book Appoinment</button>
                    </div>
                </div>
                )}
            </div>
        </>
    )
}



export default doctor_comp;