import React from "react";


import style from './style.css'

function App () {
  let data = [
    {
      id:1,
      head:'FREE',
      subHead:'$0/month',
      content:['✔ Single','✔ 50GB Storage','✔ Unlimited Public Projects','✔ Community Access','✕ Unlimited Private Projects','✕ Dicated Phone Support','✕ Free Subdomain','✕ Monthly status Reports']
    },
    {
      id:2,
      head:'PLUS',
      subHead:'$9/month',
      content:['✔ Single','✔ 50GB Storage','✔ Unlimited Public Projects','✔ Community Access','✔ Unlimited Private Projects','✔ Dicated Phone Support','✔ Free Subdomain','✕ Monthly status Reports']
    },
    {
      id:3,
      head:'PRO',
      subHead:'$49/month',
      content:['✔ Single','✔ 50GB Storage','✔ Unlimited Public Projects','✔ Community Access','✔ Unlimited Private Projects','✔ Dicated Phone Support','✔ Free Subdomain','✔ Monthly status Reports']
    }
  ]



return (
<div>

<div class="bgcolor coll  "></div>
    
    <div class="row mt-5">
    {data.map((value) =>  <div class="col size  ">
        <div class="card  mb-5 ms-2" >
            <div  class=" card-header text-center "> {value.head}<h1>{value.subHead}</h1> </div>
            <div class=" mt-5 ms-5">
              {value.content.map((con) => <h5 >{con}</h5>)}
            
            
    </div>
            <div class="card-body text-center  car">
       
       <div class="d-grid col-11 mx-auto">
        <button class="btn btn-primary" type="button">Button</button>
      </div>  
    </div>      
    </div>
    </div>)}
   

  

    

    
    </div>
    </div>

   
 
)

}
export default App;