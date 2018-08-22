<template>
    <v-app light>
        <v-navigation-drawer
                :clipped="clipped"
                v-model="drawer"
                temporary
                fixed
                app
        >
            <v-list>
                <v-list-tile
                        router
                        :to="item.to"
                        :key="i"
                        v-for="(item, i) in items"
                        exact
                >
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app :clipped-left="true" :clipped-right="true">
            <v-btn icon
                   @click.stop="drawer = !drawer">
                <v-icon v-text="drawer ? 'chevron_left' : 'chevron_right'"></v-icon>
            </v-btn>
            <img src="../static/images/EduAnywhereLogo.png" :alt="title" height="90%"/>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn
                        flat
                        href="/login"
                        v-if="!loggedIn"
                >
                    Login
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
            <v-container fluid>
                <v-content style="padding-top: 60px; padding-left: 0">
                    <nuxt/>
                </v-content>
            </v-container>
        <v-footer>
            <span>Saintsburg EduVillage &copy; 2017</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
      data () {
        return {
          clipped: true,
          drawer: false,
          fixed: false,
          items: [
            {icon: 'trending_up', title: 'Stats', to: '/stats'},
            {icon: 'widgets', title: 'Courses', to: '/courses'},
            {icon: 'person', title: 'My Account', to: '/account'},
            {icon: 'info', title: 'About Us', to: '/'}
          ],
          miniVariant: false,
          right: true,
          rightDrawer: false,
          title: 'EduAnywhere',
          loggedIn: false
        }
      }
    }
</script>