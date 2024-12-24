import React from 'react';
const Table = (props) => {
    const data = props.listData;
    console.log(data, 'list');
    const Border = { border: '2px solid black' };
    return (
        <div>
            <div className="tqble">
                {data && data.length > 0 ? (
                    <div>
                        <table>
                            <tr>
                                <th style={Border}> S.no </th>
                                <th style={Border}> Name </th>
                                <th style={Border}> Email Id </th>{' '}
                                <th style={Border}> EditItem </th>{' '}
                                <th style={Border}> DeleteItem </th>{' '}
                            </tr>
                            <tbody>
                                {data.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td style={Border}> {index + 1} </td>
                                            <td style={Border}> {item.Fname} </td>
                                            <td style={Border}> {item.EmailId} </td>
                                            <td style={Border}>
                                                {' '}
                                                <button onClick={() => props.edit(item.id)}>
                                                    {' '}
                                                    Edit{' '}
                                                </button>{' '}
                                            </td>
                                            <td style={Border}>
                                                {' '}
                                                <button onClick={() => props.delete(item.id)}>
                                                    {' '}
                                                    Delete{' '}
                                                </button>{' '}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h4> No Data found ... </h4>
                )}
            </div>
        </div>
    );
}
export default Table;