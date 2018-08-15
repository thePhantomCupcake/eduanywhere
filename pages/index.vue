<template>
    <v-app light>
        <v-content>
            <section>
                <v-parallax src='/images/airplane-clouds-cropped-resized3.jpg' height="400">
                    <v-layout
                            column
                            align-right
                            justify-center
                            class="white--text"
                    >
                        <h1
                        class="black--text mb-2 display-3"
                        >Edu Anywhere</h1>
                        <div class="subheading mb-3 black--text">Cambridge education you can take from anywhere, that can take you anywhere.</div>
                    </v-layout>
                </v-parallax>
            </section>

            <section>
                <v-layout
                        column
                        wrap
                        class="my-5"
                        align-center
                >
                    <v-flex xs12 sm4 class="my-3">
                        <div class="text-xs-center">
                            <h2 class="headline">Excel Your Education</h2>
                        </div>
                    </v-flex>
                    <v-flex xs12>
                        <v-container grid-list-xl>
                            <v-layout row wrap align-center>
                                <v-flex xs12 md4>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-text class="text-xs-center">
                                            <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                                        </v-card-text>
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="headline text-xs-center black--text">Material Design</div>
                                        </v-card-title>
                                        <v-card-text class="black--text">
                                            Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt
                                            ornare.
                                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                                            ac turpis egestas.
                                            Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                                            Suspendisse potenti.
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-text class="text-xs-center">
                                            <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                                        </v-card-text>
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="headline black--text">Fast development</div>
                                        </v-card-title>
                                        <v-card-text class="black--text">
                                            Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt
                                            ornare.
                                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                                            ac turpis egestas.
                                            Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                                            Suspendisse potenti.
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-text class="text-xs-center">
                                            <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                                        </v-card-text>
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="headline text-xs-center black--text">Completely Open Sourced</div>
                                        </v-card-title>
                                        <v-card-text class="black--text">
                                            Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt
                                            ornare.
                                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                                            ac turpis egestas.
                                            Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                                            Suspendisse potenti.
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-flex>
                </v-layout>
            </section>

            <section>
                <v-parallax src="/images/section.jpg" height="380">
                    <v-layout column align-center justify-center>
                        <div class="headline white--text mb-3 text-xs-center black--text">Studying independantly has never been easier
                        </div>
                        <em>Kick-start your learning process now</em>
                        <v-btn
                                class="blue lighten-2 mt-5 black--text"
                                dark
                                large
                                href="/pre-made-themes"
                        >
                            Get Started
                        </v-btn>
                    </v-layout>
                </v-parallax>
            </section>

            <section>
                <v-container grid-list-xl>
                    <v-layout row wrap justify-center class="my-5">
                        <v-flex xs12 sm4>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center black--text">
                                    <div class="headline">About Us</div>
                                </v-card-title>
                                <v-card-text class="black--text">
                                    Saintsburg Edu-Village is a learning hub offering tutoring services and online education tools
                                    for those who want to excel in their education. We support British GCSE, AS and A-Level
                                    qualifications which is accepted throughout the world and preferred by the best Universities.
                                    EduAnywhere is aWebsite App guiding students through the GCSE and AS curriculae with reference
                                    to the relevant text books and with the help of actual exam questions.
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm4 offset-sm1>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline black--text">Contact us</div>
                                </v-card-title>
                                <v-card-text class="black--text">
                                    We are based in South Africa, but we serve the needs of students worldwide.
                                </v-card-text>
                                <v-list class="transparent">
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="blue--text text--lighten-2 black--text">phone</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title class="black--text">not available</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="blue--text text--lighten-2">place</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title class="black--text" >Pretoria, SA</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="blue--text text--lighten-2">email</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title class="black--text">info@saintsburg.co.za</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                </v-list>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </section>
        </v-content>
    </v-app>
</template>