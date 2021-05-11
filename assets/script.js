fetch('http://localhost:8888/JSON/movies.json')
    .then(resp => resp.json())
    .then(function (jsonContent) {
        jsonContent.results.forEach(element => {
            let votedRate = Math.floor(element.vote_average / 2);
            let star
            switch (votedRate) {
                case 1:
                    star = '\u2605 \u2606 \u2606 \u2606 \u2606'
                    break;
                case 2:
                    star = '\u2605 \u2605 \u2606 \u2606 \u2606'
                    break;
                case 3:
                    star = '\u2605 \u2605 \u2605 \u2606 \u2606'
                    break;
                case 4:
                    star = '\u2605 \u2605 \u2605 \u2605 \u2606'
                    break;
                case 5:
                    star = '\u2605 \u2605 \u2605 \u2605 \u2605'
                    break;
                default:
                    break;
            }
            movie.innerHTML += `
                <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="${element.poster_path}" alt="${element.original_title}" class="img-fluid">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${element.original_title}</h5>
                        <p class="card-text scroller">${element.overview}</p>
                        <p class="card-text" class="stars"><small class="text-muted">${star}</small></p>
                    </div>
                    </div>
                </div>
                </div>`

        })



    })
    .catch(err => console.error(`erreur importation`))

// \u2606 empty
// \u2605 full