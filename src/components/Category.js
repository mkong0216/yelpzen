import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setCategory } from '../store/actions/category'
import { clearDirections } from '../store/actions/map'


class Category extends React.Component {
	constructor(props) {
		super(props)

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(event) {
		this.props.setCategory(this.props.category)
		this.props.clearDirections()
	} 

	render() {
		return (
			<Link to={`/local/${this.props.category}`}>
				<Button content={this.props.content} icon={this.props.icon} compact onClick={this.handleClick} className='category'/>
			</Link>
		)
	}
}

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({setCategory, clearDirections}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
