import React from 'react';
import "./cd.css"
import ColorSchemesExample from "../navbar"
import Footer from '../../footer' 

function Cad({ onLogin }) {
  return (
  
  <div>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles.css" />
        <title>Login - SaudeBem</title>
        
      </head>

      <body>
      <ColorSchemesExample height={100} width={100}>
       </ColorSchemesExample >
        <div className="login-container">
          <h2>Login - SaudeBem</h2>
          <form>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Senha" required />
            <button onClick={onLogin}>Acessar Tela Principal</button>
          </form>
        </div>
      </body>
      <Footer />
    </div>
  );
}

export default Cad;