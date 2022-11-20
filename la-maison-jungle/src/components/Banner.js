import TitleComponent from './TitleComponent'
import Description from './Description'
import '../styles/Banner.css'
import React from "react"

function Banner() {
  return (
	<div className="lmj-banner">
    	<React.Fragment>
      		<TitleComponent/>
      		<Description/>
		</React.Fragment>
	</div>
    )
}

export default Banner