import Menu from "./menu"
import "../App.css"
import ColorSchemesExample from "../navbar"

function Sobre(){
    return(
    <div className="fl1">
        <ColorSchemesExample></ColorSchemesExample>
      <div className="fl2">
    <h1>Sobre Praiou</h1>
    <p><h2>Sobre Nós</h2>
    <p>Somos a Praiou, loja especialista em moda praia e estamos prontos para o atendermos da melhor forma possivel, porque afinal não é porque vamos para a praia que temos que deixar a moda em casa </p></p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque explicabo quia adipisci commodi vitae nemo eligendi illo facilis, molestias fugit sequi voluptate consequuntur porro! Odio dignissimos iusto numquam nemo perferendis!</p>
    <h6>.</h6>
    </div>
    <div className="Rodape">
        <footer>
         <h5 class="T1">Contato</h5>  
         <p>11 99999-9999</p>
         <h5 className="T2">Redes sociais</h5> 
         <p>Instagram: @PraiouModaPraia</p>    
        </footer> 
        </div>
    </div>
    )
}
export default Sobre