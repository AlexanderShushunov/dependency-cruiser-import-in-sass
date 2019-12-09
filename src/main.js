// Import Vue
import Vue from 'vue';

// Import Vue App, routes, store
import AppHome from 'src/components/AppHome';

new Vue({
    el: '#app',
    render: h => h(AppHome)
});
