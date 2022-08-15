import React,{Component} from 'react'

class ClassComponent extends Component {

    // props
    // setting state
    constructor(props) {
        super(props)

        this.state = {
            count: props.count,
            coffee: []
        }
    }

    // useEffect
    componentDidMount() { // loading coffees from api
        console.log("component did mount")
        let url = "https://api.sampleapis.com/coffee/hot"
        fetch(url)
        .then(res=> res.json())
        .then(data => 
            this.setState({
             count: this.state.count,
             coffee: data
             })
        )
    }

    // return 
    render() {
        return (
            <>
             <h1> this is a class component {this.state.count}</h1>
             <button onClick={()=> {
                    // update the count to count+1
                    this.setState(
                        {
                            count: this.state.count + 1,
                            coffee: this.state.coffee
                        })
             }}>add one</button>
                {/* map through coffee */}
                {this.state.coffee.map(
                    coffee => 
                    <h1 key={coffee.id}>{coffee.title}</h1>
                )}
            </>
        )
    }

}

export default ClassComponent