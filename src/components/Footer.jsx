import React from 'react'
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined'

import '../css/components/Footer.css'

export default function Footer(props) {
	return (
		<div className='footer_container'>
			<div className="back_to_top_button_container" >
				<button className='back_to_top_button' onClick={() => props.onClick('landingPage')} aria-label="edit">
					<KeyboardArrowUpOutlinedIcon />
				</button>
			</div>
			<div className='footer'>
			</div>
		</div>
	)
}
