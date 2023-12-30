

Total 49 videos.  

20+ hours of video tutorials.

==========================

ReactDemo 1: 

Goal: 

1. Set up React development environment 

2. Run a React program 

3. Write basic JSX 

4. Create React component 

5. Passing data through React props 

====================================

React Demo 2: 

Goals: 

1. Continue on ReactDemo1 and improve on CSS for Form control. 

2. Write React Hooks to create component's State and change State. 

   const [state, setState ] = useState( '' )

3. Form handling in React and how to specify controlled Form elements. 

4. React Chrome Developer tool

(good ref: https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)

================================================

React Project 1:   Movie Search Web App 

Goal: 

1. Write a API function to retrieve movie data from a API website.

const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
       
2. Write a Search component to get the query string for movie search.

3. Retrieve the movie information from API website.

4. Present the movie information in an interesting UI ( flip card).

Approach:   Model <-> Control <-> View

full poster image path: 

`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}` 

========================================================

React Project 1:  Deployment on Firebase:  

10 Steps: 

1. Create account on google firebase   
2. Create a project on firebase   
3. In React project app folder, npm install firebase-tools -g 
4. At terminal: login to firebase:  firebase login
5. Create build file for React:   npm run build
6. After login,  enter:  firebase init
7. At terminal, enter:  firebase deploy
8. Choose firebase project created earlier 
9. Choose hosting,  directory prompt:  build
10. Answer NO to all other questions

Once successfully deployed, will be given a URL to your ReactJS app 

===================================================

React Project 2: useState,  useEffect in a API data retrieval application. 

Goals:     <ShowCat />     <Resource /> 

1. Make components reusalble.  <Resource  />  <ShowCat />  <Header /> 




API database: 

//    const webURL = 'https://api.thecatapi.com/v1/images/search/?limit=3&page=100&order=DESC'


================================================

React Project 3:  useState, useEffect, and Reuse components 

Goal:    <ShowDog />   <Resource /> 

1. Access Dog API database, and reuse the components of Resource and ShowCat to ShowDog. 

API database URL: 

const myDogPath = 'https://dog.ceo/api/breeds/image/random/50'


================================================

React Project 4:  createContext,  useReducer,  useContext 

Goal:   write a To-do List for learning ReactJS. 

1. Create a Header component 

2. Write a Create component to add a Task 

3. Write a Read component to display the list of Tasks

4. Write a Update component to update the status of completion of a Task 

5. Write a Delete component to delete a Task 

6. To write the Task list on local storage 


Model (M): data? Task - { id, title, done}, state { trans: [ tasks ]}

View (V):  <Header> <TaskInput> <ListTask> <TaskDetails>  

Controller (C): APP - layout, Add -> createTask,  Update -> update Done, Delete -> deleteTask
      Reading: -> ListTask display state.trans 
      <GlobalStore>  - keep and maintain the state information. 

=============================================================

React Project 5:   SPA 

Goal:  learn React Router Dom features. 

1. Integrate Project 1, 2, 3, 4 into Project 5. 

2. Use  <Link to = '/' > Home </>  and  <Route path='/' component={ Home } /> 

main illustration in slides. 


npm i react-router 
npm i react-router-dom@6.0.0-beta.0

=======================================

React Project 6:  Pet Shop SPA 

Goal:  full web SPA.  See interface design. 

1. Implement routing and conditional navigation.

2. Invoke HTTP request to Backend server for CRUD. 

3. Basic security using JWT.  (Json Web Token)



Model: 

  userProfile = { 
      name,
      email,
      password,
      memtype
  } 

  From Server API  return JSON: 

      res.status(201).json( {
            success: true, 
            data : {
                    _id: user._id,
                    email: user.email,
                    name: user.name,
                    memtype: user.memtype },
            token:  token 
        });

View: 

      see UI menu driven routing. 

Controller: 

    const keys = {

    WEB_BASE_URL: 'http://localhost:5000/', 
    
    API_UPDATE_USER: 'api/trans/updateuser/',
    API_DELETE_USER: 'api/trans/deleteuser/',
    API_ADD_USER:'api/trans/adduser',
    API_LOGIN: 'api/trans/login'

}



=======================================

{/*<h1><span style={{color:'orange'}}>{name}</span>'s Profile</h1>

        <div className='profile-info'>
          <div className='profile-content'>
            <p><b>Your name:</b> {name}</p>
            
            <p><b>Your email:</b> {email}</p>
            
            <p><b>Your UserID:</b> {userid}</p>
            
            <p><b>Membership type:</b> {memtype}</p>
          </div>
  </div>*/}