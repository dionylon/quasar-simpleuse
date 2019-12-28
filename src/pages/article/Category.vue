<template>
  <div id="main" class="q-pa-md flex flex-center">
    <q-chip clickable @click="onClick" color="primary" text-color="white" icon="event">
      Add to calendar
    </q-chip>
    <q-chip clickable @click="onClick" icon="bookmark">
      Bookmark
    </q-chip>
    <q-chip clickable @click="onClick" color="teal" text-color="white" icon="bookmark">
      Bookmark
    </q-chip>
    <q-chip clickable @click="onClick" color="red" text-color="white" icon="alarm" label="Set alarm" />
    <q-chip clickable @click="onClick" color="orange" text-color="white" icon="directions">
      Get directions
    </q-chip>
  </div>
</template>

<script>
export default {
  name: 'category',
  data() {
    
  },
  methods: {
    onClick() {
      // do something
    }
  }
}
</script>

<style lang="less" scoped>
#main {
  width: 100%;
  max-width: 777px;
}
</style>
