function key_down(e) {
	if(e.keyCode == 13) {
		search();
	}
}

function search(){
	const app = document.getElementById('root')
	const logo = document.createElement('img')
	const container = document.getElementById('div')
	const inputTitle = document.getElementById('Name')
	const openAddress = 'http://omdbapi.com/?t=' + inputTitle.value + '&apikey=a5834c47'
	
	if ($(container).children().length > 1){
		$("div").remove();0
	}
	container.setAttribute('class', 'container')

	var request = new XMLHttpRequest()
	request.open('GET', openAddress, true)

	request.onload = function() { 
		var data = JSON.parse(this.response)
		var search = data.Title.toString()
		if (request.status >= 200 && request.status < 400) {
			
			if (document.getElementById('Name').value == "") {
				alert("Please enter a title or partial title.")
			}
			
			const card = document.createElement('div2')
			card.setAttribute('class', 'card')
			
			const h1	   = document.createElement('h1')
			const p        = document.createElement('p') 
			const cast     = document.createElement('cast')
			const rel      = document.createElement('rel')
			const rate     = document.createElement('rate')
			const director = document.createElement('director')
			const reviews  = document.createElement('reviews') 
			
			if (data.Ratings[1] != undefined){
				reviews.textContent = `${data.Ratings[1].Source} : ${data.Ratings[1].Value}`
			}
			
			h1.textContent       = data.Title
			p.textContent 		 = `${data.Plot}`
			cast.textContent     = `Cast: ${data.Actors}`
			rel.textContent      = `Released: ${data.Year}`
			rate.textContent     = `Rated: ${data.Rated}`
			director.textContent = `Directed by ${data.Director}`
			
			container.appendChild(card)
			card.appendChild(h1)
			card.appendChild(p)
			card.appendChild(rel)
			card.appendChild(director)
			card.appendChild(rate)
			if (reviews != null){
				card.appendChild(reviews)
			}
			card.appendChild(cast)

			app.appendChild(container)
	}
		else {
			const errorMessage = document.createElement('marquee')
			errorMessage.textContent = `Request Failed`
			app.appendChild(errorMessage)
		}
	}
	request.send()
}

// function waitNext(e){
	// while(e.keyCode != 13){
		
	// }
	// window.location.reload();
// }
