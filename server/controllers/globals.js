import shopifyApp from '../shopify.js';

export const getGlobals = async (req, res) => {
    const query = req.query.info;
    const global = await shopifyApp.get(`/${query}.json`).then(res => res.data)
        .catch(err => ({ message: err.message }));

    res.send(global);
}