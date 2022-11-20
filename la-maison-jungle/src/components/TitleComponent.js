import logo from "../assets/logo.png"
import "../styles/TitleComponent.css"

function TitleComponent() {
  const title = "la maison jungle"
  return (
  <div>
	  <img src={ logo } alt="La maison jungle" className="lmj-logo"></img>
  	  <h1 className="lmj-title">{ title.toUpperCase() }</h1>
  </div>);
}

export default TitleComponent