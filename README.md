Welcome to this workout project.

# start with installing the node modules
    `npm install` or `yarn install`

# Create a .env file and add two variables in it.
    REACT_APP_DB_LINK(it is important to add REACT_APP as prefix or it won't work) 
    MONGO_URI

# For dev mode :
    Run `npm run api` and `npm start` in two different terminals or using concurrently

# For Prod mode: 
   step 1 : Run `npm run build`
   step 2 : Run `npm run api`
   You will get an optimized version and it's already being served on your local system.