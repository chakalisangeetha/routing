import React from 'react';
const Table = (props) => {
    const Border = { border: '2px solid black' };
    const dataList = props.data;
    return (
        <div>
            <div className="tablediv">
                <div className="table">
                    {dataList && dataList.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th style={Border}> First Name </th>
                                    <th style={Border}> Last Name </th>
                                    <th style={Border}> Email ID </th>
                                    <th style={Border}> Edit Data </th>
                                    <th style={Border}> Delete Item </th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataList.map(({ id, Fname, Lname, Email }) => (
                                    <tr key={id}>
                                        {' '}
                                        {/* Use id as the key for the row */}
                                        <td style={Border}>{Fname}</td>
                                        <td style={Border}>{Lname}</td>
                                        <td style={Border}>{Email}</td>
                                        <td style={Border}>
                                            <button type="button" onClick={() => props.edit(id)}>
                                                Edit
                                            </button>
                                        </td>
                                        <td style={Border}>
                                            <button type="button" onClick={() => props.delete(id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <h4>No Data Matched...</h4>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Table;