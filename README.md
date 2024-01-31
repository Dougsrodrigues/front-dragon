# Dragon Frontend Dev Challenge

## Objective
Write aplication for Dragon Frontend, which should be a single-page web application using React in either TypeScript or JavaScript.

## Stack

- **Framework**: Vite (React + TypeScript)
- **HTTP Requests**: Axios + React Query
- **Styling**: Sass
- **Test**: Jest, React testing library and MSW

## Design Concerns

- **Simplicity, Legibility and Code Readabilit** A modular construction approach was adopted, applying concepts such as custom pattern hooks and single responsibility. The objective was the easily understandable and modifiable codebase.

## Notes

 ### Authentication
  For authentication, currently it is only being verified whether the value saved in the localhost after login is true or false. If the verification results as false, the user will be redirected to the login page, as we can see in the ProtectedRoutes component.

  A more suitable approach would be to work with strategies like JWT, for example. Considering that we are working with axios, we could create an interceptor to check the status code of the requests. If it returns 401, we would handle that response accordingly.

## Running the Project

1. Clone the repository:
  ``git clone https://github.com/Dougsrodrigues/front-dragon``

2. Navigate to the project directory:
``cd front-dragon``

3. Install dependencies:
``npm install``

4. Start the development server:
``npm run dev``

5. Login - Enter with any email and password

