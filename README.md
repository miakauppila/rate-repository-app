# Rate Repository App

- Part 10 of the Full Stack Open course  
- This mobile app was bootstrapped with Expo.
- The app has the following properties:  
    - user sign in/out  
    - sign up for new users
    - view all reviewed repositories
    - signed in user can create reviews
    - view reviews created by the signed in user

## Technologies used in this project:
- Expo CLI 
- React Native, React Router Native  
- Apollo Client, GraphQL
- Formik & Yup
- Jest & React Native Testing Library
- ESLint

## How to run
- The App runs with a separate backend server providing an Apollo GraphQL API, that can be cloned from <a href="https://github.com/fullstack-hy2020/rate-repository-api" target="_blank">here</a>. 
- Backend server should be set up and started. 
- For the Rate Repository App, begin with installing dependencies: `npm install`
- Open Expo developer tools in the browser: `npm start`
- From Expo dev tools screen you can choose to run the App in web browser or eg. Android device/emulator
- To run the App on Android emulator you can also use: `npm run android`
