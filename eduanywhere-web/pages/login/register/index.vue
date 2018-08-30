<template>
<v-container>
<v-flex xs12 sm6 md4 lg4 offset-sm3 offset-md4 offset-lg4>
   <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Register</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Select Courses</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">End</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
style="padding: 20px; margin-bottom: 10px"
color="grey lighten-3"
>
  <v-card-title>
      <h2>New Account</h2>
  </v-card-title>
  <v-form v-model="valid">
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="number"
      :rules="numberRules"
      label="Contact Number"
      required
    ></v-text-field>
    <v-text-field
      v-model="location"
      :rules="locationRules"
      label="Country"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :rules="passwordRules"
      :type="'password'"
      label="Password"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :rules="confirmPasswordRules"
      :type="'password'"
      label="Confirm Password"
      required
    ></v-text-field>
  </v-form>
</v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
  
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
                        <v-list-tile @click="chemistryChecked = !chemistryChecked">
                <v-list-tile-action>
                    <v-icon color="blue darken-4">{{getCheckBox(chemistryChecked)}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        Afrikaans
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile @click="physicsChecked = !physicsChecked">
                <v-list-tile-action>
                    <v-icon color="blue darken-3">{{getCheckBox(physicsChecked)}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        English
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            
            <v-list-tile @click="biologyChecked = ! biologyChecked">
                <v-list-tile-action>
                    <v-icon color="blue darken-1">{{getCheckBox(biologyChecked)}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        Mathematics
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</v-flex>
</v-container>
</template>

<script>
  export default {
    data () {
      return {
        e1: 0,
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