const API = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLBKadB95sF44svAf6GEN3TTFPJwFdwrmm&part=snippet&maxResults=50'
const content = document.getElementById('content')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '26fda96dc2msha80309a3e31cfe6p126f8fjsn361dc291c1f9',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function FetchData(UrlAPi){
    const response = await fetch(UrlAPi,options)
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const videos = await FetchData(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
        `).slice(0,8).join('')}
       `
       console.log(view)
       content.innerHTML = view;
    }catch (error){
            console.log(error)
    }
})();