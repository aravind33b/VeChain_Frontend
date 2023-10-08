import React from 'react';
// import SupplyChainTable from './SupplyChainTable';
import 'bootstrap/dist/css/bootstrap.min.css';
// import SupplyChainTable from './Component/SupplyTable';
import DataTable from './Component/SupplyTable';

const items = [
  { nft: 'NFT1', rawMaterial: 'Cotton', supplier: 'Supplier1', deliveryDate: '2023-10-10', status: 'Delivered' },
  { nft: 'NFT2', rawMaterial: 'Polyester', supplier: 'Supplier2', deliveryDate: '2023-11-10', status: 'In Transit' },
  // ... more items
];

const App = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl mb-4 text-center">Supply Chain</h1>
      <DataTable data={items}></DataTable>
      {/* <SupplyChainTable></SupplyChainTable> */}
      {/* <SupplyChainTable items={items} /> */}
    </div>
  );
};

export default App;
