const axios = require("axios");
import config from '../configs/config';

export default {
    async ancients(offset, limit) {
        const res = await axios.get(config.api.ancient + "/ancient",
            {
                params: {
                    offset, limit
                },
                withCredentials: true
            }
        );
        return res.data
    },
    async ancient(id) {
        const res = await axios.get(config.api.ancient + "/ancient/" + id,
            {
                withCredentials: true
            }
        );
        return res.data
    },
    async authors(offset, limit) {
        const res = await axios.get(config.api.ancient + "/author",
            {
                params: {
                    offset, limit
                },
                withCredentials: true
            }
        );
        return res.data
    },
    async author(author, offset, limit) {
        const res = await axios.get(config.api.ancient + "/author/" + author,
            {
                params: {
                    offset, limit
                },
                withCredentials: true
            }
        );
        return res.data
    }
}
