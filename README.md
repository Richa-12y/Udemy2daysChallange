# Image Search App

This React application allows users to search for images using the Unsplash API. Users can enter a search term, and the app displays a list of relevant images.

## Getting Started

Follow the instructions below to get the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/image-search-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd image-search-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your Unsplash API key:

   ```env
   REACT_APP_UNSPLASH_API_KEY=your_api_key_here
   ```

   Replace `your_api_key_here` with your actual Unsplash API key.

5. Start the development server:

   ```bash
   npm start
   ```

   The app should now be running at [http://localhost:3000](http://localhost:3000).

## Usage

1. Open the app in your web browser.

2. Enter a search term in the search bar and press Enter.

3. View the list of images related to the search term.

## Components

### App

The main component that serves as the entry point for the application. It handles state related to images and passes data to the `SearchBar` and `ImageList` components.

### ImageList

A component responsible for rendering a list of images. It receives an array of image data as props and maps through the array to render individual `ImageShow` components.

### ImageShow

A simple component that displays a single image. It receives image data as props and renders the image with its description.

### SearchBar

A component that provides a search input field. It handles user input and triggers a search when the user submits the form.

## Dependencies

- [axios](https://github.com/axios/axios): Used for making HTTP requests to the Unsplash API.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
