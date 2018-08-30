<template>
  <v-app light>
    <v-container
        grid-list-md
        text-xs-center
    >
      <v-content>
        <v-layout row wrap>
          <v-flex v-for="course in courseNames"
                  v-bind:key="course.name"
                  v-bind:data="course.name"
                  xs12 sm6 md4 lg3>
            <v-card
                class="theme--light white--text"
                v-bind:class="course.colour"
                href="courses/chemistry"
                hover
            >
              <v-card-title primary-title>
                <h2>{{course.name}}</h2>
              </v-card-title>
              <v-card-text class="px-0">Hello World</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
  import axios from 'axios';

   export default {
       asyncData() {
           return axios.get('http://localhost:3030/courses')
               .then(response => {
                   return {courseNames: response.data.data}
               });
       }
   }
</script>