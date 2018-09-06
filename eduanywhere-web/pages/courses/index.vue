<template>
  <v-app dark>
    <v-container
        grid-list-md
        text-xs-center
    >
      <v-content>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3>
            <v-card
                class="theme--light white--text"
                color="red darken-1"
                href="courses/chemistry"
                hover
            > 
              <v-card-title primary-title>
                <h2>Chemistry</h2>
              </v-card-title>
              <v-card-text class="px-0">Hello World</v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 md4 lg3>
            <v-card
                class="theme--light white--text"
                color="blue darken-1"
                href="courses/inspire"
                hover
            >
              <v-card-title primary-title>
                <h2>Physics</h2>
              </v-card-title>
              <v-card-text class="px-0">Hello World</v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 md4 lg3>
            <v-card
                class="theme--light white--text"
                color="green darken-1"
                href="courses/inspire"
                hover
            >
              <v-card-title primary-title>
                <h2>Biology</h2>
              </v-card-title>
              <v-card-text class="px-0">Hello World</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-content>
    </v-container>
  </v-app>
</template>