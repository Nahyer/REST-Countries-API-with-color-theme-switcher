document.addEventListener('DOMContentLoaded', function() {
    fetchCountries();
});
async function fetchCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        console.log(data[0]);

        data.forEach(country => {
            let countries = document.querySelector('.countries');
            let divC = document.createElement('div');
            divC.innerHTML = `
                <img src="${country.flags.png}" alt="">
                <div>
                <div class="cont">
                    <h2>${country.name.common}</h2>
                    <p>Population: <span class="population">${country.population}</span></p>
                    <p>Region: <span data-region="${country.region}">${country.region}</span></span></p>
                    <p>Capital: <span class="capital">${country.capital}</span></p>
                    </div
                </div>
            `;
            divC.className = 'country';
            countries.appendChild(divC);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

// Add event listener for region selection
function filterCountriesByRegion(region) {
    const countries = document.querySelectorAll('.country');
    countries.forEach(country => {
        const regionElement = country.querySelector('span[data-region]');
        const countryRegion = regionElement ? regionElement.textContent : null;
        if (region === 'Filter by Region' || countryRegion === region) {
            country.style.display = 'block';
        } else {
            country.style.display = 'none';
        }
    });

}

// Add event listener for dark mode toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', toggleDarkMode);

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}