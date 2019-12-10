<template>
  <h1>TemplateScriptStyles{{sign}}</h1>
</template>

<script>
import { sign } from 'src/forbidden-module';

export default {
    name: 'TemplateScriptStyles',
    created () {
        this.sign = sign;
    }
};
</script>

<style scoped lang="scss">
  @import "src/styles/vars";

  h1 {
    color: $mainColor;
  }
</style>
