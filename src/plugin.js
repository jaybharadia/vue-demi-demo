import HelloWorld from "@/components/HelloWorld.vue";
export default {
  install: (app, options) => {
    // Plugin code goes here

    app.component('DHello', HelloWorld);

    app.config.globalProperties.$demi = {
        name : 'vue-demi-demo',
        start : () => {
            console.log('Inside Demo Global Property method');
        }
    }

  }
}