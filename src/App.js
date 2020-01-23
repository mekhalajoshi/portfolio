import React, { Component } from 'react'

import'./css/App.css'
import MyWork from './components/MyWork'
import LandingPage from './components/LandingPage'
import About from './components/About'
import Footer from './components/Footer'

import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined';

export default class App extends Component {

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)		
	}
	
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	}

	constructor(props) {
		super(props)
		this.textInput = React.createRef()

		this.landingPage = React.createRef()
		this.about = React.createRef()
		this.myWork = React.createRef()
		this.contact = React.createRef()
		this.handleScroll = this.handleScroll.bind(this)
		this.handleClick= this.handleClick.bind(this)
	}

handleScroll = e => {
	const scrollspys = document.querySelectorAll('.scrollspy')
	const links = document.querySelector('.links')
	const linksHeight = links.offsetHeight
	const allLinks = links.querySelectorAll('button')
	const fab = document.querySelector('.fab_button_container')
	scrollspys.forEach(current => {
		var _ = current
		let currentElementOffset = _.offsetTop
		let scrollPosition =
						document.documentElement.scrollTop || document.body.scrollTop
		if (currentElementOffset <= scrollPosition + linksHeight) {
			allLinks.forEach(currentLink => {
				currentLink.classList.remove('active')
			})
			const currentID = current.getAttribute('id')
			document
				.querySelector(`#${currentID}-Link`)
				.classList.add('active')
			if (currentID === `landingPage`) {
				links.classList.remove('fixed')
				fab.classList.add('hidden')

			}
			if (currentID === `about`) {
				links.classList.add('fixed')
				fab.classList.remove('hidden')

			}
		}
	})
	 

}

handleClick(id) {
	switch (id) {
	case 'landingPage':
		this.landingPage.current.scrollIntoView({block: 'start', behavior: 'smooth'})
		break
		
	case 'myWork':
		this.myWork.current.scrollIntoView({block: 'start', behavior: 'smooth'})
		break
		
	case 'about':
		this.about.current.scrollIntoView({block: 'start', behavior: 'smooth'})
		break
		
		// case 'contact':
		// 	this.contact.current.scrollIntoView({block: 'start', behavior: 'smooth'})
		// 	break
		
	default:
		break
	}
}


render() {
	return (
		<div >
			<div className="containers" onScroll={this.handleScroll}>
				<div ref={this.landingPage} id="landingPage" className="scrollspy"> 
					<LandingPage  onClick={this.handleClick}/>
				</div>
				<div className="links">
							<button onClick={()=>this.handleClick('landingPage')} id='landingPage-Link'className="active">HOME</button>
							<button onClick={()=>this.handleClick('about')} id='about-Link'>ABOUT ME</button>
							<button onClick={()=>this.handleClick('myWork')} id='myWork-Link'>MY WORK</button>
							{/* <button onClick={()=>this.handleClick('contact')} id='contact-Link'>CONTACT</button> */}
				</div>
				<div ref={this.about} id="about" className="scrollspy"> 
					<About onClick={this.handleClick}/>
				</div>
				<div ref={this.myWork} id="myWork" className="scrollspy"> 
					<MyWork />
				</div>
				{/* <div ref={this.contact} id="Fourth" className="scrollspy">
						<Contact/>
					</div> */}
				</div>			
				<div className="fab_button_container hidden" >
					<button className='fab_button'   onClick={() => this.handleClick('landingPage')} aria-label="edit">
						<KeyboardArrowUpOutlinedIcon />
					</button>
			</div>
			{/* <Footer></Footer> */}
		</div>
	)
}
}

