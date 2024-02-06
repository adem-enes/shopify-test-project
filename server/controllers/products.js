import shopifyApp from '../shopify.js';

export const getProducts = async (req, res) => {
    const products = await shopifyApp.get(`/products.json`).then(res => res.data)
        .catch(err => ({ message: err.message }));

    res.send(products);
}

export const getProduct = async (req, res) => {
    const { id } = req.params;
    const product = await shopifyApp.get(`/products/${id}.json`).then(res => res.data)
        .catch(err => ({ message: err.message }));

    res.send(product);
}

export const getMetafields = async (req, res) => {
    const { id } = req.params;
    const metafields = await shopifyApp.get(`/products/${id}/metafields.json`).then(res => res.data)
        .catch(err => ({ message: err.message }));

    res.send(metafields);
}

export const updateProducts = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const product = { id };

    const metafields = await shopifyApp.get(`/products/${id}/metafields.json`).then(res => res.data.metafields)
        .catch(err => ({ message: err.message }));

    if (!metafields || metafields.length === 0) {
        product.metafields = [createMetafield('title_tag', title), createMetafield('description_tag', description)];

        const updatedProducts = await shopifyApp.put(`/products/${id}.json`, { product }).then(res => res.data)
            .catch(err => ({ message: err.message }));

        res.send(updatedProducts);
    }
    else {
        const updatedMetafields = [];
        const descriptionTag = await updateMetafields(metafields, 'description_tag', description, id);
        const titleTag = await updateMetafields(metafields, 'title_tag', title, id);

        updatedMetafields.push(descriptionTag);
        updatedMetafields.push(titleTag);
        res.send({ metafields: updatedMetafields });
    }
}

const updateMetafields = async (metafields, key, value, productId) => {
    const tag = metafields.find((item) => item.key === key);
    if (!tag) {
        const metafield = createMetafield(key, value);
        const postMetafield = await shopifyApp.post(`/products/${productId}/metafields.json`,
            { metafield: metafield }).then(res => res.data)
            .catch(err => ({ message: err.message }));

        return postMetafield;
    }

    tag.value = value;
    const updatedMetafields = await shopifyApp.put(`/products/${productId}/metafields/${tag.id}.json`,
        { metafield: tag }).then(res => res.data)
        .catch(err => ({ message: err.message }));

    return updatedMetafields.metafield;
}

const createMetafield = (key, value) => {
    return {
        "key": key,
        "value": value,
        "type": "single_line_text_field",
        "namespace": "global"
    }
}