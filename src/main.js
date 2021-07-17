import Vue from 'vue';

/* Import component Vue plugins, used throughout the app */
import VTooltip from 'v-tooltip'; // A Vue directive for Popper.js, tooltip component
import VModal from 'vue-js-modal'; // Modal component
import VSelect from 'vue-select'; // Select dropdown component
import VTabs from 'vue-material-tabs'; // Tab view component, used on the config page
import Toasted from 'vue-toasted'; // Toast component, used to show confirmation notifications

import { toastedOptions } from '@/utils/defaults';
import Dashy from '@/App.vue';
import router from '@/router';
import registerServiceWorker from '@/registerServiceWorker';
import clickOutside from '@/utils/ClickOutside';

Vue.use(VTooltip);
Vue.use(VModal);
Vue.use(VTabs);
Vue.use(Toasted, toastedOptions);
Vue.component('v-select', VSelect);
Vue.directive('clickOutside', clickOutside);

Vue.config.productionTip = false;

// Register Service Worker
registerServiceWorker();

new Vue({
  router,
  render: (awesome) => awesome(Dashy),
}).$mount('#app');
