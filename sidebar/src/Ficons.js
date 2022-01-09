import React from "react";

/**
 * use icons from ficons
 *
 * https://ficons.fiction.com/reference.html
 *
 * @example
 * 			import Ficons from "./Ficons";
 * 			<Ficons icon='up' />
 */
class Ficons extends React.Component {

	classSize = '';

	constructor(props) {
		super(props);
		this.state = {
			icon: props.icon,
			classIcon: this.convert2Ficons(props.icon),
		};
	}


	convert2Ficons(icon) {
		let classIcon = '';
		switch (icon) {
			case 'fa-arrows-h':
			case 'arrows-h':
				classIcon = 'fa-arrows-h';
				break;
			case 'fa-arrows-v':
			case 'arrows-v':
				classIcon = 'fa-arrows-v';
				break;
			case 'fa-twitter':
			case 'twitter':
				classIcon = 'fa-twitter';
				break;
			// case 'twitter':
			// 	classIcon = 'fa-twitter-square';
			// 	break;
			case 'fa-github':
			case 'github':
				classIcon = 'fa-github';
				break;
			case 'fa-floppy-o':
			case 'fa-floppy':
			case 'floppy':
				classIcon = 'fa-floppy-o';
				break;
			case 'fa-headphones':
			case 'headphones':
				classIcon = 'fa-headphones';
				break;
			case 'fa-eye':
			case 'eye':
				classIcon = 'fa-eye';
				break;
			case 'fa-file-text-o':
			case 'file':
				classIcon = 'fa-file-text-o';
				break;
			case 'up':
				classIcon = 'fa-chevron-up';
				break;
			case 'arrow-up':
				classIcon = 'fa-arrow-up';
				break;
			case 'fa-arrows-alt':
			case 'arrows-alt':
				classIcon = 'fa-arrows-alt';
				break;
			case 'fa-facebook':
			case 'facebook':
				classIcon = 'fa-facebook';
				break;
			case 'fa-linkedin':
			case 'linkedin':
				classIcon = 'fa-linkedin';
				break;
			case 'fa-instagram':
			case 'insta':
			case 'instagram':
				classIcon = 'fa-instagram';
				break;
			case 'fa-youtube':
			case 'youtube':
				classIcon = 'fa-youtube';
				break;
			case 'fa-close':
			case 'x':
			case 'close':
				classIcon = 'fa-close';
				break;
			default:
				classIcon = 'fa-close';
				break;
		}
		return classIcon
	}

	componentDidUpdate(prevProps, prevState) {
		// console.log('componentDidUpdate');
		// if (prevState.path !== this.state.path) {
		// 	let firebaseRef = firebase.database().ref(this.state.path);
		// 	this.setState({ firebaseRef });
		// 	this.getData(firebaseRef);
		// }

		if (prevState.icon !== this.state.icon) {
			this.setState({
				classIcon: this.convert2Ficons(this.state.icon),
			})
		}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		// console.log('getDerivedStateFromProps');
		if (nextProps.icon !== prevState.icon) {
			return {
				icon: (nextProps.icon),
				classIcon: (nextProps.icon),
			};
		}
		else return null;
	}


	// UNSAFE_componentWillReceiveProps(nextProps) {
	// 	console.log(nextProps);
	// 	this.setState({
	// 		classIcon: nextProps.icon
	// 	});
	// }

	render() {
		return (
			<i className={"fa " + this.state.classIcon}></i>
		);
	}
}

export default Ficons;