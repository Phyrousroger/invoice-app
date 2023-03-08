import React, {useState} from 'react';
import InvoiceList from "./InvoiceList.jsx";
import InvoiceForm from "./InvoiceForm.jsx";

const Invoice = () => {
    const [Items,setItems]=useState([
        {
            id:1,
            item:"Apple",
            price:300
        },
        {
            id:2,
            item:"Orange",
            price:200
        },
        {
            id:3,
            item:"Coconut",
            price:800
        },
        {
            id:4,
            item:"Banana",
            price:100
        }
    ]);
    const increaseList=(id)=>{
        setLists(lists.map(list=>{
            if(list.id===id){
                list.quantity+=1;
                list.cost=list.quantity*list.Item.price;
            }
            return list;
            })
        );
        console.log(id);
    }
    const decreaseList=(id)=>{
        setLists(lists.map(list=>{
                if(list.id===id && list.quantity>1){
                    list.quantity-=1;
                    list.cost=list.quantity*list.Item.price;
                }
                return list;
            })
        );
        console.log(id);
    }

    const [lists,setLists]=useState([]);
    const AddList=(itemId,quantity)=>{
        const currentItem=Items.find((item)=>item.id == itemId);
        // console.log(currentItem);
        const isExitInlist=lists.find((list)=>list.Item.id===currentItem.id)
        if(isExitInlist){
            setLists(lists.map(list=>{
                if(list.Item.id===currentItem.id){
                    list.quantity+=quantity;
                    list.cost=currentItem.price*list.quantity;
                }
                return list;
                }
            ))
        }else {
            const newList={
                id:Date.now(),
                Item:currentItem,
                quantity,
                cost:currentItem.price*quantity
            }
            // console.log(newList.Item.price);
            setLists([...lists,newList])
        }

    }
    return (
        <>
            <InvoiceForm Items={Items} AddList={AddList}/>
            <InvoiceList lists={lists} decreaseList={decreaseList} increaseList={increaseList}/>

        </>
    );
};

export default Invoice;