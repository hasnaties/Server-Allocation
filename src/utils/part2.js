const { nextServerArray } = require('./part1')

/* 
    A Global array to keep track for both
    server allocation and deallocation functions.
*/
const serverArray = []

/* 
    -- Allocates Server for regions.
    -- returns String of available server
    for specific region.
*/
const allocate = (region) => {

    // -- For First server within region.
    if (!serverArray.some((obj) => obj.region == region)) {
        serverArray.push({
            region,
            server: 1
        })
        return region+1;
    }

    // Get alloted server for specific region.
    const tempArray = serverArray.filter((obj) => obj.region == region);
    const allocatedServersArray = [];

    tempArray.forEach((obj) => {
        allocatedServersArray.push(obj.server)
    })

    //-- Gets NextServer
    const availableServer = nextServerArray(allocatedServersArray);

    // Allocating and returning the available server.
    serverArray.push({ region, server: availableServer});
    delete tempArray;
    return region+availableServer;
}

/* 
    -- Deallocates Server for regions.
    -- returns number of new array size after
    removing the server.
*/
const deallocate = (server) => {

    // -- Getting server No.
   const freeServer = server[server.length - 1];
   
   // Searching for the server Index.
   const serverIndex = serverArray.findIndex((element) => {
        return element.server == freeServer
    })
    
    // -- Removing Server from allocated array.
    if (serverIndex !== -1) {
        serverArray.splice(serverIndex, 1)[0]
        return true;
    }

    // return false;
}

module.exports = {
    allocate,
    deallocate
}