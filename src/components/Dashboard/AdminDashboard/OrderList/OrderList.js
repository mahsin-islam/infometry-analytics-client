import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import TableLoader from '../../../Shared/TableLoader/TableLoader';
import Order from '../Order/Order';
import './OrderList.css'

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        axios.get('https://whispering-fortress-28180.herokuapp.com/orders')
        .then(res => setOrders(res.data))
    },[isUpdated])

    const handleAction = (id, status) => {
        setIsUpdated(true)
        axios.patch(`https://whispering-fortress-28180.herokuapp.com/statusUpdate/${id}`, {status: status })
        .then(res => res.data && setIsUpdated(false))
    }
    
    return (
        <div className="px-2">
            {
                orders.length === 0 ? 
                <TableLoader/> 
                : 
                <div className="orderList">
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Service</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <Order key={order._id} order={order} handleAction={handleAction}/>)
                            }
                        </tbody>
                    </Table>
                </div>
            }
            
        </div>
    );
};

export default OrderList;