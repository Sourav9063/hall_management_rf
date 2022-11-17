import React from 'react'
import style from "../../pages//application_list/appliList.module.css"
import SideMenu from '../../components/sidemenu/SideMenu.js';
import useSortableData from "../../components/sortTable/useSortableData"
import RoomDetails from "../../components/json/room.json"

const Room = () => {
    const roomDetails = RoomDetails


      const { items, requestSort } = useSortableData(roomDetails);
      
      const DisplayData = items.map((info) => {
        return (
          <tr>
            <td>{info.id}</td>
            <td>{info.roomNo}</td>
            <td>{info.block}</td>
            <td>{info.floor}</td>
            <td>{info.capacity}</td>
            <td>{info.residintNo}</td>
          </tr>
        );
      });
      return (
        <div>
            <SideMenu/>
            <div className={style.table_wrapper}>
          <h2>Room Details</h2>
          <table className={style.fl_table}>
            <thead>
              <tr>
                <th>Id</th>
                <th onClick={()=>requestSort("roomNo")}>Room NO</th>
                <th onClick={()=>requestSort("block")}>Block</th>
                <th onClick={()=>requestSort("floor")}>Floor</th>
                <th onClick={()=>requestSort("capacity")}>Capacity</th>
                <th onClick={()=>requestSort("residintNo")}>Resident Number</th>
              </tr>
            </thead>
            <tbody>{DisplayData}</tbody>
          </table>
        </div>
        </div>
      );
}

export default Room