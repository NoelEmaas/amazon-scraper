document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('searchForm').addEventListener('submit', async function (event) {
        event.preventDefault();
        const keyword = document.getElementById('searchInput').value;
    
        try {
            clearSearchResult();
            const response = await fetch(`http://localhost:3000/api/scrape?keyword=${keyword}`);
            const data = await response.json();
            console.log(data);

            data.forEach(product => {
                const productCard = new ProductCard();
                productCard.link = product.link;
                productCard.image = product.image;
                productCard.name = product.name;
                productCard.price = product.price_whole + product.price_fraction;
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


function clearSearchResult () {
    var productContainer = document.getElementById('product-container');

    while (productContainer.firstChild) {
        productContainer.removeChild(productContainer.firstChild);
    }
}