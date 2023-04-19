import { Vue, Component } from 'vue-property-decorator';

@Component
export default class LoaderMixin extends Vue {
    private loader: any;

    public showLoader() {
        this.loader = this.$loading.show();
    }

    public hideLoader() {
        this.loader.hide();
    }
}

