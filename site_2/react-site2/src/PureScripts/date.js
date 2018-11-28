import React, { Component } from 'react';

let today = new Date();

class MyDate extends Component {
    constructor() {
        super()
        this.state = {
            day: today.getDate(),
            month: today.getMonth() + 1
        }
    }

    render() {
        return (
            <div className="datetime">
                <div className='daytime' ref="day">{this.state.day}</div>
                <div className='monthtime' ref="month">{this.state.month}</div>
            </div>
        )
    }
}
export default MyDate



