import React, { Component } from 'react'
import Ecom from './Ecom'

class App extends Component {

	render() {
		return (
			<Ecom items={this.state.items} />
		)
	}

	state = { items: [] };

	componentDidMount() {
        let instance1 = Singleton.getInstance();

        fetch('http://localhost:4000/items')
            .then(res => res.json())
            .then((data) => {
                this.setState({ items: data })
            })
            .catch(console.log)
    }

}

export default App