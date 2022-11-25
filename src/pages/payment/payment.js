import React from 'react'
import style from '../../pages/application_list/appliList.module.css'
import SideMenu from '../../components/sidemenu/SideMenu';
const Payment = () => {
    const payment = [
        {
          name: "asdfghjk",
          regNo: "2018831029",
          dept: "Swe",
          amount: 3455,
          bank_reciept_no: "34edfg",
          payment_date: "12/12/21",
          expire_date: "12/12/22",  
        },
        
      ];
      
      const DisplayData = payment.map((info) => {
        console.log(info)
        return (
          <tr>
            <td>{info.name}</td>
            <td>{info.regNo}</td>
            <td>{info.dept}</td>
            <td>{info.amount}</td>
            <td>{info.bank_reciept_no}</td>
            <td>{info.payment_date}</td>
            <td>{info.expire_date}</td> 
          </tr>
        );
      });
      return (
        <div>
            <SideMenu/>
            <div className={style.table_wrapper}>
          <h2>Payment Detail</h2>
          <table className={style.fl_table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>RegNo</th>
                <th>Department</th>
                <th>Amount</th>
                <th>Bank Reciept No</th>
                <th>Payment Date</th>
                <th>Expire Date</th>
               
              </tr>
            </thead>
            <tbody>{DisplayData}</tbody>
          </table>
        </div>
        </div>
      );
}

export default Payment