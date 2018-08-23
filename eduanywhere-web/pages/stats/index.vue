<template>
  <v-app light>
    <v-container
        grid-list-md
        text-xs-center
    >
        <v-layout row wrap>
        <v-flex xs12>
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
           <div style="padding-left: 10px; padding-right: 10px;">
                <v-progress-linear
                color="cyan"
                height="15"
                value="60"
                ></v-progress-linear>

                <v-progress-linear
                color="cyan darken-1"
                height="20"
                value="75"
                ></v-progress-linear>
            </div>
          </v-flex>
          </v-card>
          </v-flex>
        <v-flex xs12 sm12 md6 lg6>
        <v-card
            class="black--text"
            color="white"
            hover
            width="100%"
            wrap
        >
        <v-card-title style="padding-left: 50px;" primary-title>
              <h2>Mini Test Results</h2>
        </v-card-title>
            <v-layout row wrap>
              <v-flex xs12>
                <v-expansion-panel inset>
                  <v-expansion-panel-content>
                    <div slot="header" style="padding: 10px">Show All Results</div>
                      <v-card>
                        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                      </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-flex>
              <v-flex xs12 sm4 md6>
               <v-progress-circular
                    :rotate="0"
                    :size="160"
                    :width="15"
                    :value="value"
                    color="red darken-1"
                >
                    {{ value }}
                </v-progress-circular>
              </v-flex>
              <v-flex xs12 sm4 md6>
               <v-progress-circular
                    :rotate="0"
                    :size="160"
                    :width="15"
                    :value="value"
                    color="blue darken-1"
                >
                    {{ value }}
                </v-progress-circular>
               </v-flex>
               <v-flex xs12 sm4 md6>
               <v-progress-circular
                    :rotate="0"
                    :size="160"
                    :width="15"
                    :value="value"
                    color="green darken-1"
                >
                    {{ value }}
                </v-progress-circular>
              </v-flex>
            </v-layout>
          </v-card>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6>
        <v-card
            class="black--text"
            color="white"
            hover
            width="100%"
            wrap
        >
        <v-card-title style="padding-left: 50px;" primary-title>
              <h2>Past Paper Results</h2>
        </v-card-title>
            <v-layout row wrap>
                <v-flex xs12>
                <v-expansion-panel inset>
                  <v-expansion-panel-content>
                    <div slot="header" style="padding: 10px">Show All Results</div>
                      <v-card>
                        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                      </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-flex>
              <v-flex xs12 sm4 md6>
               <v-progress-circular
                    :rotate="0"
                    :size="160"
                    :width="15"
                    :value="value"
                    color="red darken-1"
                >
                    {{ value }}
                </v-progress-circular>
              </v-flex>
              <v-flex xs12 sm4 md6>
               <v-progress-circular
                    :rotate="0"
                    :size="160"
                    :width="15"
                    :value="value"
                    color="blue darken-1"
                >
                    {{ value }}
                </v-progress-circular>
               </v-flex>
               <v-flex xs12 sm4 md6>
               <v-progress-circular
                    :rotate="0"
                    :size="160"
                    :width="15"
                    :value="value"
                    color="green darken-1"
                >
                    {{ value }}
                </v-progress-circular>
              </v-flex>
            </v-layout>
          </v-card>
          </v-flex>
        </v-layout>
    </v-container>
  </v-app>
</template>

<style lang="stylus" scoped>
.v-progress-circular {
  margin: 1rem;
}
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