/*
*   This is a reusbale component that is used to display a loading preview animation when searching.
*/

class ProductCardSkeleton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                .skeleton {
                    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                    background-size: 200% 100%;
                    animation: loading 1.5s infinite;
                    border-radius: 4px;
                }

                .product-card-skeleton {
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
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .product-info {
                    padding: 2px 16px;
                }

                .product-details {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 45px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-top: 1px solid #F0F0F0;
                }

                .text-skeleton {
                    height: 15px;
                    width: 100%;
                    margin-top: 10px;
                }

                .price-skeleton {
                    height: 25px;
                    width: 30%;
                    margin-top: 20px;
                }

                .rating-skeleton {
                    height: 15px;
                    width: 40%;
                    margin-left: 16px;
                }

                .reviews-skeleton {
                    height: 15px;
                    width: 20%;
                    margin-right: 16px;
                }

                @keyframes loading {
                    0% {
                      background-position: 200% 0;
                    }
                    100% {
                      background-position: -200% 0;
                    }
                }

            </style>
            
            <div class="product-card-skeleton">
                <div class="image-container">
                    <img src="./assets/images/img-skeleton.png" alt="skeleton-image" class="skeleton-image">
                </div>
                <div class="product-info">
                    <div class="text-skeleton skeleton"></div>
                    <div class="text-skeleton skeleton"></div>
                    <div class="price-skeleton skeleton"></div>
                </div>
                <div class="product-details">
                    <div class="rating-skeleton skeleton"></div>
                    <div class="reviews-skeleton skeleton"></div>
                </div>
            </div>
        `;
    }
}

customElements.define("product-card-skeleton", ProductCardSkeleton);