// Used to handle the search form submission and display the search result
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('searchForm').addEventListener('submit', async function (event) {
        event.preventDefault();
        const keyword = document.getElementById('searchInput').value;
    
        try {
            minimizeSearchBar();
            hideErrorMessage();
            removeLogoAndDescription();
            clearSearchResult();
            displayCardSkeleton();
            hideErrorMessage();

            // fetch data from server
            const response = await fetch(`http://localhost:3000/api/scrape?keyword=${keyword}`);

            // display error message if there is an error while fetching data
            if (response.ok) {
                const products = await response.json();

                // display error message if there is no result
                if (products.data.length === 0)
                    displayErrorMessage("No results found.", "Try searching for something else.")
                else 
                    displaySearchResult(products.data);
            }
            else {
                throw new Error('Error while fetching data.');
            }
        } catch (error) {
            // clear search result and display error message
            clearSearchResult();
            displayErrorMessage("Oops! Something went wrong.", "Error while fetching data. Try again later");
        }
    });
});


// used to display the search result
function displaySearchResult (products) {
    // clear the skeleton first
    clearSearchResult();

    // generate product card for each product then append it to the product container
    products.forEach(product => {
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
}

// used to clearn the search result page before displaying new result
function clearSearchResult () {
    var productContainer = document.getElementById('product-container');
    while (productContainer.firstChild) {
        productContainer.removeChild(productContainer.firstChild);
    }
}

// used to display the skeleton of product card while the data is being fetched
function displayCardSkeleton () {
    for (let i = 0; i < 12; i++) {
        const productCardSkeleton = new ProductCardSkeleton();
        document.getElementById('product-container').appendChild(productCardSkeleton);
    }
}

// used to minimize the search bar when the search button is clicked (only for the first time)
function minimizeSearchBar () {
    const topBar = document.getElementById('top-bar');
    topBar.style.width = '100%';
    topBar.style.height = '120px';
}

// used to remove the logo and description when the search button is clicked (only for the first time)
function removeLogoAndDescription () {
    const logo = document.getElementById('logo');
    const description = document.getElementById('description');
    if (logo) logo.remove();
    if (description) description.remove();
}

// used to display error message when there is an error while fetching data
function displayErrorMessage (message, description) {
    clearSearchResult();
    const errorMessage = document.getElementById('error-message');
    const errorDescription = document.getElementById('error-description');
    const errorContainer = document.getElementById('error-container');
    errorDescription.textContent = description;
    errorMessage.textContent = message;
    errorContainer.style.display = 'flex';
}

// used to hide the error message
function hideErrorMessage () {
    const errorContainer = document.getElementById('error-container');
    errorContainer.style.display = 'none';
}