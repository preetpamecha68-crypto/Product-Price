document.getElementById('productInput').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    try {
        const response = await fetch('https://product-price-thv2.onrender.com/predict', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        document.getElementById('result').innerText = `Product: ${data.name}, Price: ₹${data.selling_price}`;
    } catch (error) {
        console.error('Error:', error);
    }
});
