// Function to fetch weather data from the API
async function getWeather(city) {
  const apiKey = '024cebb16ab181a64a5841ef35c3d70f'; // Replace with your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    alert('Failed to get weather data. Please check the city name.');
    return null;
  }
}

// Function to display weather data on the page
function displayWeather(data) {
  if (data) {
    const temperature = document.getElementById('temperature');
    const condition = document.getElementById('condition');
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    condition.textContent = `Condition: ${data.weather[0].description}`;
  }
}

// Event listener for the Get Weather button
document.getElementById('getWeatherBtn').addEventListener('click', async () => {
  const city = document.getElementById('city').value;
  if (city) {
    const weatherData = await getWeather(city);
    displayWeather(weatherData);
  } else {
    alert('Please enter a city name');
  }
});
