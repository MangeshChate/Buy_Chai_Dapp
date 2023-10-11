import React, { useEffect, useState } from 'react'

function Memos({ state }) {
    const [memos, setMemos] = useState([]);
    const { contract } = state;

    useEffect(() => {
        const memosMessage = async () => {
            const memos = await contract.getMemos();
            setMemos(memos);
            

        }
        contract && memosMessage();
    }, [contract])
    return (
        <div className='m-3 p-3 shadow '>
            <table class="table table-striped">
                <thead>
                    <tr>

                        <th scope="col">Name</th>
                        <th scope="col">message</th>
                        <th scope="col">Time Stamp</th>
                        
                        <th scope="col">From</th>

                    </tr>
                </thead>
                <tbody>
                    {memos.map((memo) => (
                        <tr>

                            <td>{memo.name}</td>
                            <td>{memo.message}</td>
                            <td>{new Date(memo.timestamp * 1000).toLocaleString()}</td>
                            <td>{memo.from}</td>

                        </tr>

                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Memos;
