// src/shims-vue.d.ts ou vue-shims.d.ts
declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
  