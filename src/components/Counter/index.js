import {Component} from 'react'
import './index.css'

class Counter extends Component {
    state = {count:0}

    onClickIncrease = () => {
        this.setState(prevState => ({count:prevState.count+1}))
    }

    onClickDecrease = () => {
        this.setState(prevState => ({count:prevState.count-1}))
    }

    render(){
        const {count} = this.state

        return(
            <div className='main-container'>
                <div className='head-container'>
                <h1 className='heading'>Counter</h1>

                </div>
                <p className='description'>{count}</p>

                <div className='sub-container'>
                    <button onClick={this.onClickIncrease} className='button-text' type='button'>Increase</button>
                    <button onClick={this.onClickDecrease} className='button-text' type='button'>Decrease</button>

                </div>

            </div>
        )
    }
}
export default Counter