import React from 'react'

function PriceCard(get) {
    console.log(get)
  return <>

 {/*<!-- Free Tier -->*/}
 <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{get.data.free}</h5>
            <h6 className="card-price text-center">${get.data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li id='edit' className={get.data.userEnable?"":"text-muted"}><span className="fa-li"><i className={get.data.userEnable?"fas fa-check":"fas fa-times"}></i></span>{get.data.user} </li>
              <li className={get.data.storageEnable?"":"text-muted"}><span className="fa-li"><i className={get.data.storageEnable?"fas fa-check":"fas fa-times"}></i></span>{get.data.storage} </li>
              <li className={get.data.publicprojectEnable?"":"text-muted"}><span className="fa-li"><i className={get.data.publicprojectEnable?"fas fa-check":"fas fa-times"}></i></span>{get.data.publicproject}  </li>
              <li className={get.data.accessEnable?"":"text-muted"}><span className="fa-li"><i className={get.data.accessEnable?"fas fa-check":"fas fa-times"}></i></span>{get.data.access} </li>
              <li className={get.data.privateprojectEnable?"":"text-muted"}><span className="fa-li"><i className={get.data.privateprojectEnable?"fas fa-check":"fas fa-times"}></i></span>{get.data.privateproject}  </li>
              <li className={get.data.phoneEnable?"":"text-muted"}><span className="fa-li"><i className={get.data.phoneEnable?"fas fa-check":"fas fa-times"}></i></span>{get.data.phone}  </li>
              <li className={get.data.subdomainEnable?"":"text-muted"}><span className="fa-li"><i className={get.data.subdomainEnable?"fas fa-check":"fas fa-times"}></i></span>{get.data.subdomain} </li>
              <li className={get.data.statusEnable?"":"text-muted"}><span className="fa-li"><i className={get.data.statusEnable?"fas fa-check":"fas fa-times"}></i></span>{get.data.status}  </li>
            </ul>
            <div className="d-grid">
              <a href="{javascript(void)}" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>

  </>
    
  
}

export default PriceCard