Investment Calculator
This project is an Investment Calculator web application built with React. It allows users to input various investment parameters and calculates the projected investment value over time.

Usage
Open the application in your browser.
Enter the following investment parameters:
Initial Investment
Annual Investment
Expected Return
Duration
View the calculated investment results displayed in a table format.

Components
App.jsx
This is the main component of the application. It manages the state of the investment parameters and passes them to other components.

Header.jsx
The header component displays the application's logo and title.

UserInput.jsx
This component contains input fields for the user to enter investment parameters. It uses the Input component for individual input fields.

Result.jsx
This component calculates and displays the investment results based on the input parameters. It shows the investment value, interest, total interest, and invested capital for each year.

Input.jsx
This is a reusable input component used in UserInput for creating input fields.
