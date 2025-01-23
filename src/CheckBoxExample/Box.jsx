import React, { useState } from 'react';
const Usecheck = () => {

    const [hideTable, setHideTable] = useState(false)
    const [checked, setChecked] = useState(true);
    const [hide, setHide] = useState(true)
    const [first, setFirst] = useState(true)
    const [second, setSecond] = useState(true)
    const [third, setThird] = useState(true)
    const Border = { border: '1px solid black' };
    const myArray = [
        { fname: 'seetha', lname: 'geetha', email: 'seetha@gmail.com', phn: '1234567890', },
        { fname: 'varsha', lname: 'varshitha', email: 'varshitha@gmail.com', phn: '1234567890' },
        { fname: 'dolly', lname: 'akshaya', email: 'akshaya@gmail.com', phn: '1234567890' },
        { fname: 'pranita', lname: 'baby', email: 'baby@gmail.com', phn: '1234567890' },
    ];

    const handleShow = () => {
        setHideTable(!hideTable)
    }
    return (
        <div>
            <button onClick={handleShow}>show /hide</button>


            <div className='list'>
                
                {hideTable && <div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={!checked}
                                onChange={(e) => setChecked(!checked)}
                            />
                            hide s no
                        </label>
                    </div>

                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={!hide}
                                onChange={(e) => setHide(!hide)}
                            />
                            hide fname
                        </label>
                    </div>

                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={!first}
                                onChange={(e) => setFirst(!first)}
                            />
                            hide lname
                        </label>
                    </div>


                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={!second}
                                onChange={(e) => setSecond(!second)}
                            />
                            hide email
                        </label>
                    </div>



                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={!third}
                                onChange={(e) => setThird(!third)}
                            />
                            hide phn
                        </label>
                    </div>
                </div>

                }
            </div>

            <form>


                <table>
                    <thead>
                        <tr>
                            {checked && <th style={Border}>S no </th>}
                            {hide && <th style={Border}>Fname</th>}
                            {first && <th style={Border}>Lname</th>}
                            {second && <th style={Border}>Email</th>}
                            {third && <th style={Border}>Phone</th>}
                        </tr>
                    </thead>
                    {
                        myArray.map((item, index) => {
                            return (

                                <tr>
                                    {checked && <td style={Border} >{index + 1}</td>}
                                    {hide && <td style={Border} >{item.fname}</td>}
                                    {first && <td style={Border} >{item.lname}</td>}
                                    {second && <td style={Border} >{item.email}</td>}
                                    {third && <td style={Border} >{item.phn}</td>}

                                </tr>

                            )
                        })}

                </table>
            </form>
        </div>
    )
}
export default Usecheck;