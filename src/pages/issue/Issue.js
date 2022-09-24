import React from 'react'
import styles from './issue.module.css'

export default function Issue() {
    return (


        <div className={`${styles.form_body}`}>
            <div>
                <h1 >Issue</h1>
                <a href="/issue_list">Current Issues</a>
            </div>
            <form >
                <div >
                    <input className={styles.form__input} type="text" id="RoomNo" placeholder="Room No" />
                    <label className={styles.form__label} htmlFor="RoomNo">Room No:</label>
                    <input className={styles.form__input} type="text" id="RegNo" placeholder="Reg No" />
                    <label className={styles.form__label} htmlFor="RegNo">Reg No:</label>
                </div>
                <input className={styles.form__input} type="date" id="Issue_date" />
                <label className={styles.form__label} htmlFor="Issue_date">Issue Date:</label>
                <textarea className={styles.form__input} id="Description" placeholder="Description"></textarea>
                <label className={styles.form__label} htmlFor="Description">Description:</label>
                <input className={styles.form__input} type="text" id="Status" placeholder="Status" />
                <label className={styles.form__label} htmlFor="Status">Status:</label>
                <input className={styles.form__input} type="text" id="Action" placeholder="Action" />
                <label className={styles.form__label} htmlFor="Action">Action:</label>
                <button type="submit" disabled>Submit</button>
            </form>

        </div>
    )
}
