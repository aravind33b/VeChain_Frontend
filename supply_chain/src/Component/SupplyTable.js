import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { thorify } from "thorify";
import Registry from '../utils/Registry.json';
const Web3 = require("web3");

const web3 = thorify(new Web3(), "https://testnet.veblocks.net");

const registryABI = Registry.abi;
const registryAddress = "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c";  // Your Registry contract address

const registryContract = new web3.eth.Contract(registryABI, registryAddress);

const DataTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetching all NFT Contracts from the registry
                const nftAddresses = await registryContract.methods.getNFTContracts().call();
                const supplyChainAddresses = await registryContract.methods.getSupplyChainContracts().call();

                const allData = await Promise.all(nftAddresses.map(async (address, index) => {
                    // Assuming your SupplyChain contract has a method to get manufacturing status by NFT address
                    const supplyChainContract = new web3.eth.Contract(SupplyChainABI, supplyChainAddresses[index]);
                    const manufacturingStatus = await supplyChainContract.methods.getManufacturingStatus(address).call();

                    return {
                        nft: address,
                        rawMaterial: "Example Material",  // You will need to replace this with actual data
                        supplier: "Example Supplier",     // You will need to replace this with actual data
                        status: manufacturingStatus.stage,
                        deliveryDate: new Date(manufacturingStatus.timestamp * 1000).toLocaleDateString()
                    };
                }));

                setData(allData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>NFT</th>
                    <th>Raw Materials</th>
                    <th>Supplier</th>
                    <th>Status</th>
                    <th>Delivery Date</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.nft}</td>
                        <td>{row.rawMaterial}</td>
                        <td>{row.supplier}</td>
                        <td>{row.status}</td>
                        <td>{row.deliveryDate}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default DataTable;
