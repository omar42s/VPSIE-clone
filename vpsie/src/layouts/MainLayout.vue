
<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      reveal
      style="height: 50px; display:inline-flex"
      class="q-header q-layout__section--marginal fixed-top global-gradient-bg" tabindex="-1">

        <div class="q-toolbar row no-wrap items-center  " role="toolbar">
            <q-btn
                class="q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--round q-btn--actionable q-focusable q-hoverable q-btn--dense q-mr-md"
                dense flat round icon="menu" @click="toggleLeftDrawer(); toggleMiniDrawer()" />

            <q-toolbar-title  @click="goToDashboard">
              <q-avatar class="logo-container absolute-full" size="xl">
                <img src="../../../statics/Vpsie-logo.jpg">
              </q-avatar>
            </q-toolbar-title>

        <div class="row no-wrap gt-sm"

        >
          <q-btn color="primary"
          label="Resources"
            class=" q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--round q-btn--actionable q-focusable q-hoverable q-btn--dense q-mr-md q-mt-xs"
            style="font-weight: normal;"

          >
              <q-menu
                transition-show="jump-down"
                transition-hide="jump-up"
              >
                <q-list style="min-width: 100px">
                  <q-item
                            clickable
                            v-ripple
                            :active="link === 'server'"
                            @click="link = 'server'"
                            to="/server"
                            active-class="my-menu-link"
                          >
                            <q-item-section avatar>
                            <q-icon name="send" />
                              </q-item-section>
                          <q-item-section>Server</q-item-section>
                   </q-item>
                  <q-item
                            clickable
                            v-ripple
                            :active="link === 'kubernetes'"
                            @click="link = 'kubernetes'"
                            to="/kubernetes"
                            active-class="my-menu-link"
                          >
                            <q-item-section avatar>
                            <q-icon name="send" />
                              </q-item-section>

                          <q-item-section>Kubernetes</q-item-section>
                   </q-item>
                  <q-item
                            clickable
                            v-ripple
                            :active="link === 'load-balancer'"
                            @click="link = 'load-balancer'"
                            to="/load-balancer"
                            active-class="my-menu-link"
                          >
                            <q-item-section avatar>
                            <q-icon name="send" />
                              </q-item-section>

                          <q-item-section>Load Balancer</q-item-section>
                   </q-item>
                  <q-item
                            clickable
                            v-ripple
                            :active="link === 'bucket'"
                            @click="link = 'bucket'"
                            to="/bucket"
                            active-class="my-menu-link"
                          >
                            <q-item-section avatar>
                            <q-icon name="send" />
                              </q-item-section>

                          <q-item-section>Bucket</q-item-section>
                   </q-item>
                  <q-item
                            clickable
                            v-ripple
                            :active="link === 'storage'"
                            @click="link = 'storage'"
                            to="/storage"
                            active-class="my-menu-link"
                          >
                            <q-item-section avatar>
                            <q-icon name="send" />
                              </q-item-section>

                          <q-item-section>Storage</q-item-section>
                   </q-item>
                  <q-item
                            clickable
                            v-ripple
                            :active="link === 'networking'"
                            @click="link = 'networking'"
                             to="/networking"
                            active-class="my-menu-link"
                          >
                            <q-item-section avatar>
                            <q-icon name="send" />
                              </q-item-section>

                          <q-item-section>Networking</q-item-section>
                   </q-item>
                  <q-item
                            clickable
                            v-ripple
                            :active="link === 'monitoring'"
                            @click="link = 'monitoring'"
                            to="/monitoring"
                            active-class="my-menu-link"
                          >
                            <q-item-section avatar>
                            <q-icon name="send" />
                              </q-item-section>

                          <q-item-section>Monitoring</q-item-section>
                   </q-item>
                  <q-item
                            clickable
                            v-ripple
                            :active="link === 'pcs'"
                            @click="link = 'pcs'"
                             to="/pcs"
                            active-class="my-menu-link"
                          >
                            <q-item-section avatar>
                            <q-icon name="send" />
                              </q-item-section>

                          <q-item-section>PCS</q-item-section>
                   </q-item>
                  <q-item
                            clickable
                            v-ripple
                            :active="link === 'managed-db'"
                            @click="link = 'managed-db'"
                            to="/managed-db"
                            active-class="my-menu-link"
                          >
                            <q-item-section avatar>
                            <q-icon name="send" />
                              </q-item-section>

                          <q-item-section>Managed DB</q-item-section>
                   </q-item>
                  <q-item
                            clickable
                            v-ripple
                            :active="link === 'outbox'"
                            @click="link = 'outbox'"
                            active-class="my-menu-link"
                          >
                            <q-item-section avatar>
                            <q-icon name="send" />
                              </q-item-section>

                          <q-item-section>Outbox</q-item-section>
                   </q-item>






                </q-list>
              </q-menu>
            </q-btn>

            <q-item clickable v-ripple to="/firewall" active-class="my-menu-link">
                <q-item-section>Firewall</q-item-section>
                <q-item-section avatar>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/recovery" active-class="my-menu-link">
                <q-item-section>Recovery</q-item-section>
                <q-item-section avatar>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/billing" active-class="my-menu-link">
                <q-item-section>Billing</q-item-section>
                <q-item-section avatar>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/dns" active-class="my-menu-link">
                <q-item-section>DNS</q-item-section>
                <q-item-section avatar>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/support" active-class="my-menu-link">
                <q-item-section>Support</q-item-section>
                <q-item-section avatar>
                </q-item-section>
            </q-item>



        </div>
        </div>



    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered style="z-index: 5;">
        <q-container class="leftContainer column">
            <q-section class="searchBar col">
              <q-input bottom-slots v-model="text" label="Search By Tags in IPs, Storage, Hostname, ..."  :dense="dense">

                      <template v-slot:append>
                        <i class="fa-solid fa-magnifying-glass"
                        ></i>
                      </template>
              </q-input>
            </q-section>

            <q-section class="createProject col">
              <q-btn
                    class="q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase global-btn q-ma-md q-px-sm q-pr-md"
                    style="cursor: pointer"
                    color="primary"
                    tabindex="0"
                    type="button"
                    v-if="!showProjectNameInput"
                    @click="showProjectNameInput = true"

                    >
                    <span

                    class="q-focus-helper" tabindex="-1">
                    </span>
                    <span class="q-btn__content text-center col items-center q-anchor--skip justify-center row">
                      <i class="q-icon on-left notranslate material-icons">add</i>
                      <span class="block">Create a New Project</span>
                    </span>
              </q-btn>
               <q-input
                    v-if="showProjectNameInput"
                     bottom-slots v-model="text" label="Project Name" :dense="dense">
                    <template v-slot:append>
                      <q-btn round dense flat icon="add"
                      @click="hideProjectNameInput" />

                    </template>
               </q-input>
            </q-section>

            <q-section class="MyProjects col">
               <q-expansion-item
                  icon="folder"
                  label="My Projects"
                >

                  <q-card class="q-mb-md">
                    <q-card-section>
                      Default
                    </q-card-section>
                  </q-card>
                  <q-card class="q-mb-md">
                    <q-card-section>
                     project 1
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
            </q-section>

            <q-item class="col" style="display:flex;justify-content: center;align-items: center; font-weight: bold; font-size:15px;">
              Favorite links
            </q-item>


              <q-item
                    clickable
                    v-ripple
                    class="col"
                    flat unelevated no-caps
                    style="background-color: #eee; color: #1976d2;"
                    :active="link === 'new'"
                    @click="link = 'new'"
                    to="/new"
                    active-class="my-menu-link"
                          >
                            <q-item-section avatar>
                            <i class="fa-solid fa-cloud-arrow-up"></i>
                              </q-item-section>
                          <q-item-section>Create New Server</q-item-section>
              </q-item>
          </q-container>


</q-drawer>
<q-drawer
        v-model="leftDrawerClosed"
        show-if-above
        :mini="miniState"
        style="z-index:-1;"
        mini-to-overlay

        :width="50"
        :breakpoint="100"
        bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>
            </q-item>
            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
  </q-drawer>





    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default  defineComponent({
    name: 'MainLayout',
    data(){
      return {
      leftDrawerOpen: false,
      showProjectNameInput: false,
      leftDrawerClosed :true,

      // selections,
      // selection: null
    }
    },
    methods: {
      goToDashboard() {
      this.$router.push({ name: '/dashboard' });
    },

    toggleLeftDrawer () {
        this.leftDrawerOpen = !this.leftDrawerOpen

        },
    toggleMiniDrawer(){
        this.leftDrawerClosed = !this.leftDrawerOpen
    },


    hideProjectNameInput(){
          this.showProjectNameInput= !this.showProjectNameInput;
    }


}})
</script>

<style scoped>
.horizontal-list {
  display: flex;
  flex-direction: row;

}
.q-btn {
    align-items: stretch;
    background: #0000;
    border: 0;
    color: inherit;
    cursor: default;
    display: inline-flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 500;
    height: auto;
    line-height: 1.715em;
    min-height: 2.572em;
    outline: 0;
    padding: 4px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    vertical-align: middle;
    width: auto;
}
button, input, select {
    overflow: visible;
    text-transform: none;
}

.logo-container {
  transition: transform 0.3s;
  width: 140px;
  position: relative;

}

.logo-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.logo-container img:hover {
  scale: 1.1;
  cursor: pointer;
}

</style>
