import React, { Component } from 'react'

import'./css/App.css'
import MyWork from './components/MyWork'
import LandingPage from './components/LandingPage'
import About from './components/About'
// import Contact from './Contact'

import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import AppBar from '@material-ui/core/AppBar'


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

		this.one = React.createRef()
		this.two = React.createRef()
		this.three = React.createRef()
		this.four = React.createRef()
		this.handleScroll = this.handleScroll.bind(this)
		this.handleClick= this.handleClick.bind(this)
	}

handleScroll = e => {
	const scrollspys = document.querySelectorAll('.scrollspy')
	const links = document.querySelector('.links')
	const linksHeight = links.offsetHeight
	const allLinks = links.querySelectorAll('button')
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
				
		}
	})
}

handleClick(id) {
	switch (id) {
	case 'one':
		this.one.current.scrollIntoView({block: 'start', behavior: 'smooth'})
		break
		
	case 'two':
		this.two.current.scrollIntoView({block: 'start', behavior: 'smooth'})
		break
		
	case 'three':
		this.three.current.scrollIntoView({block: 'start', behavior: 'smooth'})
		break
		
		// case 'four':
		// 	this.four.current.scrollIntoView({block: 'start', behavior: 'smooth'})
		// 	break
		
	default:
		break
	}
}


render() {
	return (
		<div >
			<ElevationScroll {...this.props}>
				<AppBar style={styles.AppBar}>
					<div className="links">
						<button onClick={()=>this.handleClick('three')} id='Third-Link'>About</button>
						<button onClick={()=>this.handleClick('two')} id='Second-Link'>My Work</button>
						<button onClick={()=>this.handleClick('one')} id='First-Link'className="active">Home</button>
						{/* <button onClick={()=>this.handleClick('four')} id='Fourth-Link'>Contact</button> */}
					</div>
				</AppBar>
			</ElevationScroll>
				
			<div className="containers" onScroll={this.handleScroll}>
				<div ref={this.one} id="First" className="scrollspy"> 
					<LandingPage  onClick={this.handleClick}/>
				</div>
				<div ref={this.two} id="Second" className="scrollspy"> 
					<MyWork />
				</div>
				<div ref={this.three} id="Third" className="scrollspy"> 
					<About onClick={this.handleClick}/>
				</div>
				{/* <div ref={this.four} id="Fourth" className="scrollspy">
						<Contact/>
					</div> */}
			</div>			

		</div>
	)
}
}

function ElevationScroll(props) {
	const { children, window } = props

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	})

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	})
}

const styles = {
	AppBar: {
		backgroundColor: '#282c34',
		// backgroundColor: '#173440',
		// margin: 'auto'
		backgroundImage: 'linear-gradient(to right, #262933, #292c37, #2b2e3b, #2e313f, #313443, #333746, #363949, #383c4c, #3a3f4f, #3d4252, #3f4556, #424859)',
	},
}
