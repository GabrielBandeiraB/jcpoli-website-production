import { Component, Vue, Prop} from "vue-property-decorator";

@Component({
    components: {
    }
})
export default class Hackaton extends Vue {
    @Prop(Object) hackatonContent: any;

    constructor(){
        super();
        
    }
}