const base_url =  'https://youtube-v2.p.rapidapi.com'


export const SearchVideos = async (param) =>{
    const response = await fetch(`${base_url}/${param}`, {
        method: "GET",
        headers: {
            'x-rapidapi-key': 'bb65b5652fmsh0f7f08d5012eca5p155fa6jsn4eb15004d303',
		'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
        }
    })
    const result = await response.json();
    return result;
}