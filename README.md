# Cat Display App - React + TypeScript + Vite

This project is a simple web application that displays random cat data. It is built using React, TypeScript, and Vite.


## Description of Main Files and Directories

- `App.tsx`: This is the main component of the application.
- `components/CatCard.tsx`: This component is responsible for displaying the individual cat data.
- `contexts/CatContext.tsx`: This context provides the cat data to the components that need it.
- `hooks/useFetchCat.ts`: This custom hook is used to fetch the cat data from the API.
- `main.tsx`: This is the entry point of the application.
- `services/api.ts`: This file contains the function to call the API.

## How to Run the Project

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies with `npm install`.
4. Run the project with `npm run dev`.

## How to Build the Project

1. Navigate to the project directory.
2. Build the project with `npm run build`.

The built files will be located in the `dist` directory.

## ESLint Configuration

The project uses ESLint for linting. The configuration can be found in the `.eslintrc.js` file. If you want to expand the ESLint configuration, please refer to the original README.md file.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[AGPL](https://choosealicense.com/licenses/agpl-3.0/)