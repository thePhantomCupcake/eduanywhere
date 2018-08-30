<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4 lg3>
        <v-card>
          <v-layout
            column
            fill-height
          >
            <v-card-title class="Black--text pl-5 pt-5">
                <div class="display-1 pl-0">Josef-Daniel Alberts</div>
            </v-card-title>
          </v-layout>

        <v-list two-line>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="blue">phone</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>(+27) 710 189 834</v-list-tile-title>
              <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="blue darken-1">mail</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>jda@example.com</v-list-tile-title>
              <v-list-tile-sub-title>Email</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="blue darken-2">location_on</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>2001 Hal Street</v-list-tile-title>
              <v-list-tile-sub-title>Krater, Moon 007</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="blue darken-3">vpn_key</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Password</v-list-tile-title>
              <v-list-tile-sub-title>Change</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>
      
        <v-card-title class="Black--text pl-5 pt-5">
            <div class="display-1 pl-0">My Courses</div>
        </v-card-title>
        
        <v-list>
            <v-list-tile @click="chemistryChecked = !chemistryChecked">
                <v-list-tile-action>
                    <v-icon color="blue darken-4">{{getCheckBox(chemistryChecked)}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        Chemistry
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile @click="physicsChecked = !physicsChecked">
                <v-list-tile-action>
                    <v-icon color="blue darken-3">{{getCheckBox(physicsChecked)}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        Physics
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            
            <v-list-tile @click="biologyChecked = ! biologyChecked">
                <v-list-tile-action>
                    <v-icon color="blue darken-1">{{getCheckBox(biologyChecked)}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        Biology
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
        </v-card>
    </v-flex>
    <v-flex xs12 sm6 md8 lg9>
        <v-card>
        <v-card-title class="Black--text pl-5 pt-5">
            <div class="display-1 pl-0">My Exam Sitting Goals</div>
        </v-card-title>
  <v-flex style="padding-left: 20px; padding-right: 20px">
  <v-data-table
    :headers="headers"
    :items="courseSittingGoals"
    hide-actions
  >
        <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.level }}</td>
            <td class="text-xs-left">{{ props.item.sitting }}</td>
          </template>
    </v-data-table>
    </v-flex>
        <v-card-title class="Black--text pl-5 pt-5">
            <div class="display-1 pl-0">Payment Details &amp; Status</div>
        </v-card-title>
        <v-layout text-xs-center wrap>
          <v-flex xs12 sm12 md6 lg6>
            <v-card
                class="theme--light white--text"
                color="blue darken-2"
                hover
                style="margin: 10px; margin-right: 5px"
            > 
              <v-card-title primary-title>
                <h2>Payfast</h2>
              </v-card-title>
              <v-card-text class="px-0">Account Number 34345*******32</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6>
            <v-card
                class="theme--light white--text"
                color="green darken-2"
                hover
                style="margin: 10px; margin-right: 5px"
            > 
              <v-card-title primary-title>
                <h2>Payment History</h2>
              </v-card-title>
              <v-card-text class="px-0">All Payments Are Up To Date</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        </v-card>
    </v-flex>
  </v-layout>
</template>

 <script>
    export default {
      data () {
        return {
          chemistryChecked: true,
          physicsChecked: true,
          biologyChecked: true,
          headers: [
            {
              text: 'Subject',
              align: 'left',
              sortable: false,
              value: 'name'
            },
            {
              text: 'Level',
              align: 'left',
              sortable: false,
              value: 'level'
            },
            {
              text: 'Sitting',
              align: 'left',
              sortable: false,
              value: 'sitting' }
          ],
          courseSittingGoals: [
            {
              value: false,
              name: 'Chemistry',
              year: 1820,
              sitting: 'Summer 2023',
              level: 'A'
            },
            {
              value: false,
              name: 'Physics',
              year: 2307,
              sitting: 'Winter 1889',
              level: 'AS'
            },
            {
              value: false,
              name: 'Biology',
              year: 2202,
              sitting: 'Winter 1732',
              level: 'A'
            }
          ]
        }
      },
      methods: {
        getCheckBox (checked) {
          if (checked === true) {
            return 'check_box'
          } else {
            return 'check_box_outline_blank'
          }
        }
      }
    }
</script>