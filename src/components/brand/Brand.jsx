import "./brand.css"
import { google, slack, atlassian, dropBox, shopify } from "./imports"

function Brand() {
   return (
      <div className="brand section__padding">
         <div>
            <img src={google} alt="google" />
         </div>
         <div>
            <img src={slack} alt="slack" />
         </div>
         <div>
            <img src={atlassian} alt="atlassian" />
         </div>
         <div>
            <img src={dropBox} alt="drop" />
         </div>
         <div>
            <img src={shopify} alt="shopify" />
         </div>
      </div>
   )
}

export default Brand
