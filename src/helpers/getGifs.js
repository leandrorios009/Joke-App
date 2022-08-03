export const getGifs = async( category ) => {
    const apiKey = `MP4LvTxtlroPeD7T6ryWp1T7bUJXgFFT`
    //const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${categoty}&limit=25&offset=0&rating=g&lang=es`
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ category }&limit=25&offset=0&rating=g&lang=es`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    })) 
    return gifs
}