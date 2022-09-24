import React from 'react'
import styles from './issue_list.module.css'

export default function IssueList() {
    // a list of issues 
    const issues = [
        {
            id: 1,
            roomNo: 101,
            regNo: '18BCE1234',
            issueDate: '2021-01-01',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            status: 'pending',
            action: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
        },
        {
            id: 2,
            roomNo: 102,
            regNo: '18BCE1235',
            issueDate: '2021-01-02',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            status: 'completed',
            action: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
        },
        {
            id: 3,
            roomNo: 103,
            regNo: '18BCE1236',
            issueDate: '2021-01-03',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            status: 'pending',
            action: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
        },
        {
            id: 4,
            roomNo: 104,
            regNo: '18BCE1237',
            issueDate: '2021-01-04',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            status: 'pending',
            action: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
        },
        {
            id: 5,
            roomNo: 105,
            regNo: '18BCE1238',
            issueDate: '2021-01-05',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            status: 'working',
            action: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
        },
        {
            id: 6,
            roomNo: 106,
            regNo: '18BCE1239',
            issueDate: '2021-01-06',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            status: 'completed',
            action: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
        },
        {
            id: 7,
            roomNo: 107,
            regNo: '18BCE1240',
            issueDate: '2021-01-07',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            status: 'pending',
            action: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
        },
    ]
    return (
        <div className={styles.flex_container}>
            <h1>Issue List</h1>
            <h5>Problems faced by the students.</h5>
            <h4>Sort by: Id/room/</h4>
            <table>
                <thead>
                    <tr>
                        <th>Room No</th>
                        <th>Reg No</th>
                        <th>Issue Date</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {issues.map((issue) => (
                        <tr key={issue.id}>
                            <td>{issue.roomNo}</td>
                            <td>{issue.regNo}</td>
                            <td>{issue.issueDate}</td>
                            <td>{issue.description}</td>
                            <td className={issue.status === "working" ? styles.working : issue.status === "completed" ? styles.completed : styles.pending}>{issue.status}</td>
                            <td>{issue.action}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
