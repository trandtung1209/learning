<template>
  <div id="app">
    <Box></Box>
  </div>
</template>

<script>
import Box from "./components/Box.vue";
export default {
  components: { Box },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  justify-content: center;
  color: #fff;
}
</style>
