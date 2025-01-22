import React from 'react';

const Table = (props) => {
  const storeItem = props.storeData;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {storeItem.length > 0 ? (
            storeItem.map((item, index) => (
              <tr key={item.id}>
                {' '}
                {/* Added key here */}
                <td>{index + 1}</td>
                <td>{item.title1}</td>
                <td>
                  <button onClick={() => props.delete(item.id)}>Delete</button>
                  <button onClick={() => props.edit(item.id)}>Edit</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No items found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
