document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('searchForm').addEventListener('submit', async function (event) {
        event.preventDefault();
        const keyword = document.getElementById('searchInput').value;
    
        try {
            const response = await fetch(`/api/scrape?keyword=${keyword}`);
            const data = await response.json();
            console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    });
});

