Time-Microservice
------------------------

This is just a simple api service to obtain a timestamp from a date string and vice versa according to the challenge from [Free Code Camp](https://www.freecodecamp.com/challenges/timestamp-microservice)

#### Example Usage
`https://localhost:8080/1451631600`  
`https://localhost:8080/January%201,%202016`

#### Example Response
`{ unix: 1451631600, natural: "January 1, 2016" }`

#### Reflection  
I chose to use moment.js as a library to work with the dates because I liked the way that it could accept date strings as well as validate them. I suppose that datejs would be another option to explore. Of course, this could also be done with some vanilla javascript as the requirements of the challenge were not too difficult. But I liked that the library already accepts natural language strings. So in the spirit of DRY, moment worked for me.
