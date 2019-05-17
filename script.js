const MusicAPI = "https://api.musixmatch.com/ws/1.1/";
const APIKey= "a2870731fab086760a6e7e1a767ceb86";

const SeatGeekAPI= "https://api.seatgeek.com/2/";
const SeatGeekClientID = "MTM4MDgwMDN8MTU0MTM3MTEwMi45MQ";
const ClientSecret="d263792d50e5ee4cd24505500b6c159d5a69d9596e055fa9a416b85e482c4cd4";



function getDataFromApiSongs(endpoint, artistName, callback) {
  $.ajax({
		type: 'GET',
		url: MusicAPI + endpoint,
		data: Object.assign({
			apikey: APIKey,
			format: 'jsonp',
			callback: 'jsonpCallback'
		}),
		dataType: 'jsonp',
		jsonpCallback: 'jsonpCallback',
		contentType: 'application/json'
	}).done(callback);
}


function getDataFromApiConcerts(endpoint, artistName, callback) {
  
  $.ajax({
      data: Object.assign({ 
          client_id: SeatGeekClientID, 
          client_secret: ClientSecret,
          }), 
      contentType: 'text/plain', 
      type: "GET", 
      url: SeatGeekAPI + endpoint}).done(callback);
}

$("#searchForm").submit(function(event) {
  event.preventDefault();
  let newChar = "-";
  $(".container").removeClass("hidden");
  
  var artistName = $(".query").val();
  
  getDataFromApiSongs(`track.search?q_artist=${artistName}&page_size=10&page=1&s_track_rating=desc`, artistName, (response) =>{
      
        const { message:{ body: {track_list = []}}} = response;
        
        let songDOM = '';
        track_list.map((item,index) => {
            const {track:{ track_name,artist_name, album_name }} = item;
            songDOM += `<li class="songsAnimation list-item-song" aria-live="assertive" tabindex=0><b>Title</b>: "${track_name}" by ${artist_name}, <i>${album_name}</i>`;

        });

        if (!track_list.length){
            songDOM = `<h3>No Songs found. Seach for another artist</h3>`;
          }
        let songsList = document.getElementById('songsList')
        songsList.innerHTML = songDOM;
      
        
    getDataFromApiConcerts(`events?performers.slug=${artistName.split(' ').join(newChar)}`, artistName,(eventsResponse)=>{

          let concertDOM = '';
          const {events} = eventsResponse;
          events.map((event) =>{

              const {title, datetime_local, venue:{extended_address, name}} = event;

              let newDateTime = new Date(datetime_local);

              concertDOM += `<li class="concertsAnimation" tabindex=0><strong><a href="http://seatgeek.com/${artistName.split(' ').join(newChar)}-tickets">${title}</a></strong> at the ${name}, <em>${extended_address}</em>, on ${newDateTime.toLocaleString()}</li><br>`;
          })
          
          if (!events.length){
            concertDOM = `<h3>No Concerts found. Search for another artist</h3>`;
          }
          let concertsList = document.getElementById('concertsList');
          concertsList.innerHTML = concertDOM;
      })
      $(".query").val("");
    });
});