<template>
  <div>
    <v-carousel interval="5000" light hide-delimiters height="auto">
      <v-carousel-item
        v-for="(page, p_index) in speakersPaginated"
        :key="p_index"
      >
        <div class="speakers">
          <Speaker
            v-for="(speaker, index) in page.array"
            :key="index"
            :speaker="speaker"
          />
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Speaker from '@/components/organization/Speaker.vue'

@Component({
  components: {
    Speaker
  }
})
export default class Speakers extends Vue {
  @Prop(Array) private speakers: any
  @Prop(Number) private paginate: number

  private speakersPaginated: any = null

  constructor() {
    super()

    if (!this.paginate) this.paginate = 2

    if (this.paginate) {
      let pages =
        ((this.speakers.length / this.paginate) | 0) +
        (this.speakers.length % this.paginate)
      this.speakersPaginated = []

      for (let i = 0; i < pages; i++) {
        this.speakersPaginated.push(
          (() => {
            let objectsPerPage: any = []

            for (let j = 0; j < this.paginate; j++)
              if (this.speakers.length)
                objectsPerPage.push(this.speakers.shift())

            return {
              array: objectsPerPage
            }
          })()
        )
      }
    }
  }
}
</script>

<style lang="scss">
.speakers {
  margin: 25px 0;
}
.speakers .speaker {
  margin-bottom: 85px;
}

.v-carousel {
  box-shadow: unset !important;
  -webkit-box-shadow: unset !important;
  padding: 0 50px;
  box-sizing: content-box;
  position: relative;
  left: -50px;
}
</style>
