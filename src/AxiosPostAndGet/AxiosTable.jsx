import React, { useState, useEffect } from 'react';
const AxisoTable = (props) => {
  const Border = { border: '1px solid black' };

  return (
    <>
      <div>
        {props.arrayItem && props.arrayItem.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th style={Border}>S no</th>
                <th style={Border}>Fname</th>
                <th style={Border}>Lname</th>
                <th style={Border}>Email</th>
                <th style={Border}>Phone</th>
                <th style={Border}>Age</th>
                <th style={Border}>Address</th>
                <th style={Border}>Delete</th>
                <th style={Border}>Edit</th>
              </tr>
            </thead>
            {props.arrayItem.map((item, index) => {
              return (
                <tr>
                  <td style={Border} onClick={() => props.send(item)}>
                    {index + 1}
                  </td>
                  <td style={Border} onClick={() => props.send(item)}>
                    {item.title1}
                  </td>
                  <td style={Border} onClick={() => props.send(item)}>
                    {item.title2}
                  </td>
                  <td style={Border} onClick={() => props.send(item)}>
                    {item.title3}
                  </td>
                  <td style={Border} onClick={() => props.send(item)}>
                    {item.title4}
                  </td>
                  <td style={Border} onClick={() => props.send(item)}>
                    {item.title5}
                  </td>
                  <td style={Border} onClick={() => props.send(item)}>
                    {item.title6}
                  </td>

                  <td>
                    <button onClick={() => props.delete(item.id)}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <button onClick={() => props.edit(item.id)}>Edit</button>
                  </td>
                </tr>
              );
            })}
          </table>
        ) : (
          <>data not found</>
        )}
      </div>
    </>
  );
};
export default AxisoTable;
