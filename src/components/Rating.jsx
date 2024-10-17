import React, { useContext } from 'react'
import { ThemeContext } from '../App'

function Rating({ rate, count }) {
    const themeType = useContext(ThemeContext)
    return (
        <div>
            <p style={{ color: themeType == 'light' ? 'black' : 'white' }}>Rate:{rate}</p>
            <p style={{ color: themeType == 'light' ? 'black' : 'white' }}>Count:{count}</p>
        </div>
    )
}

export default Rating