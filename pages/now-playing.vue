<template>
    <div>
        <section>
      <h1 class="text-5xl font-extrabold dark:text-white">Now Playing Movies</h1>
      <ul class="grid grid-cols-5 gap">
        <li v-for="mov in movies" :key="mov.id">
          <MovieCard 
          :poster_path="mov.poster_path"
          :title="mov.title"
          :id="mov.id"
          :overview="mov.overview"
          :release_date="mov.release_date"
          :popularity="mov.popularity"
          :item="mov" />
        </li>
      </ul>
    </section>
    </div>
</template>

<script setup>
const movies = useState(() => [])
const {data} = await useFetch('/api/movies/nowplaying', {
    transform: data => {
        movies.value = data.nowPlayingMovies.results
    }
})
</script>
