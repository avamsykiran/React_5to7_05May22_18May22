import {Component} from 'react'

class Counter1 extends Component {

    constructor(props){
        super(props);
        this.state={
            count:0,
            rounds:0
        };
    }

    render(){
        return (
            <div className="p-4">
                <span className='m-2'><strong> Count: {this.state.count} </strong></span>
                <span className='m-2'><strong> Rounds: {this.state.rounds} </strong></span>

                <button 
                    className='btn btn-sm btn-primary m-2'
                    onClick={e => this.setState({count:this.state.count+1})} >                 
                        UP
                </button>
            </div>
        );
    }
    
    componentDidMount(){
        this.setState({count:1});
    }

    componentDidUpdate(){
        if(this.state.count==10){
            this.setState({count:0,rounds:this.state.rounds+1});
        }
    }
}

export default Counter1;