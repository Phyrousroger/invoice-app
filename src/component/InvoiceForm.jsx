import React, {useRef} from 'react';

const InvoiceForm = ({Items,AddList}) => {
    const formRef=useRef();
    const Handle=(e)=>{
        e.preventDefault();
        const form=new FormData(formRef.current);
        // console.log(form);
        // console.log(form.get("item-id"));
        // console.log(form.get("quantity"));
        //
        AddList(form.get("item-id"),parseFloat(form.get("quantity")));
    }
    return (
        <div>
            <form ref={formRef} action="" id="create" onSubmit={Handle}></form>
            <div className="border border-primary p-3">
                <div className="row">
                <div className="col-12 col-lg-4">
                    <label htmlFor="" className="form-label">Product</label>
                    <select name="item-id" className="form-select" form="create" required>
                        {Items.map(item=>(
                            <option key={item.id} value={item.id}>{item.item}</option>
                            )
                        )}
                    </select>
                </div>
                <div className="col-12 col-lg-4">
                    <label htmlFor="" className="form-label">Quantity</label>
                    <input type="number" className="form-control text-end" name="quantity" form="create" required/>
                </div>
                <div className="col-12 col-lg-4 d-flex align-items-end mt-2">
                    <button className="btn btn-primary w-100 align-middle" form="create">Add</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default InvoiceForm;