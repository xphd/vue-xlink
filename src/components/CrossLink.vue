<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <ul v-for="planet in planets" :key="planet.id">
          <li
            :id="planet.id"
            class="highlight-row"
            @mouseenter="onMouseEnter(planet)"
            @mouseleave="onMouseLeave(planet)"
          >{{planet.name}}</li>
        </ul>
      </div>
      <div class="col-sm">
        <ul v-for="(planet,index) in planets" :key="index">
          <li
            :id="planet.id"
            class="highlight-row"
            @mouseenter="onMouseEnter(planet)"
            @mouseleave="onMouseLeave(planet)"
          >{{planet}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  watch: {
    selectedPlanet() {
      let selectedPlanet = this.selectedPlanet;
      let highlight_rows = d3.select(this.$el).selectAll(".highlight-row");
      highlight_rows.each(function() {
        let highlight_row = d3.select(this);
        if (selectedPlanet == highlight_row.attr("id")) {
          highlight_row.style("background-color", "#eeeeee");
        } else {
          highlight_row.style("background-color", "");
        }
      });
    }
  },
  methods: {
    onMouseEnter(planet) {
      this.selectedPlanet = planet.id;
      // console.log(this.selectedPlanet);
    },
    onMouseLeave(planet) {
      this.selectedPlanet = "";
      // console.log(planet.name);
    }
  },
  data() {
    return {
      selectedPlanet: "",
      planets: [
        { id: "a", name: "Mercury" },
        { id: "b", name: "Venus" },
        { id: "c", name: "Earth" },
        { id: "d", name: "Mars" },
        { id: "e", name: "Jupiter" },
        { id: "f", name: "Saturn" },
        { id: "g", name: "Uranus" },
        { id: "h", name: "Neptune" }
      ]
    };
  }
};
</script>

<style scoped>
li {
  border: 1px solid black;
}
</style>