<template>
  <v-app light>
    <v-container
        grid-list-md
        text-xs-center
    >
      <v-content>
        <v-layout row wrap>
        <v-card
            class="black--text"
            color="white"
            hover
            width="100%">
        <v-card-title style="padding-left: 50px;" primary-title>
              <h2>Latest Test Scores</h2>
        </v-card-title>
          <v-flex xs12 style="float: right">
              <h3>Chemistry</h3>
               <v-progress-circular
                    :rotate="360"
                    :size="100"
                    :width="15"
                    :value="value"
                    color="blue darken-4"
                >
                    {{ value }}
                </v-progress-circular>
          </v-flex>
          <v-flex xs12 style="float: right">
              <h3>Chemistry</h3>
               <v-progress-circular
                    :rotate="360"
                    :size="100"
                    :width="15"
                    :value="value"
                    color="blue darken-4"
                >
                    {{ value }}
                </v-progress-circular>
          </v-flex>
          <v-flex xs12 style="float: right">
               <h3>Physics</h3>
               <v-progress-circular
                    :rotate="360"
                    :size="100"
                    :width="15"
                    :value="value"
                    color="blue darken-3"
                >
                    {{ value }}
                </v-progress-circular>
          </v-flex>
          <v-flex xs12 style="float: right">
               <p>Physics</p>
               <v-progress-circular
                    :rotate="360"
                    :size="100"
                    :width="15"
                    :value="value"
                    color="blue darken-3"
                >
                    {{ value }}
                </v-progress-circular>
          </v-flex>
          <v-flex xs12 style="float: right">
              <p>Biology</p>
               <v-progress-circular
                    :rotate="360"
                    :size="100"
                    :width="15"
                    :value="value"
                    color="blue darken-2"
                >
                    {{ value }}
                </v-progress-circular>
          </v-flex>
          <v-flex xs12 style="float: right">
              <p>Biology</p>
               <v-progress-circular
                    :rotate="360"
                    :size="100"
                    :width="15"
                    :value="value"
                    color="blue darken-2"
                >
                    {{ value }}
                </v-progress-circular>
          </v-flex>
          </v-card>
          <v-card
                class="black--text"
                color="white"
                hover
                width="100%"
                style="margin-top: 20px">
            <v-card-title style="padding-left: 50px;" primary-title>
            <h2>Overall Progress</h2>
            </v-card-title>
            <v-flex xs12 sm12 md12 lg12>
           <div>
                <v-progress-linear
                color="warning"
                height="15"
                value="60"
                ></v-progress-linear>

                <v-progress-linear
                color="error"
                height="20"
                value="75"
                ></v-progress-linear>
            </div>
          </v-flex>
          </v-card>
        </v-layout>
      </v-content>
    </v-container>
  </v-app>
</template>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>

<script>
  export default {
    data () {
      return {
        interval: {},
        value: 0
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 1000)
    }
  }
</script>