import { isVue2, isVue3, reactive } from "vue-demi";
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  install: (app, options) => {
    // Plugin code goes here

    console.log("🚀 ~ file: plugin.js:19 ~ reactive:", reactive)

    

    // app.component('DHello', HelloWorld);

    if( isVue2){
        console.log('insdie isVUE 2');
    const VueInstance = new app();
    console.log("🚀 ~ file: plugin.js:15 ~ VueInstance:", VueInstance)
    
        VueInstance.prototype.$demi = {
            name : 'vue-demi-demo',
            start : () => {
                console.log('Start method init ');
            }
        };
    }else if( isVue3 ){
        console.log('insdie isVUE 3');


        app.config.globalProperties.$demi = {
            name : 'vue-demi-demo',
            start : () => {
                console.log('Start method init ');
            }
        }
      



    }else{}

  }
}
