<script>
import { sign } from 'src/forbidden-module';

export default {
    name: 'OnlyScript',
    render (h) {
        return h('h1', `OnlyScript${sign}`);
    }
};
</script>
