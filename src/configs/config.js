var configs = {
    production: {
        org: "HPiFu",
        api: {
            ancient: "https://api.ancient.hatlonely.com",
        }
    },
    development: {
        org: "HPiFu",
        api: {
            ancient: "http://127.0.0.1:16062",
        }
    }
}

export default configs[process.env.NODE_ENV]
