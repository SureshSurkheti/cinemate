export default defineEventHandler(async event => {
    const config = useRuntimeConfig(event)
    const {AccessToken} = config
    // console.log("access token", AccessToken)

    const upComingMovieUrl = 'https://api.themoviedb.org/3/movie/upcoming'

    const upComingMovies = await $fetch(upComingMovieUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        }
    })
   
    return {upComingMovies}
})