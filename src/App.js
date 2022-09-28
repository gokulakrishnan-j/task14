
import './App.css';
import PriceCard from './task/PriceCard';

let data= [
  {
    free:"FREE",
    freeEnable:true,
    price:"0",
    priceEnable:true,
    user:"Single User",
    userEnable:true,
    storage:"5GB Storage",
    storageEnable:true,
    publicproject:"Unlimited Public Projects",
    publicprojectEnable:true,
    access:"Community Access",
    accessEnable:true,
    privateproject:"Unlimited Private Projects",
    privateprojectEnable:false,
    phone:"Dedicated Phone Support",
    phoneEnable:false,
    subdomain:"Free Subdomain",
    subdomainEnable:false,
    status:"Monthly Status Reports",
    statusEnable:false,

  },

  {

    free:"PLUS",
    freeEnable:true,
    price:"9",
    priceEnable:true,
    user:"5 User",
    userEnable:true,
    storage:"50GB Storage",
    storageEnable:true,
    publicproject:"Unlimited Public Projects",
    publicprojectEnable:true,
    access:"Community Access",
    accessEnable:true,
    privateproject:"Unlimited Private Projects",
    privateprojectEnable:true,
    phone:"Dedicated Phone Support",
    phoneEnable:true,
    subdomain:"Free Subdomain",
    subdomainEnable:true,
    status:"Monthly Status Reports",
    statusEnable:false,

  },

  {

    free:"PRO",
    freeEnable:true,
    price:"49",
    priceEnable:true,
    user:"Unlimited User",
    userEnable:true,
    storage:"150GB Storage",
    storageEnable:true,
    publicproject:"Unlimited Public Projects",
    publicprojectEnable:true,
    access:"Community Access",
    accessEnable:true,
    privateproject:"Unlimited Private Projects",
    privateprojectEnable:true,
    phone:"Dedicated Phone Support",
    phoneEnable:true,
    subdomain:"Unlimited Free Subdomain",
    subdomainEnable:true,
    status:"Monthly Status Reports",
    statusEnable:true,

  }
]

function App() {
  return<>
  <section class="pricing py-5">
  <div class="container">
    <div class="row">
<PriceCard data={data[0]}/>
<PriceCard data={data[1]}/>
<PriceCard data={data[2]}/>
    </div>
  </div>
</section>


  </>
}

export default App;
