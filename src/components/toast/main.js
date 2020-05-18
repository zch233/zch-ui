import index from './index.vue';

let instance;

export default {
  install (Vue) {
    const ToastConstructor = Vue.extend(index);
    Vue.prototype.$toast = function (options = {}) {
      if (instance) {
        instance.close()
      }
      if (typeof options === 'string') {
        options = {
          message: options
        };
      }
      instance = new ToastConstructor({
        propsData: options,
      }).$mount();
      instance.$toast.default = [options.message]
      document.body.appendChild(instance.$el)
      instance.visible = true
    }
  }
}