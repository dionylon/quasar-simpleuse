<template>
  <div class="q-pa-md">
    <div class="row justify-center q-gutter-sm">
      <q-intersection
        v-for="index in 10"
        :key="index"
        class="example-item"
      >
        <q-card class="q-ma-sm">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">

          <q-card-section>
            <div class="text-h6">文章 #{{ index }}</div>
            <div class="text-subtitle2">by Dionys</div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style lang="less" scoped>
.example-item{
  height: 330px;
  width: 300px;
}
</style>
