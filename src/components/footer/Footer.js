import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
    return (
        <div className={style.footer}>
            <h2>Contact</h2>
            <div className="contact_address_container">
                <ul>
                    <li className="odd first-child"><strong>Shahjalal University of Science and Technology</strong></li><li className="even last-child">Shahjalal University of Science and Technology, Sylhet-3114, Bangladesh.</li>								</ul>
            </div>
        </div>
    )
}
