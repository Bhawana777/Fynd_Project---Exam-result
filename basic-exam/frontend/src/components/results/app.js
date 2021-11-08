/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Switches from 'vue-switches'
import Notifications from 'vue-notification'
import VModal from 'vue-js-modal'
import Print from 'vue-print-nb'



Vue.use(VModal);
Vue.use(Notifications);
Vue.component('switches', Switches);
Vue.use(Print);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('create-result', require('./components/results/createResult.vue'));
Vue.component('view-result', require('./components/results/ViewResult.vue'));
Vue.component('edit-result', require('./components/results/EditResult.vue'));
Vue.component('student-view-result', require('./components/results/ViewResultForStudent.vue'));

const app = new Vue({
    el: '#app'
});