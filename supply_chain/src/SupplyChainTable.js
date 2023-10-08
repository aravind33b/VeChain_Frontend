import React from 'react';

const upplyChainTable = ({ items }) => {
  return (
    <div className="overflow-x-auto text-center">
      <table className="min-w-full bg-white mx-auto">
        <thead>
          <tr className="w-full h-16 border-gray-300 border-b py-8">
            <th className="text-left pl-14 text-gray-600">NFT</th>
            <th className="text-left text-gray-600">Raw Material</th>
            <th className="text-left text-gray-600">Supplier</th>
            <th className="text-left text-gray-600">Delivery Date</th>
            <th className="text-left text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="h-24 border-gray-300 border-b">
              <td className="pl-14">{item.nft}</td>
              <td>{item.rawMaterial}</td>
              <td>{item.supplier}</td>
              <td>{item.deliveryDate}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default upplyChainTable;
