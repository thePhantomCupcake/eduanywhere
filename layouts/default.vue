<template>
    <v-app dark>
        <v-navigation-drawer
                :mini-variant.sync="miniVariant"
                :clipped="clipped"
                v-model="drawer"
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
        <v-toolbar fixed app :clipped-left="true">
            <v-btn icon
                   @click.stop="collapseDrawer" >
                <v-icon v-text="drawer ? 'chevron_left' : 'chevron_right'"></v-icon>
            </v-btn>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn
                        flat
                        @click.stop="collapseDrawer"
                >
                    Login
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <nuxt />
        </v-content>
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
            {icon: 'widgets', title: 'Courses', to: '/courses'},
            {icon: 'info', title: 'About Us', to: '/'}
          ],
          miniVariant: false,
          right: true,
          rightDrawer: false,
          title: 'EduAnywhere',
          collapseDrawer: function () {
            this.drawer = !this.drawer
          }
        }
      }
    }
</script>

<style>
    nuxt {

    }
</style>
