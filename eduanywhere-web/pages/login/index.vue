<template>
  <v-app dark>
    <v-container
        grid-list-md
        text-xs-center
    >
      <v-content>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg4 offset-sm3 offset-md4 offset-lg4>
            <v-card
            hover
            color="grey lighten-3">
            <v-card-title>
                <h2>My Account</h2>
            </v-card-title>
            <v-form v-model="valid" style="padding: 20px">
                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                ></v-text-field>
                 <v-text-field
                v-model="password"
                :type="'password'"
                :rules="passwordRules"
                label="Password"
                required
                ></v-text-field>
            </v-form>
                <v-card-actions>
                    <v-btn flat href="login/register">New Account</v-btn>
                    <v-btn flat color="purple">Login</v-btn>
                </v-card-actions>
            </v-card>
            </v-flex>
        </v-layout>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    })
  }
</script>