// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc1
    });
  const map0_ctc = ctc2;
  
  
  return {
    infos: {
      },
    views: {
      3: [ctc0],
      4: [ctc0, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:18:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:18:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v82, time: v81, didSend: v22, from: v80 } = txn1;
      
      ;
      const v83 = v81;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v82, time: v81, didSend: v22, from: v80 } = txn1;
  ;
  let v83 = v81;
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v98, time: v97, didSend: v44, from: v96 } = txn2;
    ;
    const v99 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v96), null);
    let v100;
    switch (v99[0]) {
      case 'None': {
        const v101 = v99[1];
        v100 = false;
        
        break;
        }
      case 'Some': {
        const v102 = v99[1];
        v100 = true;
        
        break;
        }
      }
    const v103 = v100 ? false : true;
    stdlib.assert(v103, {
      at: './index.rsh:38:12:application',
      fs: [],
      msg: null,
      who: 'Admin'
      });
    const txn3 = await (ctc.sendrecv({
      args: [v80, v96],
      evt_cnt: 0,
      funcNum: 3,
      lct: v97,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:45:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [], secs: v106, time: v105, didSend: v59, from: v104 } = txn3;
        
        ;
        await stdlib.simMapSet(sim_r, 0, v96, null);
        const cv83 = v105;
        
        await (async () => {
          const v83 = cv83;
          
          if (await (async () => {
            
            return true;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v106, time: v105, didSend: v59, from: v104 } = txn3;
    ;
    const v107 = stdlib.addressEq(v80, v104);
    stdlib.assert(v107, {
      at: './index.rsh:45:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    await stdlib.mapSet(map0, v96, null);
    const cv83 = v105;
    
    v83 = cv83;
    
    continue;
    
    
    
    }
  return;
  
  
  };
export async function Requester(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Requester expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Requester expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v82, time: v81, didSend: v22, from: v80 } = txn1;
  ;
  let v83 = v81;
  
  while (await (async () => {
    
    return true;})()) {
    const v89 = ctc.selfAddress();
    stdlib.protect(ctc0, await interact.request(), {
      at: './index.rsh:33:34:application',
      fs: ['at ./index.rsh:32:11:application call to [unknown function] (defined at: ./index.rsh:32:15:function exp)'],
      msg: 'request',
      who: 'Requester'
      });
    const v91 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v89), null);
    let v92;
    switch (v91[0]) {
      case 'None': {
        const v93 = v91[1];
        v92 = false;
        
        break;
        }
      case 'Some': {
        const v94 = v91[1];
        v92 = true;
        
        break;
        }
      }
    const v95 = v92 ? false : true;
    stdlib.assert(v95, {
      at: './index.rsh:34:13:application',
      fs: ['at ./index.rsh:32:11:application call to [unknown function] (defined at: ./index.rsh:32:15:function exp)'],
      msg: null,
      who: 'Requester'
      });
    
    const txn2 = await (ctc.sendrecv({
      args: [v80],
      evt_cnt: 0,
      funcNum: 2,
      lct: v83,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:36:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [], secs: v98, time: v97, didSend: v44, from: v96 } = txn2;
        
        ;
        stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v96), null);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v98, time: v97, didSend: v44, from: v96 } = txn2;
    ;
    const v99 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v96), null);
    let v100;
    switch (v99[0]) {
      case 'None': {
        const v101 = v99[1];
        v100 = false;
        
        break;
        }
      case 'Some': {
        const v102 = v99[1];
        v100 = true;
        
        break;
        }
      }
    const v103 = v100 ? false : true;
    stdlib.assert(v103, {
      at: './index.rsh:38:12:application',
      fs: [],
      msg: null,
      who: 'Requester'
      });
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v106, time: v105, didSend: v59, from: v104 } = txn3;
    ;
    const v107 = stdlib.addressEq(v80, v104);
    stdlib.assert(v107, {
      at: './index.rsh:45:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Requester'
      });
    await stdlib.mapSet(map0, v96, null);
    stdlib.protect(ctc0, await interact.notify(v96), {
      at: './index.rsh:48:22:application',
      fs: ['at ./index.rsh:48:22:application call to [unknown function] (defined at: ./index.rsh:48:22:function exp)', 'at ./index.rsh:48:22:application call to "liftedInteract" (defined at: ./index.rsh:48:22:application)'],
      msg: 'notify',
      who: 'Requester'
      });
    
    const cv83 = v105;
    
    v83 = cv83;
    
    continue;
    
    
    
    }
  return;
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAFAAEDAgQmAgEAACI1ADEYQQFiKWRJIls1AYEIWzUCMRkjEkEACDEAKChmQgEwNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0klDEAAlkkkDEAAPCQSRCEENAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEp2XEtLA0/zEAEkQ0A1cgICiAAQFmNP8yBkIAfEgkNAESRDQESSISTDQCEhFEKGRJNQM1/4AEQbFATbAxAIgA3Ek1/SJVQAAGIjX+QgAGIzX+QgAANP4URDT/MQBQKEsBVwBAZ0ghBDUBMgY1AkIAWyISRIGgjQaIAK8iNAESRDQESSISTDQCEhFEgARfDav6sDEAMgZCAAA1/0k1/ihLAVcAIGdIJDUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQlMTUSRCIxNhJEIzE3EkQiNQEiNQJC/69JMRhhQAADSCiJKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 64,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000c9f38038062000c9f8339810160408190526200002691620001ff565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000d0565b620000b0604080516060810182526000818301818152825282516020818101909452908152909182015290565b80513390526020810151439052620000c881620000fa565b5050620002a7565b81620000f65760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160208101909152600081528151516001600160a01b031680825260036000554360015560408051602081019290925201604051602081830303815290604052600290805190602001906200015492919062000159565b505050565b82805462000167906200026a565b90600052602060002090601f0160209004810192826200018b5760008555620001d6565b82601f10620001a657805160ff1916838001178555620001d6565b82800160010185558215620001d6579182015b82811115620001d6578251825591602001919060010190620001b9565b50620001e4929150620001e8565b5090565b5b80821115620001e45760008155600101620001e9565b6000604082840312156200021257600080fd5b604080519081016001600160401b03811182821017156200024357634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200025e57600080fd5b60208201529392505050565b600181811c908216806200027f57607f821691505b60208210811415620002a157634e487b7160e01b600052602260045260246000fd5b50919050565b6109e880620002b76000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780633bc5b7bf1461008357806373b4522c146100b05780637eea518c146100c357806383230757146100d6578063ab53f2c6146100eb57005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008f57600080fd5b506100a361009e366004610783565b61010e565b60405161007a91906107bd565b61005d6100be366004610804565b61013a565b61005d6100d1366004610804565b6102df565b3480156100e257600080fd5b50600154610070565b3480156100f757600080fd5b506101006104e0565b60405161007a92919061081c565b60408051606081018252600080825260208201819052918101919091526101348261057d565b92915050565b61014a600460005414600e610655565b6101648135158061015d57506001548235145b600f610655565b60008080556002805461017690610879565b80601f01602080910402602001604051908101604052809291908181526020018280546101a290610879565b80156101ef5780601f106101c4576101008083540402835291602001916101ef565b820191906000526020600020905b8154815290600101906020018083116101d257829003601f168201915b505050505080602001905181019061020791906108ae565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c6338360405161023a92919061091b565b60405180910390a161024e3415600c610655565b8051610266906001600160a01b03163314600d610655565b602081810180516001600160a01b039081166000908152600484526040808220805460ff19166001179055925182168152828120805462ff0000191690558251606081018452808401828152815283518086019094529083529283019182528351835191169052514390526102da8161067e565b505050565b6102ef600360005414600a610655565b6103098135158061030257506001548235145b600b610655565b60008080556002805461031b90610879565b80601f016020809104026020016040519081016040528092919081815260200182805461034790610879565b80156103945780601f1061036957610100808354040283529160200191610394565b820191906000526020600020905b81548152906001019060200180831161037757829003601f168201915b50505050508060200190518101906103ac9190610958565b6040805160208101909152600081529091507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033846040516103ef92919061091b565b60405180910390a161040334156008610655565b600061040e3361057d565b516001811115610420576104206107a7565b141561042f5760008152610457565b600161043a3361057d565b51600181111561044c5761044c6107a7565b141561045757600181525b80516104729061046857600161046b565b60005b6009610655565b6040805180820182526000808252602080830182815286516001600160a01b03908116808652338352600490945543600155855180840194909452905116828501528351808303850181526060909201909352805191926104d992600292909101906106d2565b5050505050565b6000606060005460028080546104f590610879565b80601f016020809104026020016040519081016040528092919081815260200182805461052190610879565b801561056e5780601f106105435761010080835404028352916020019161056e565b820191906000526020600020905b81548152906001019060200180831161055157829003601f168201915b50505050509050915091509091565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156105c9576105c96107a7565b1415610646576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561060a5761060a6107a7565b600181111561061b5761061b6107a7565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b8161067a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160208101909152600081528151516001600160a01b031680825260036000554360015560408051602081019290925201604051602081830303815290604052600290805190602001906102da9291905b8280546106de90610879565b90600052602060002090601f0160209004810192826107005760008555610746565b82601f1061071957805160ff1916838001178555610746565b82800160010185558215610746579182015b8281111561074657825182559160200191906001019061072b565b50610752929150610756565b5090565b5b808211156107525760008155600101610757565b6001600160a01b038116811461078057600080fd5b50565b60006020828403121561079557600080fd5b81356107a08161076b565b9392505050565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106107e257634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b60006040828403121561081657600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561085057858101830151858201606001528201610834565b81811115610862576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061088d57607f821691505b6020821081141561081657634e487b7160e01b600052602260045260246000fd5b6000604082840312156108c057600080fd5b6040516040810181811067ffffffffffffffff821117156108f157634e487b7160e01b600052604160045260246000fd5b60405282516108ff8161076b565b8152602083015161090f8161076b565b60208201529392505050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461094957600080fd5b80604085015250509392505050565b60006020828403121561096a57600080fd5b6040516020810181811067ffffffffffffffff8211171561099b57634e487b7160e01b600052604160045260246000fd5b60405282516109a98161076b565b8152939250505056fea264697066735822122082bc34c80da7dd8f18de59912a817d4454b32d433d88f6250b1e663ab8891f1664736f6c634300080c0033`,
  BytecodeLen: 3231,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:51:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:25:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:39:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Requester": Requester
  };
export const _APIs = {
  };
