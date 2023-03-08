import React from 'react';

const InvoiceList = ({lists,increaseList,decreaseList}) => {

    return (
        <>
                <div className="row">
               {
                   lists.length&&(
                       <table className="table table-bordered table-hover">
                           <thead>
                           <tr>
                               <th>Name</th>
                               <th>Quantity</th>
                               <th>Price</th>
                               <th>Cost</th>
                           </tr>
                           </thead>
                           <tbody>
                           {lists.map(list => (
                               <tr key={list.id}>
                                   <td>{list.Item.item}</td>
                                   <td className="text-end">
                                       <button onClick={decreaseList.bind(null,list.id)} className="btn btn-outline-danger">-</button>
                                       <span className="w-25 d-inline-block">{list.quantity}</span>
                                       <button onClick={increaseList.bind(null,list.id)} className="btn btn-outline-primary">+</button>
                                   </td>
                                   <td className="text-end">{list.Item.price}</td>
                                   <td className="text-end">{list.cost}</td>
                               </tr>
                           ))}
                           </tbody>
                       </table>
                   )
            }
                </div>
    </>
    );
};

export default InvoiceList;