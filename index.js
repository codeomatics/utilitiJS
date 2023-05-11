const axios = require("axios");
const {
    nftforwallet,
    sftforwallet,
    tokensforwallet,
    getwallet,
    getwallets,
    createwallet,
    updatewallet,
    deletewallet,
    signature
} = require("./apis/1_wallets");
const {
    readtx,
    createtx,
    createmetatx,
    getsingletx,
    gettxofwallet,
    gettxstatus
} = require("./apis/2_transactions");
const {
    resynctokens
} = require("./apis/3_tokens");
const {
    resynccontractmetadata,
    getcontractnfts
} = require("./apis/4_contracts");
const {
    getnamespaces,
    createnamespaces,
    getmetadataitems,
    updatemetadataitem,
    createmetadataitem,
    getsinglemetadataitem,
    deletemetadataitem
} = require("./apis/5_metadata");
const {
    getnfts,
    resyncnfts
} = require("./apis/6_nfts");
const {
    updateresyncnfts
} = require("./apis/7_sfts");





class Utility {
    constructor(apikey) {
        this.apikey = apikey;
    }

    init() {
       axios.defaults.headers.common['accept'] = `'application/json'`;
        axios.defaults.headers.common['X-API-Key'] = `${this.apikey}`;
    }

    // Wallet APIs
    nftForWallet(...params) {
        nftforwallet(...params)
    }

    sftForWallet(...params) {
        sftforwallet(...params)
    }

    tokensForWallet(...params) {
        tokensforwallet(...params)
    }

    getWallet(...params) {
        getwallet(...params)
    }

    getWallets(...params) {
        getwallets(...params)
    }

    createWallet(...params) {
        createwallet(...params)
    }

    updateWallet(...params) {
        updatewallet(...params)
    }

    deleteWallet(...params) {
        deletewallet(...params)
    }

    getSignature(...params) {
        signature(...params)
    }
    
    
    // Transaction APIs
    readTx(...params) {
        readtx(...params)
    }
    
    createTx(...params) {
        createtx(...params)
    }
    
    createMetaTx(...params) {
        createmetatx(...params)
    }
    
    getSingleTx(...params) {
        getsingletx(...params)
    }
    
    getTxOfWallet(...params) {
        gettxofwallet(...params)
    }
    
    getTxStatus(...params) {
        gettxstatus(...params)
    }


    // Tokens APIs
    resyncTokens(...params) {
        resynctokens(...params)
    }
    

    // Contracts APIs
    resyncContractMetadata(...params) {
        resynccontractmetadata(...params)
    }

    getContractNfts(...params) {
        getcontractnfts(...params)
    }


    // Metadata APIs
    getNamespaces(...params) {
        getnamespaces(...params)
    }

    createNamespaces(...params) {
        createnamespaces(...params)
    }

    getMetadataItems(...params) {
        getmetadataitems(...params)
    }

    updateMetadataItem(...params) {
        updatemetadataitem(...params)
    }

    createMetadataItem(...params) {
        createmetadataitem(...params)
    }

    getSingleMetadataItem(...params) {
        getsinglemetadataitem(...params)
    }

    deleteMetadataItem(...params) {
        deletemetadataitem(...params)
    }


    // Nfts APIs
    getNfts(...params) {
        getnfts(...params)
    }

    resyncNfts(...params) {
        resyncnfts(...params)
    }
    
    
    // Sfts APIs
    updateResyncnfts(...params) {
        updateresyncnfts(...params)
    }


}



module.exports = Utility;