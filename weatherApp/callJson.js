const apiKey = "4d8fb5b93d4af21d66a2948710284366";
const input = document.querySelector(".top-banner input");
const url = `https://api.openweathermap.org/data/2.5/weather?q=fontaine-la-mallet&appid=${apiKey}&units=metric&lang=fr`;

fetch(url)
    .then(response => response.json()
        .then(data => {
            console.log(data);
            const {
                main,
                sys,
                weather,
                name,
                dt
            } = data
            const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;

            console.log(`ville ${name}`);
            console.log(`date ${dDate}`);
            console.log(`temperature actuelle ${Math.round(main.temp)}`);
            console.log(`temperature ressentie ${Math.round(main.feels_like)}`);
            console.log(`temperature max ${Math.round(main.temp_max)}`);
            console.log(`temperature min ${Math.round(main.temp_min)}`);

            const dDate = new Date(dt * 1000);

            const sunset_date = new Date(sys.sunset * 1000);
            sunset_minutes = sunset_date.getMinutes();
            sunset_minutes = ('0' + sunset_minutes).slice(-2);
            sunset_hours = sunset_date.getHours();
            sunset_hours = ('0' + sunset_hours).slice(-2)

            const sunrise_date = new Date(sys.sunrise * 1000);
            sunrise_minutes = sunrise_date.getMinutes();
            sunrise_minutes = ('0' + sunrise_minutes).slice(-2);
            sunrise_hours = sunrise_date.getHours();
            sunrise_hours = ('0' + sunrise_hours).slice(-2)



            console.log(`Heure coucher soleil ${sunrise_hours}:${sunrise_minutes}`);
            console.log(`Heure lever soleil ${sunset_hours}:${sunset_minutes}`);
            console.log(`meteo actuelle ${weather[0]['description']}`);
            console.log(`icone ${weather[0]['icon']}`);


        })
        .catch(function (err) {
            console.log('erreur de json');
        }))