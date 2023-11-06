import Menu from "./menu"

import ColorSchemesExample from "../navbar"
import { Navbar } from "react-bootstrap"
import BasicExample from "../../card"
import BasicExample2 from "../../card2"
import BasicExample3 from "../../card3"
import Footer from '../../footer' 


function Home(){
    return(
        <div class="Nav">    
       <ColorSchemesExample height={100} width={100}>
       </ColorSchemesExample >
        <div class="HomeFundo">
         
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
      
    <div class="carousel-item active">
        
    <img src={'https://cdn.discordapp.com/attachments/690212935385088115/1171096725914660894/Sem-Titulo-1.jpg?ex=655b6fd1&is=6548fad1&hm=76f77cb89c2f9f44e160c0b0fc213568c9804ac20e3ea24a2fd26ca3f594728d&'} alt="Workflow" height={500} width={1250}     />

        
    </div>
    <div class="carousel-item">
    <img src={'https://cdn.discordapp.com/attachments/690212935385088115/1171096733376335883/WhatsApp_Image_2022-10-10_at_16.jpg?ex=655b6fd3&is=6548fad3&hm=e0a14fa48bba1dd987aa0a83983d84dd6931c5d0465f87ffb4cdd73158181c65&'} alt="Workflow"   height={500} width={1250}  />
    </div>
    <div class="carousel-item">
    <img src={'https://cdn.discordapp.com/attachments/690212935385088115/1171097021097193523/image-removebg-preview_5.png?ex=655b7017&is=6548fb17&hm=b57937df25d852c7390278f95d6619c537af3b94e3021ed45391752ab8cc5b11&'}  alt="Workflow" height={500} width={1250} />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        <div className="espacoB1">
        <BasicExample></BasicExample>  
        <BasicExample2></BasicExample2>  
        <BasicExample3></BasicExample3>  
        </div>
        
        <Footer />
       
        </div>
        </div>
    )
}
export default Home