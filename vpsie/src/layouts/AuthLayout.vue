<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="q-header  fixed-top" >
      <div class="q-toolbar row  items-center row no-wrap items-center" role="toolbar">
        <q-toolbar>
          <q-toolbar-title >
            <q-avatar class="logo-container absolute-full" size="xl">
              <img  src="../../../statics/Vpsie-logo.jpg"  alt="VPSie-Logo">
            </q-avatar>
            <span class="gt-lg vertical-middle">VPSie</span>
          </q-toolbar-title>
        </q-toolbar>

      </div>
     </q-header>

     <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>


<script>
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'AuthLayout',


})

</script>

<style scoped>

.logo-container {
  transition: transform 0.3s;
  width: 140px;
  position: relative;
  object-fit: contain;
  margin-left: 40px;

}

.logo-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.logo-container img:hover {
   transform: scale(1.2);
  cursor: pointer;
}

</style>
