import React from 'react';

export default class TodaysDate extends React.Component {
    constructor() {
        super();

        const today = new Date();

        const date = new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(today) + ", " + new Intl.DateTimeFormat('en-US', { month: 'long'}).format(today) + " " + today.getDate() + ", " + new Intl.DateTimeFormat('en-US', { year: 'numeric'}).format(today);
        
        this.state = {
            date: date
        };
    }

    render() {
        return (
            <div className='date'>
                {this.state.date}
            </div>
        );
    }
}