import { ethers } from "ethers"
import React, { useState } from 'react'

function Buy({state}) {

    const [paid , payStatus] = useState("");
    const buyChai = async(e) =>{
        e.preventDefault();
        const {contract} = state ;
        const name  = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
        const amount = {value:ethers.utils.parseEther('0.001')};
        const transaction = await  contract.buyChai(name , message , amount)
        await transaction.wait();
        payStatus("Transaction is successfull !");
        
    }
  return (
    <div className='w-50 shadow rounded-3 p-5 mt-5 cards'>
      <form onSubmit={buyChai} className=''>
        
        <input type="text" name="" className='form-control m-3' id="name" placeholder="Enter Name"/>
        <input type="text" name="" className='form-control m-3' id="message" placeholder="Enter Message " />

        <button type='submit' className="btn btn-primary shadow rounded-0 border-0 m-3">Pay 0.001 ETH</button>
        <span className="m-3 text-success">{paid}</span>
      </form>
    </div>
  )
}

export default Buy;
