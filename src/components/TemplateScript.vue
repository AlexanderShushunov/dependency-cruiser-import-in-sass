<template>
  <h1>TemplateScript{{sign}}</h1>
</template>

<script>
import { sign } from 'src/forbidden-module';
export default {
    name: 'TemplateScript',
    created () {
        this.sign = sign;
    }
};
</script>
