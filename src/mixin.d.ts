import Vue from 'vue';

declare module 'vue/types/vue' {
    
    interface Vue {
        $loading: any,
        $localStorage: any
    }

}