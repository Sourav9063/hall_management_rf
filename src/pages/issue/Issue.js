import React from 'react'
import styles from './issue.module.css'
import { useLocation, Link } from 'react-router-dom'

export default function Issue(props) {
    const location = useLocation()
    // const { from } = location.state
    let { forWhat } = location.state;
    console.log(forWhat)
    forWhat = forWhat || 'Issue';

    return (


        <div className={`${styles.form_body}`}>
            <div>
                <h1 >{forWhat}</h1>
                {forWhat === 'Issue' && <Link to="/issue_list">Current {forWhat}</Link>}
            </div>
            <form className={styles.form}>
                <div >
                    <input className={styles.form__input} type="text" id="RoomNo" placeholder="Room No" />
                    <label className={styles.form__label} htmlFor="RoomNo">Room No:</label>
                    <input className={styles.form__input} type="text" id="RegNo" placeholder="Reg No" />
                    <label className={styles.form__label} htmlFor="RegNo">Reg No:</label>
                </div>
                <input className={styles.form__input} type="date" id="Issue_date" />
                <label className={styles.form__label} htmlFor="Issue_date">Issue Date:</label>
                {forWhat === 'Issue' && <div>
                    <textarea className={styles.form__input} id="Description" placeholder="Description"></textarea>
                    <label className={styles.form__label} htmlFor="Description">Description:</label>
                </div>}
                <input className={styles.form__input} type="text" id="Status" placeholder={forWhat === 'Issue' ? "Status" : "Amount"} />
                <label className={styles.form__label} htmlFor="Status">{forWhat === 'Issue' ? "Status:" : "Amount:"}</label>
                <input className={styles.form__input} type="text" id="Action" placeholder={forWhat === 'Issue' ? "Action:" : "Bank Receipt:"} />
                <label className={styles.form__label} htmlFor="Action">{forWhat === 'Issue' ? "Action:" : "Bank Receipt:"}:</label>
                <button type="submit" disabled>Submit</button>
            </form>

        </div>
    )
}
