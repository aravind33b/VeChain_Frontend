import React from 'react';
import SupplyChainTable from './SupplyChainTable';

const items = [
  { nft: 'NFT1', rawMaterial: 'Cotton', supplier: 'Supplier1', deliveryDate: '2023-10-10', status: 'Delivered' },
  { nft: 'NFT2', rawMaterial: 'Polyester', supplier: 'Supplier2', deliveryDate: '2023-11-10', status: 'In Transit' },
  // ... more items
];

const App = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl mb-4 text-center">Supply Chain</h1>
      <SupplyChainTable items={items} />
    </div>
  );
};

export default App;
