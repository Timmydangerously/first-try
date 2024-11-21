const base_url =  'https://youtube-v2.p.rapidapi.com'


export const Searchvideos = (query) =>{
    const response = fetch(`${base_url}/${query}`, {
        method: "GET",
        headers: {
            'x-rapidapi-key': 'bb65b5652fmsh0f7f08d5012eca5p155fa6jsn4eb15004d303',
		'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
        }
    })
    const result = response.json();
    return result;
}