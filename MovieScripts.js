function search(){
	const app = document.getElementById('root')
	const logo = document.createElement('img')
	const container = document.createElement('div')
	
	const inputTitle = document.getElementById('Name')
	
	const openAddress = 'http://omdbapi.com/?t=' + inputTitle.value + '&apikey=a5834c47'
	container.setAttribute('class', 'container')

	var request = new XMLHttpRequest()
	request.open('GET', openAddress, true)
	request.onload = function() {
	  // Begin accessing JSON data here
	  var data = JSON.parse(this.response) //Need to improve search functionality, need to switch to other APIs, need to style
	  if (request.status >= 200 && request.status < 400) {
		
			if(data.Title.toLowerCase == document.getElementById('Name').value.toLowerCase){
			  const card = document.createElement('div')
			  card.setAttribute('class', 'card')

			  const h1 = document.createElement('h1')
			  h1.textContent = data.Title

			 const p = document.createElement('p')
			 p.textContent = `${data.Plot} Directed by ${data.Director}. Cast: ${data.Actors}. Released ${data.Year}, Rated ${data.Rated}, Reviews: ${data.Ratings[1].Source} : ${data.Ratings[1].Value}`

			  container.appendChild(card)
			  card.appendChild(h1)
			  card.appendChild(p)
			  app.appendChild(container)
			}
			else {
				if (data.Title.toLowerCase.includes(document.getElementById('Name').value.toLowerCase)){
			  const card = document.createElement('div')
			  card.setAttribute('class', 'card')

			  const h1 = document.createElement('h1')
			  h1.textContent = data.Title

			  const p = document.createElement('p')
			  
			 p.textContent = `${data.Plot} Directed by ${data.Director}. Cast: ${data.Actors}. Released ${data.Year}, Rated ${data.Rated}, Reviews: ${data.Ratings[1].Source} : ${data.Ratings[1].Value}`
			  
			  container.appendChild(card)
			  card.appendChild(h1)
			  card.appendChild(p)
			  app.appendChild(container)
				}
			}
		
	  } 
	  else {
			const errorMessage = document.createElement('marquee')
			errorMessage.textContent = `Gah, it's not working!`
			app.appendChild(errorMessage)
		}
	}
	request.send()
}