import './ProductList.css'

function ProdList(props){

const prodCategory = [
    {"name":"Dell", "category":"laptop", "price":"75000", "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1200px-Dell_logo_2016.svg.png"},

    {"name":"Samsung", "category":"phone", "price":"35000", "img":"https://www.shutterstock.com/image-photo/kiev-ukraine-march-31-2015-260nw-270200051.jpg"},

    {"name":"HP", "category":"laptop", "price":"55000", "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png"},

    {"name":"Nokia", "category":"phone", "price":"48000", "img":"https://www.nokia.com/sites/default/files/styles/scale_720_no_crop/public/2022-03/NOKIA_LOGO_WHITE_HR.jpg"},

    {"name":"Asus", "category":"laptop", "price":"60000", "img":"https://thumbs.dreamstime.com/b/glowing-asus-rog-logo-gaming-laptop-miercurea-ciuc-romania-august-155994881.jpg"},

    {"name":"Apple", "category":"phone", "price":"87000", "img":"https://static.vecteezy.com/system/resources/previews/002/520/838/original/apple-logo-black-isolated-on-transparent-background-free-vector.jpg"},
]


let filteredArray = [];
        if(props.category == ""){
            filteredArray = prodCategory;
        }

        else if(props.category == "laptop"){
            filteredArray = prodCategory.filter((item) => item.category == "laptop");
        }

        else if(props.category == "phone"){
            filteredArray = prodCategory.filter((item) => item.category == "phone")
        }


    return(
        <>
        <div className="container">
        {filteredArray.map(item => 
            <>  
            <div className="innerBody">          
            <h2 className="body">{item.name}</h2>
            <img src={item.img} />
            <h4>Price: {item.price}</h4>
            </div>
            </>  
            ) }
        </div>
        </>
    )

}

export default ProdList;