import web3 from "./web3";

export const address = "0xbF7420f05e96c3A3AB7967F2A16313aB4d589D47";

export const abi=[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "fname",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "course",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "grade",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "course1",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "course2",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "course3",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "course4",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "lab1",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "lab2",
				"type": "string"
			}
		],
		"name": "certadded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "coll_added",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "coladd",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "addCollege",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "fname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "course",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "grade",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "course1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "course2",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "course3",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "course4",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "lab1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "lab2",
				"type": "string"
			}
		],
		"name": "addcert",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "col",
				"type": "address"
			}
		],
		"name": "checkcoll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "viewcert",
		"outputs": [
			{
				"internalType": "string",
				"name": "ffname",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
export default new web3.eth.Contract(abi, address);
