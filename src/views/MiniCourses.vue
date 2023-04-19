<template>
  <div>
    <PhotoHeader
      :title="title"
      :description="description"
      :image="background"
      offset="calc((-100/523)*100vw + 67.304015296px)"
    ></PhotoHeader>

    <Main>
      <h4 class="text-center">Agenda</h4>

      <div class="button-container">
        <button class="button" v-on:click="clearFilter">Todos as datas</button>
        <button class="button" v-on:click="filterCourses">
          09/05
        </button>
        <button class="button" v-on:click="filterCourses">10/05</button>
        <button class="button" v-on:click="filterCourses">11/05</button>
        <!--<button class="button" v-on:click="filterCourses">12/05</button>
        <button class="button" v-on:click="filterCourses">13/05</button>-->
      </div>
      <div class="courses-list">
        <div v-for="(props, index) in filtered_courses" :key="index">
          <!--<h3 class="section-course">{{ props.curso }}</h3> -->
          <div v-for="(course, index) in props.minicurso" :key="index">
            <MiniCourse :course="course"></MiniCourse>
            <hr />
          </div>
        </div>
      </div>
    </Main>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import PhotoHeader from '../components/organization/PhotoHeader.vue'
import Main from '../components/organization/Main.vue'
import MiniCourse from '../components/miniCourse/index.vue'
import { miniCourses_Section } from '@/models/miniCourses'

@Component({
  components: {
    PhotoHeader,
    Main,
    MiniCourse
  }
})
export default class MiniCourses extends Vue {
  private coursesList: any
  private filtered_courses: any

  private title = 'Minicursos'
  private description = 'Minicursos da jornada'
  private background = 'assets/img/lab.jpg'

  filterCourses(e: any) {
    let data = e.target.innerText
    this.filtered_courses = this.coursesList.map(item => {
      const minicurso = item.minicurso.filter(aux => {
        return aux.date == data
      })

      return { ...item, minicurso }
    })
  }

  clearFilter() {
    this.filtered_courses = this.coursesList
  }

  constructor() {
    super()

    this.coursesList = miniCourses_Section
    this.filtered_courses = this.coursesList
  }
}
</script>

<style scoped>
.courses-list > div:not(:first-child) {
  margin-top: 35px;
}

.section-course {
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  background-color: whitesmoke;
  box-shadow: 0 0.46875rem 2.1875rem rgba(0, 0, 0, 0.03),
    0 0.9375rem 1.40625rem rgba(0, 0, 0, 0.03),
    0 0.25rem 0.53125rem rgba(0, 0, 0, 0.05),
    0 0.125rem 0.1875rem rgba(0, 0, 0, 0.03);
  padding: 1rem;
}
.button-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5rem;
}

.button {
  padding: 1rem;
  border: 0.1rem solid white;
  border-radius: 5rem;
  font-weight: 700;
  background-color: #006ca3;
  margin-right: 2rem;
  color: white;
  transition: all 0.2s ease-in-out;
}

.button:hover {
  background-color: #20407d;
  transform: background-color;
  transform: scale(1.1);
}

.button:focus {
  background-color: #20407d;
  transform: background-color;
  transform: scale(1.1);
}

@media screen and (max-width: 576px) {
  .button-container {
    flex-direction: column;
  }
  .button {
    margin-bottom: 1rem;
  }
}

@media screen and (min-width: 800px) {
  .button {
    width: 10.5rem;
  }
}

h4 {
  color: black;
  margin-bottom: 3rem;
}
</style>
