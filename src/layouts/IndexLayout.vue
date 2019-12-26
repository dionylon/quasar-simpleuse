<template>
  <q-layout view="lHh lpR fFf">
    <q-header reveal elevated class="bg-primary text-black" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img :src="avatarUrl" />
          </q-avatar>
          Dionys
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/" label="首页" />
        <q-route-tab to="category" label="分类" />
        <q-route-tab to="archive" label="归档" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="left" :width="300" :breakpoint="400">
      <q-scroll-area
        style="height: calc(100% - 250px); margin-top: 250px; border-right: 1px solid #ddd"
      >
        <q-list padding>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section>
              Inbox
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section>
              Star
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section>
              Send
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section>
              dionylon@163.com
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="http://pic1.win4000.com/wallpaper/2018-01-03/5a4c4e905c089.jpg"
        style="height: 250px; text-align:center;"
      >
        <div class="absolute-top text-black bg-transparent">
          <q-avatar size="150px" class="q-mb-sm">
            <img :src="avatarUrl" />
          </q-avatar>
          <div class="text-weight-bold">Dionys</div>
          <div>If you want it, go get it.</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- place QPageScroller at end of page -->
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="secondary" />
    </q-page-scroller>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      avatarUrl: "https://s2.ax1x.com/2019/12/26/lE3VmD.png",
      left: false
    };
  }
};
</script>
<style></style>
