<template>
    <div class="hackaton">
        <div class="title">
            <i class="fas fa-graduation-cap"></i>
            <!--<h3
                :title="hackatonContent.title"
                v-bind:id="'true' ? hackatonContent.title === 'Palestra de Abertura da Jornada: AskBlue, dos 0 aos 500' : ''"
                >
                {{ hackatonContent.title }} <font color="red">{{hackatonContent.warning}}</font>
            </h3> -->
        </div>
  
        <div class="info-h">
            <div>
                <h5 class="text-wrap" :title="hackatonContent.instructor">
                    Palestrante: {{ hackatonContent.instructor }}
                </h5>
                <h6 class="text-wrap" :title="hackatonContent.institution">
                    Instituição: {{ hackatonContent.institution }}
                </h6>
                <!--<h6 :title="course.responsible">Responsável: {{course.responsible}}</h6> -->
            </div>
            <div class="date-time-place">
                <i class="far fa-calendar-alt"></i>
                <i class="far fa-clock"></i>
                <i class="fas fa-map-marker-alt"></i>
                <div>{{ hackatonContent.date }}</div>
                <div>{{ hackatonContent.time }}</div>
                <div>
                    <a v-if="hackatonContent.link" :href="hackatonContent.link" target="_blank">{{ hackatonContent.place }}</a>
                    <div v-if="hackatonContent.link == null">{{ hackatonContent.place }}</div>
                </div>
            </div>
        </div>
  
        <div class="desc">
            <p>
                {{ hackatonContent.desc }}
            </p>
        </div>
    </div>
</template>
  
<script src="./hackaton.ts" lang="ts"></script>
  
<style src="./hackaton.css" scoped></style>
  