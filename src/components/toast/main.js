import index from './index.vue';

let instance;
let instances = [];

export default {
  install (Vue) {
    const ToastConstructor = Vue.extend(index);
    Vue.prototype.$toast = function (options = {}) {
      if (typeof options === 'string') {
        options = {
          message: options
        };
      }
      instance = new ToastConstructor({
        propsData: options
      });
      instance.$mount()
      console.log(instance)
      instance.$toast.default = [options.message]
      document.body.appendChild(instance.$el)
    }
  }
}