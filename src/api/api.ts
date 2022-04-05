const url = 'https://artisant.io/api/products';

export const getProducts = async () => {
    const res = await fetch(url);
    const { data } = await res.json();
    return data;
};