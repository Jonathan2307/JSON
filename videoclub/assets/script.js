function createH1() {
    const titleBodyH1 = document.createElement('h1')
    titleBodyH1.setAttribute('class', 'h1 text-center text-light mb-4')
    let titleBodyH1_content = 'La selection du moment'
    titleBodyH1.innerHTML = titleBodyH1_content.toUpperCase()
    document.body.prepend(titleBodyH1)
};
window.addEventListener('DOMContentLoaded', createH1())

fetch('http://localhost:8888/JSON/videoclub/movies.json')
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
            };
            movie.innerHTML += `
                <div class="card mb-3 bg-dark" style="max-width: 540px ;">
                <div class="row  g-0">
                    <div class="col-md-4">
                    <img src="${element.poster_path}" alt="${element.original_title}" class="img-fluid border border-white mt-4">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body text-light bg-dark">
                        <h5 class="card-title fs-2">${element.original_title}</h5>
                        <p class="card-text scroller">${element.overview}</p>
                        <p class="card-text d-flex"><small class="text-warning text-center">${star}</small></p>
                        <p class="rateOnTen">soit ${element.vote_average}/10</p>
                    </div>
                    </div>
                </div>
                </div>`
        })
    })
    .catch(err => console.error(`erreur importation`))