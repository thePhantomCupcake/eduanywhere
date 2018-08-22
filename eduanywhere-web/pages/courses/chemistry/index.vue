<template>
  <v-app light>
    <v-navigation-drawer
        clipped
        v-model="rightDrawer"
        fixed
        relative
        right
        app
    >
      <v-stepper v-model="netNommer" vertical>
        <v-stepper-step editable step="1">
          Syllabus
        </v-stepper-step>

        <v-stepper-step editable step="2">Molecules</v-stepper-step>

        <v-stepper-step editable step="3">Ionic Bonds</v-stepper-step>

        <v-stepper-step editable step="4">Chemistry Stuff</v-stepper-step>


        <v-stepper-step editable step="5">View setup instructions</v-stepper-step>

        <v-stepper-step editable step="6">View setup instructions</v-stepper-step>

        <v-stepper-step editable step="7">View setup instructions</v-stepper-step>

        <v-stepper-step editable step="8">View setup instructions</v-stepper-step>

        <v-stepper-step editable step="9">View setup instructions</v-stepper-step>
      </v-stepper>
    </v-navigation-drawer>
    <v-container fluid fill-height>
      <v-layout
          justify-center
      >
        <v-flex style="height: 90%">
          <v-card
              style="height:100%; display: flex; flex-direction: column"
              class="black--text"
              color="white"
              hover
          >
            <v-card-title style="padding-left: 50px;" primary-title>
              <h2>Molecules</h2>
            </v-card-title>
            <div class="grow" style="margin-left: 50px; margin-right: 50px;">
            </div>
            <v-card-actions style="padding-left: 50px; padding-right: 50px; padding-bottom: 20px">
              <v-btn @click="netNommer--">Back</v-btn>
              <v-btn color="primary" @click="netNommer++">Continue</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
    export default {
      data () {
        return {
          title: 'EduAnywhere',
          netNommer: 0
        }
      }
    }
</script>