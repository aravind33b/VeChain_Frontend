import React, { useState, useContext } from 'react';
import ImageUpload from './ImageUpload';
import { useNavigate } from 'react-router-dom';
import '@material-tailwind/react';
import { WalletContext } from './WalletContext';
import Connex from '@vechain/connex';
import { Framework } from '@vechain/connex';

const ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "nftContract",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "supplyChainContract",
				"type": "address"
			}
		],
		"name": "ContractsCreated",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "createContracts",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "contractCreators",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNFTContracts",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getSupplyChainContracts",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "nftContracts",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "supplyChainContracts",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const connex = new Connex({
  node: 'https://testnet.vecha.in/',
  network: 'test'
});
const LandingPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate(); 

  const { userAddress } = useContext(WalletContext);

  const [contractAddresses, setContractAddresses] = useState(null);

    async function createContracts() {
      try {
        // Assuming connex is globally available as it's injected by the VeChain Sync browser extension
        const contract = connex.thor.account('0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1');
        const method = contract.method({
            "inputs": [],
            "name": "createContracts",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        });
        
        const signingService = connex.vendor.sign('tx', [method.asClause()]);
        const signedTx = await signingService.request();
        console.log(signedTx)
        navigate('/mint-nft', { state: { selectedImage, userAddress } });
        // const receipt = await connex.thor.transaction(signedTx.txid).getReceipt();
        // console.log(receipt)
        // const newContractAddresses = receipt.outputs[0].events[0].topics[0];
        // console.log(newContractAddresses)
        // setContractAddresses(newContractAddresses);
    } catch (error) {
        console.error('Error creating contracts:', error);
    }
    }

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
  };

  const handleMintNFT = () => {
    console.log(userAddress)
    navigate('/mint-nft', { state: { selectedImage, userAddress } }); 
  };

//   async function mintNFT() {
//     const contractAddress = "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1"; // replace with your contract address
//     // console.log(ABI)
//     const abi = {
//       "inputs": [],
//       "name": "createContracts",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         },
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     }; // replace with your contract ABI
// console.log(abi)
// console.log(userAddress)
//     const connex = new Connex({
//       node: 'https://testnet.vecha.in/',
//       network: 'test'
//     });
//     const createC = connex.thor.account(contractAddress).method(abi);
//     // const method = acc.method(abi);
//     console.log(createC)
//     createC
//     .caller(userAddress)
//     .gasPayer(userAddress) // Bob's address
//     .gas(100000) // Max gas for simulate 
//     .gasPrice('1000000000000000') // 1 VeThor can buy 1000 gas

//     console.log(createC)
// // Alice's address and amount in wei
// createC.call().then(output=>{
//     console.log('output',output)
// })
// //     console.log(method)
// // //     const contract = connex.thor.account(contractAddress).method([abi]);
// // // console.log(contract)
// //     try {
// //         // const clause = method.asClause('createContracts');
// //         const signingService = connex.vendor.sign('tx');
// //         const transactionResponse = await signingService.request([{ ...method }]);
// //         console.log('Transaction Response:', transactionResponse);
// //     } catch (error) {
// //         console.error('Minting Failed:', error);
// //     }
// }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
        <h1 className="text-4xl font-serif font-bold mb-6 text-black-800">Design it Yourself</h1>
      <div className="p-8 bg-gray-300 shadow-lg rounded-lg max-w-md">
        <input 
          type="file"
          onChange={handleImageSelect}
          className="mb-4 text-black py-2 px-4 rounded-full cursor-pointer bg-gray-400"
          accept="image/*"
        />
        {selectedImage && (
          <>
            <ImageUpload imageFile={selectedImage} />
            <div className="flex justify-between mt-4">
            <button 
              onClick={handleImageRemove}
              className="mt-4 bg-gray-400 text-black py-2 px-4 rounded-full"
            >
              Remove Image
            </button>
            <button 
                onClick={createContracts}
                className="bg-gray-400 text-black py-2 px-4 rounded-full"
              >
                Mint NFT
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
