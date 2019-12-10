<script>
import { sign } from 'src/forbidden-module';

export default {
    name: 'ScriptStyles',
    render (h) {
        return h('h1', `ScriptStyles${sign}`);
    }
};
</script>

<style scoped lang="scss">
  @import "src/styles/vars";

  h1 {
    color: $secondaryColor;
  }
</style>
