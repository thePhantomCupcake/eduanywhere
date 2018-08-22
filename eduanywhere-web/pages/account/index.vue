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
              <v-icon color="indigo">phone</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>(+27) 710 189 834</v-list-tile-title>
              <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">mail</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>jda@example.com</v-list-tile-title>
              <v-list-tile-sub-title>Email</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">location_on</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>2001 Hal Street</v-list-tile-title>
              <v-list-tile-sub-title>Krater, Moon 007</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">vpn_key</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Password</v-list-tile-title>
              <v-list-tile-sub-title>Change</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>
      
        <v-card-title class="Black--text pl-5 pt-5">
            <div class="display-1 pl-0">My Enrolled Courses</div>
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
            <div class="display-1 pl-0">Exam Sitting Goals</div>
        </v-card-title>
        <v-card-text class="display-0 pl-5">The dates on which you plan to write your exams.</v-card-text>
        <v-card-title class="Black--text pl-5 pt-5">
            <div class="display-1 pl-0">Payment Details &amp; Status</div>
        </v-card-title>
        </v-card>
    </v-flex>
  </v-layout>
</template>

 <script>
    export default {
      data () {
        return {
          chemistryChecked: false,
          physicsChecked: false,
          biologyChecked: false
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