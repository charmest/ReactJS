import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionnés de plantes !
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail : 
				<input 
				  value={ inputValue } 
				  onBlur={ handleBlur } 
				  onChange={ handleInput }
				  placeholder="Saisissez votre adresse email"/>
			</div>
		</footer>
	)

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
    	if (! inputValue.includes('@')) {
        	alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
		}
	}
}

export default Footer