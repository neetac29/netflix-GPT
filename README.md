# Netflix-GPT

- Create React App
- Configured TailwindCSS
- Header
- Routing
- Login Form 
- Sign Up Form ( sign in and sign up page is single page just toggling based on state of isSignIn variable)
- Form Validation
- UseRef Hook
- Firebase setup
- Deploying app to production
- Create SignUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implement Sign out
- Update Profile
- bugfix: sign up user displayName and profile picture update
- bugfix: if the user is not logged in redirect /browse to login page and vice-versa
- Unsubscribe to the onAuthStateChanged callback
- added hardcode urls in constant file
- register TMDB API and create an app & get access token
- get Date from TMDB now playing movies list API
- custom hook for now playing movies
- create movieSlice
- update store with movies data
- planning for mainContainer & secondary container
- fetch data for trailer video
- update store with trailer video data
- embedded the youtube video and make it autoplay and mute
- tailwind classes to make main container look awesome


# Features
-Login/Sign-Up
    - Sign In / Sign up Form
    - Redirect to Browse Page

- Browswe ( after authentication )
    - Header
    - Main Movie
        - Trailer in Background
        - Title & Description
        - Movie Suggestions
            - MovieLists * N

- NetflixGPT
    - Search Bar
    - Movie Suggestions
