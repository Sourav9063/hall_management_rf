import React from 'react'
import style from './Header.module.css'

export default function Header() {
    return (
        <div className={`${style.header} ${style.header_img}`} >

            <h1>Shah Paran Hall</h1>
            <a className='link' href='https://www.sust.edu/' target="_blank" rel="noopener noreferrer">Shahjalal University of Science and Technology</a>

        </div>
    )
}
