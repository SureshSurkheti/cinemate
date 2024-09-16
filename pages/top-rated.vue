<template>
    <div>
        <section>
      <h1 class="text-5xl font-extrabold dark:text-white">Top Rated Movies</h1>
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
    <section>
      <h1 class="text-5xl font-extrabold dark:text-white">Top Rated Series</h1>
      <ul class="grid grid-cols-5 gap">
        <li v-for="seri in series" :key="seri.id">
          <SeriesCard
          :poster_path="seri.poster_path"
          :title="seri.title"
          :id="seri.id"
          :overview="seri.overview"
          :first_air_date="seri.first_air_date"
          :popularity="seri.popularity"
          :item="seri" />
        </li>
      </ul>
    </section>
    </div>
</template>

<script setup>

const movies = useState(() => []);
const series = useState(() => []);


const { data } = await useFetch("/api/movies/toprated", {
  transform: data => {
    movies.value = data.topRatedMovies.results;
    series.value = data.topRatedSeries.results;
  },
});
</script>
