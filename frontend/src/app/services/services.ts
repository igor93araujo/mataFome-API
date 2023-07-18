export const requestAPi = async (category: any) => {

    const url = `http://localhost:3001/product`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.filter((product: any) => product.categoryId === category);
    } catch (error) {
        console.log(error);
    }
}