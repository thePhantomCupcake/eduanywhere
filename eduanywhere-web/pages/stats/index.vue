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
                    <v-flex style="padding-left: 20px; padding-right: 20px">
                      <v-card>
                        <v-data-table
                          :headers="headers"
                          :items="testResults"
                          hide-actions
                        >
                              <template slot="items" slot-scope="props">
                                  <td>{{ props.item.name }}</td>
                                  <td class="text-xs-left">{{ props.item.score }}</td>
                                  <td class="text-xs-left">{{ props.item.date }}</td>
                                </template>
                          </v-data-table>
                        </v-card>
                      </v-flex>
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
                      <v-flex style="padding-left: 20px; padding-right: 20px">
                      <v-card>
                        <v-data-table
                          :headers="headers"
                          :items="testResults"
                          hide-actions
                        >
                              <template slot="items" slot-scope="props">
                                  <td>{{ props.item.name }}</td>
                                  <td class="text-xs-left">{{ props.item.score }}</td>
                                  <td class="text-xs-left">{{ props.item.date }}</td>
                                </template>
                          </v-data-table>
                        </v-card>
                      </v-flex>
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
      value: 60,
      headers: [
        {
          text: 'Subject',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {
          text: 'Score',
          align: 'left',
          sortable: false,
          value: 'score'
        },
        {
          text: 'Date',
          align: 'left',
          sortable: false,
          value: 'date' }
      ],
      testResults: [
        {
          value: false,
          name: 'Chemistry',
          year: 1820,
          date: '03/23/2018',
          score: '74%'
        },
        {
          value: false,
          name: 'Physics',
          year: 2307,
          date: '03/01/2018',
          score: '30%'
        },
        {
          value: false,
          name: 'Biology',
          year: 2202,
          date: '02/22/2018',
          score: '98%'
        },
        {
          value: false,
          name: 'Chemistry',
          year: 1820,
          date: '03/29/2018',
          score: '79%'
        },
        {
          value: false,
          name: 'Physics',
          year: 2307,
          date: '03/03/2018',
          score: '39%'
        },
        {
          value: false,
          name: 'Biology',
          year: 2202,
          date: '02/28/2018',
          score: '90%'
        }
      ]
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted () {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 40)
      }
      this.value += 1
    }, 1000)
  }
}
</script>