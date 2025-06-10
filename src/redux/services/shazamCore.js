import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core.p.rapidapi.com",
        prepareHeaders: (headers) =>{
            headers.set("X-RapidAPI-Key", "e7ce9a78f2msha2ee7cc7ca22c41p12a1bajsn876c2529f5df");
            return headers
        }
    }),
    endpoints: (builder) =>({
        getTopCharts : builder.query({ query: ()=> "/v1/charts/world?country_code=CA"}),
        getSongsByGenre: builder.query({ query: (genre) => `/v1/charts/genre-world?country_code=CA&genre_code=${genre}`}),
        getSongsRelated: builder.query({query: ({songId}) => `/v1/tracks/related?offset=0&track_id=${songId}`}),
        getArtistDetails: builder.query({ query: (artistId) => `/v2/artists/details?artist_id=${artistId}`}),
        getSongDetails: builder.query({ query: (songId) => `/v2/tracks/details?track_id=${songId}`}),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/v1/search/multi?search_type=SONGS_ARTISTS&offset=0&query=${searchTerm}`}),
        getSongsByCountry : builder.query({ query: (countryCode)=> `/v1/charts/country?country_code=${countryCode}`}),
    })
})

export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongsRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongDetailsQuery,
    useGetSongsBySearchQuery,
    useGetSongsByCountryQuery
} = shazamCoreApi