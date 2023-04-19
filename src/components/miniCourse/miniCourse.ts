import { Component, Vue, Prop} from "vue-property-decorator";

@Component({
    components: {
    }
})
export default class MiniCourse extends Vue {
    @Prop(Object) course: any;

    constructor(){
        super();
        
    }
}