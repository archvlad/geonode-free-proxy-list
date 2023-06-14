const axios = require("axios");

async function main() {
    let res = await axios(
        "https://proxylist.geonode.com/api/proxy-list?limit=500&page=1&sort_by=lastChecked&sort_type=desc&protocols=socks5"
    );
    res = res.data;
    for (let proxy of res.data) {
        console.log(`${proxy.ip}:${proxy.port}`);
    }
}

main();
