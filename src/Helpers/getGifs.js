export const getGifs = async( category ) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=Rr2CoVmweoYG9cVdhhH6Ybn6p9IySvyv&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    }) 

    return gifs;
}