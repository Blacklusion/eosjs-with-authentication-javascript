const { JsonRpc } = require('eosjs');
const fetch = require('node-fetch');

const token = "YOUR_TOKEN_HERE"
const endpoint = "https://pro.wax.oneapi.dev"

/**
 * Create rpc with Bearer token
 */
const rpc = new JsonRpc(endpoint, {
    fetch: ((input, init) =>
            fetch(input, {...init, headers: {
                    "Authorization": "Bearer " + token
                }})
    ),
});

/**
 * Will log /v1/chain/get_info request if authentication is working
 * Will log "invalid json response body at ... " if authentication failed
 */
rpc.get_info().then(result => console.log(result))
