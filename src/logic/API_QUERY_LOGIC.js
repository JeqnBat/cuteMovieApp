// key d123d684
// VARIABLES ______________________________________________ */
 /**
  * <b>DESCR:</b><br>
  * All variables needed here
  */
  const errorMsgs = {
    'key' : 'Enter you API Key !',
    'title' : 'Enter a movie title !'
  }

  const requiredFields = {
    'key' : document.getElementById('key'),
    'title' : document.getElementById('title')
  }

// FORM VALIDATOR _________________________________________ */
 /**
  * <b>DESCR:</b><br>
  * Takes an HTML form NODE & checks if it has been completed
  *
  * @function
  * @param {number} inputsNb the number of inputs to check
  * @param {object} form the HTML collection containing the form node
  *
  * @returns {boolean} form has been validated ? true : false
  */
 function formValidator(inputsNb, form) {
   header.innerHTML = 'KIKOO LES F . D . P'

   let validatedInputs = 0

   for (let i = 1; i < inputsNb+1; i++) {
     let input = form[i]
     let inputIsFilled = input.value.trim()

     if (inputIsFilled) {
       requiredFields[input.id].className = ''
       validatedInputs = validatedInputs + 1
     } else {
       requiredFields[input.id].classList.add('is-required')
       header.append(errorMsgs[input.id])
     }
   }

   if (validatedInputs === inputsNb) {
     return true
   } else {
     return false
   }
 }
// GET MOVIE ______________________________________________ */
 /**
  * <b>DESCR:</b><br>
  * Fetch data from OpenMovieDataBase & return JSON file w/ results
  *
  * @function
  * @param {string} url The query to fetch
  */
 const getMovie = async (url) => {
   try {
     let response = await fetch(url)
     let json = await response.json()
     displayResult(json)
   } catch(err) {
     console.log(err)
   }
 }
// DISPLAY RESULT _________________________________________ */
 /**
  * <b>DESCR:</b><br>
  * Displays JSON data inside the DOM
  *
  * @function
  * @param {object} results The JSON data from the server
  */
 function displayResult(fromJson) {
  result.innerHTML = ''

  let array = Object.entries(fromJson)

  for (let i = 0; i < array.length; i++) {
    if (array[i].includes('Ratings')) {
      result.innerHTML += `<p><b>${array[i][0]}</b> : <br>`
      for (let j = 0; j < array[i][1].length; j++) {
        result.innerHTML += ` - ${array[i][1][j].Source} : ${array[i][1][j].Value} <br>`
      }
    } else if (array[i].includes('Poster')) {
      result.innerHTML += `<img src="${array[i][1]}">`
    } else {
      result.innerHTML += `<p><b>${array[i][0]}</b> : ${array[i][1]}</p>`
    }
  }
 }
// QUERY BUILDER __________________________________________ */
 /**
  * <b>DESCR:</b><br>
  * Builds query's URL based on the form values
  *
  * @function
  * @param {HTMLNodes} inputs All the inputs form
  * @param {string} url The url to fetch
  *
  * @returns {url} the url completed w/ the inputs values
  */
 function queryBuilder(inputs, url) {
   if (inputs[1].value.trim()) {
     url += inputs[1].value
   } else {
     return
   }
   if (inputs[2].value.trim()) {
     url += '&t=' + inputs[2].value
   }
   if (inputs[3].value.trim()) {
     url += '&y=' + inputs[3].value
   }
   if (inputs[4].value.trim()) {
     url += '&type=' + inputs[4].value
   }
   if (inputs[5].value === 'full') {
     url += '&plot=' + inputs[5].value
   }
   if (inputs[6].value === 'xml') {
     url += '&r=' + inputs[6].value
   }
   return url
 }
// SEARCH BUTTON CLICK ____________________________________ */
 /**
  * <b>DESCR:</b><br>
  * Handling the "search" button click event
  *
  * @function
  */
 button.addEventListener('click',  () => {
   // SI VALIDATOR RENVOIE TRUE ALORS
   if (formValidator(2, document.forms[0])) {
     // Fetch la requête
     getMovie(queryBuilder(document.forms[0], 'http://www.omdbapi.com/?apikey='))
   }
 })