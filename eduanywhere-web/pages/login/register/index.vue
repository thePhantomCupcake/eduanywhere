<template>
<v-container>
<v-flex xs12 sm6 md4 lg4 offset-sm3 offset-md4 offset-lg4>
<v-card
style="padding: 20px"
color="grey lighten-3"
>
  <v-card-title>
      <h2>Register A New Account</h2>
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
    <v-card-actions>
        <v-btn flat color="purple" href="login/register">Create My Account</v-btn>
    </v-card-actions>
  </v-form>
</v-card>
</v-flex>
</v-container>
</template>