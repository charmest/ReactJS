import sun from "../assets/sun.svg"
import water from "../assets/water.svg"

function CareScale({ scaleValue, careType }) {
	
	const range = [1,2,3]

	const quantity = {
		1: 'peu',
		2: 'mod�r�ment',
		3: 'beaucoup'
	}

	const scaleType = careType == "light" ? <img src={ sun } alt="luminosit�"></img> : <img src={ water } alt="arrosage"></img>

	function handleClick(careType, scaleValue) {
		alert(
					`Cette plante requiert ${quantity[scaleValue]} ${
						careType === 'light' ? 'de lumi�re' : "d'arrosage"
					}`
				)
	}

    return (
		<div onClick={ () => handleClick(careType, scaleValue) }>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? 
					<span key={ rangeElem.toString() }>
						{ scaleType }
					</span> : null
			)}
		</div>
	)
}
    
export default CareScale