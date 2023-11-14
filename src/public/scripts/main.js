document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('searchForm').addEventListener('submit', async function (event) {
        event.preventDefault();
        const keyword = document.getElementById('searchInput').value;
    
        try {
            const response = await fetch(`/api/scrape?keyword=${keyword}`);
            const data = await response.json();
            console.log(data);

            data.forEach(product => {
                const productCard = new ProductCard();
                productCard.image = product.image;
                productCard.name = product.name;
                productCard.price = product.price;
                productCard.rating = product.rating;
                productCard.numberOfRatings = product.numberOfRatings;
                productCard.starRating = parseFloat(product.rating.split(' ')[0]);
                document.getElementById('product-container').appendChild(productCard);
            });

        } catch (error) {
          console.error('Error fetching data:', error);
        }
    });
});