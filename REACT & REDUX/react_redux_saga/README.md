# Interview Question `React`

- what is Provider ?

      provider main work is to connect to react js ko redux se connect karna and we install on react-redux library.

- what is store ?

        we store all data of our app stor ka input reducer and store ka output create stor function.

- what is action ?

        action is nothing but plane javaScript function.
        get data from react js.
        send data to reducer after process.
        must have type key in return statement.
        much sync type with reducer.

- what is reducer ?

        Reducer handle data for store
        Update data in store
        Rules:- 1) Need Root-Reducer.
                2)Reducer must return same value.
                3)The reducer must have some initial values.

- switch statement in reducer ?

        this is use for reduce the multi use of if-else in code it's look mess so we prefer the switch case there then the if-else

- Get Data in component From Redux ?

        Make header and Main Component
        Add image and css
        Send Data form aAin Component
        Get data in header component

- what is useSelector and types of uses ?

        useSelector is react-redux hook
        and the main work for Selector is to fetch the data from redux to give to react

- what is useSelector?

        fetch data from redux to react js
        we can use the useSelector

# Bounce Point

1. the flow of the redux :- first reducer take data from action and place in store file
2. action and reducer they don't need to import/export the file to each other the connect throw the store
