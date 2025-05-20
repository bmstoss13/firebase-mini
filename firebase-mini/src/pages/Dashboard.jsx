import React from 'react'
import Response from '../components/responseBox'
import Answers from '../components/answersBox'

const Dashboard = () => {
    return (
        <div>
            <h1>Question Time!</h1>
            <p>Would you rather accrue a dollar a day for the rest of your life or get 1000 dollars right now?</p>
            <Response></Response>
            <Answers></Answers>
        </div>
    )
}

export default Dashboard