class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                .product-card {
                    border: 1px solid #F0F0F0;
                    height: 400px;
                    border-radius: 5px;
                    position: relative;
                }

                .image-container {
                    height: 200px;
                    width: 100%;
                    padding: 20px 0px;
                    background-color: #F7F7F7;
                }

                .image-container img {
                    height: 100%;
                    width: 100%;
                    object-fit: contain;
                    mix-blend-mode: multiply;
                }

                .product-name {
                    font-family: Geist-Medium;
                    overflow: hidden;
                    color: #232F3E;
                    display: -webkit-box;
                    -webkit-line-clamp: 2; /* Limit to 2 lines */
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                }

                .product-info {
                    padding: 2px 16px;
                }

                .product-details {
                    position: absolute;
                    padding: 0px 16px;
                    bottom: 0;
                    left: 0;
                }

                .rating-container {
                    display: flex;
                    align-items: center;
                }

                .star-rating {
                    display: flex;
                    align-items: center;
                    color: #FFD700;
                }

                .star-icon {
                    margin-right: 4px;
                }

                .product-price {
                    font-family: Geist-Bold;
                    color: #232F3E;
                    font-size: 22px;
                    padding: 0;
                    margin: 0;
                }

            </style>
            <div class="product-card">
                <div class="image-container">
                    <img src="" alt="product image" class="product-image">
                </div>
                <div class="product-info">
                    <p class="product-name"></p>
                    <div class="product-details">
                        <div class="rating-container">
                            <div class="star-rating"></div>
                            <p class="product-rating"></p>
                            <p class="product-number-of-ratings"></p>
                        </div>
                        <p class="product-price"></p>
                    </div>
                </div>
            </div>
        `;
    }

    set image(value) {
        this.shadowRoot.querySelector(".product-image").src = value;
    }

    set name(value) {
        this.shadowRoot.querySelector(".product-name").textContent = value;
    }

    set price(value) {
        this.shadowRoot.querySelector(".product-price").textContent = "$ " + value;
    }

    set rating(value) {
        this.shadowRoot.querySelector(".product-rating").textContent = value;
    }

    set numberOfRatings(value) {
        this.shadowRoot.querySelector(".product-number-of-ratings").textContent = value;
    }

    set starRating(rating) {
        const starRatingContainer = this.shadowRoot.querySelector(".star-rating");
        starRatingContainer.innerHTML = '';

        const roundedRating = Math.round(rating);
        for (let i = 1; i <= 5; i++) {
            const starIcon = document.createElement("span");
            starIcon.classList.add("star-icon");
            starIcon.innerHTML = i <= roundedRating ? "★" : "☆";
            starRatingContainer.appendChild(starIcon);
        }
    }
}

customElements.define("product-card", ProductCard);
