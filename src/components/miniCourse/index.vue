<template>
  <div class="miniCourse">
    <div class="title">
      <i class="fas fa-graduation-cap"></i>
      <h3
        :title="course.title"
        v-bind:id="'true' ? course.title === 'Palestra de Abertura da Jornada: AskBlue, dos 0 aos 500' : ''"
      >
        {{ course.title }} <font color="red">{{course.warning}}</font>
      </h3>
    </div>

    <div class="info-h">
      <div>
        <h5 class="text-wrap" :title="course.instructor">
          Palestrante: {{ course.instructor }}
        </h5>
        <h6 class="text-wrap" :title="course.institution">
          Instituição: {{ course.institution }}
        </h6>
        <!--<h6 :title="course.responsible">Responsável: {{course.responsible}}</h6> -->
      </div>
      <div class="date-time-place">
        <i class="far fa-calendar-alt"></i>
        <i class="far fa-clock"></i>
        <i class="fas fa-map-marker-alt"></i>
        <div>{{ course.date }}</div>
        <div>{{ course.time }}</div>
        <div>
          <a v-if="course.link":href="course.link" target="_blank">{{ course.place }}</a>
          <div v-if="course.link == null">{{ course.place }}</div>
        </div>
      </div>
    </div>

    <div class="desc">
      <p>
        {{ course.desc }}
      </p>
    </div>
  </div>
</template>

<script src="./miniCourse.ts" lang="ts"></script>

<style src="./miniCourse.css" scoped></style>
