import React, { useEffect, useState } from 'react';
import { total } from '../../Utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add } from '../../Utilities/calculate';
// import add from '../../Utilities/calculate';

const Cosmo = () => {
    // const a = 55;
    // const b = 33;
    // const total= add(a,b)
//system 1
    // const cos = [
    //     {id:1, name:'alta',price:55},
    //     {id:2, name:'meril',price:55},
    //     {id:3, name:'powder',price:55},
    //     {id:4, name:'lipgel',price:55},
    //     {id:5, name:'mirror',price:55},
    // ]
//system 2
    // const cos = [
    //   {
    //     id: "632f46e0277849ff77b02070",
    //     age: 23,
    //     name: "Jody Pickett",
    //     gender: "female",
    //   },
    //   {
    //     id: "632f46e0775ec3a57c9d3dc5",
    //     age: 37,
    //     name: "Mara Tyler",
    //     gender: "female",
    //   },
    //   {
    //     id: "632f46e02f8460bc4f4f75d0",
    //     age: 35,
    //     name: "Bertie Briggs",
    //     gender: "female",
    //   },
    //   {
    //     id: "632f46e07529ddbeb1119d5a",
    //     age: 25,
    //     name: "Matilda Shaw",
    //     gender: "female",
    //   },
    //   {
    //     id: "632f46e0ffc8319e2bb16102",
    //     age: 36,
    //     name: "Harrell Livingston",
    //     gender: "male",
    //   },
    // ];
//system 3
    const [cos,setCos] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCos(data));
    }, [])
    
    const totalPrice = total(cos);

    return (
        <div>
            <h2>COsmo</h2>
            <p>money total: { totalPrice}</p>
            {/* <p>total: { total }</p> */}
            {
                cos.map(cosmetic=> <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmo;