const axios = require("axios");
import config from '../configs/config';

export default {
    search({ query, offset, limit }, callback, fallback) {
        axios.get(config.api.ancient + "/search", {
            params: {
                q: query,
                offset: offset,
                limit: limit
            },
            withCredentials: true
        }).then(callback).catch(fallback);
    },
    ancient(id, callback, fallback) {
        axios.get(config.api.ancient + "/ancient/" + id, {
            withCredentials: true
        }).then(callback).catch(fallback);
    },
}
