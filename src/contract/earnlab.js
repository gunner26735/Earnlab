export const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_teamName",
				"type": "string"
			},
			{
				"internalType": "address[]",
				"name": "_members",
				"type": "address[]"
			},
			{
				"internalType": "uint256",
				"name": "_indexId",
				"type": "uint256"
			}
		],
		"name": "createTeam",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_arrayLength",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "_teamId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			}
		],
		"name": "UploadVideo",
		"outputs": [
			{
				"internalType": "uint8[]",
				"name": "",
				"type": "uint8[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_teamId",
				"type": "uint256"
			}
		],
		"name": "getCreator",
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
				"name": "_teamId",
				"type": "uint256"
			}
		],
		"name": "getTeam",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address[]",
						"name": "creator",
						"type": "address[]"
					},
					{
						"internalType": "uint8[]",
						"name": "videoUploaded",
						"type": "uint8[]"
					},
					{
						"internalType": "uint256",
						"name": "indexId",
						"type": "uint256"
					},
					{
						"internalType": "string[]",
						"name": "videoId",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "teamName",
						"type": "string"
					}
				],
				"internalType": "struct User.user",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TeamsCreated",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]