# Weather App

![Weather App Print Screen](https://github.com/rodrigobacelli/projectmark-weather-test/blob/main/public/app-print.png?raw=true)

This is a Weather Application for the ProjectMark Front-End Test, that show the Weather for Joinville, San Francisco and Urubici


## Features

- Display the Weather for Joinville/SC (Brazil)
- Display the Weather for San Francisco/CA (USA)
- Display the Weather for Urubici/SC (Brazil)
- Display Humidity and Pressure for each city
- Dark and Light Theme


## Requirements

In order to run this project you need to make sure you have Node 22+ and NPM 9+ installed.

[Get Latest Node Version](https://nodejs.org/en/download)


## Environment Variables

To run this project you need to add the following variable in you .env file:

```
# Variable setting the refetch time in minutes of the API
VITE_WEATHER_REFETCH_TIME_IN_MINUTES=10

# Variable setting the OpenWeather API Key
VITE_OPEN_WEATHER_APP_KEY=<your-key-here>
```

In the project root folder there's a `.env.template` file with default .env vars as examples.


## Installation

To install the project you first need to clone, acess the project root folder and run the following command:

Clone the repository:
```bash
  git clone https://github.com/rodrigobacelli/projectmark-weather-test.git
```
Access the project root folder:
```bash
  cd projectmark-weather-test
```

Install project dependencies:
```bash
  npm install my-project
```


## Running Locally

With the repo cloned and installed, access the project root folder:
```bash
  cd projectmark-weather-test
```

Start the server:
```bash
  npm run dev
```

After the server start to run, you can access the application in your browser by accessing `http://localhost:<configured-port>`. By default, Vite runs the dev server in (http://localhost:5173/)[http://localhost:5173/], but you can customize the door by setting the flag in the start command:
```bash
  npm run dev -- --port=<port-number>
```

## Available commands

In the project directory, you can run:

```bash
  npm run dev
```
Runs the app in the development mode.

```bash
  npm run build
```
Builds the app for production to the build folder.

```bash
  npm run lint
```
Runs lint to check if the code is following the code styling rules 

## Need Help?

If you need help, open a new issue in the repo and one of our maintainers member will help you.


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## Roadmap

- Add Tests and Test Coverage
- Deploy the Application to GitHub Pages
- Create pages to detail each city weather, including forecast and more specific data
- Add End-to-End tests
- Analyze the necessity of Next.js usage


## Authors

- [@rodrigobacelli](https://www.github.com/rodrigobacelli)
