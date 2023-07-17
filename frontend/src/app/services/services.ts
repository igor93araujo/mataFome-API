export const requestAPi = async (category: any) => {

    const url = `http://localhost:3001/product`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const request = await fetch(url, options)
    const data = await request.json();

    

   return data.filter((product: any) => product.categoryId === category);
}