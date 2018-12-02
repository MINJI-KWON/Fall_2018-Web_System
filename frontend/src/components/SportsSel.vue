<template>
    <div class="sports_sel">
        <vs-select
                placeholder="골라보세요."
                autocomplete
                class="selectExercise"
                label="운동 종목"
                v-model="exercise"
        >
            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options" />
        </vs-select>
    </div>
</template>

<script>
    export default {
        name: "SportsSel",
        data() {
            return {
                exercise: [],
                options: [
                    {"text":"걷기","value":1},
                    {"text":"농구","value":2},
                    {"text":"달리기","value":3},
                    {"text":"데드리프트","value":4},
                    {"text":"러닝머신","value":5},
                    {"text":"런지","value":6},
                    {"text":"레그 레이즈","value":7},
                    {"text":"레그 익스텐션","value":8},
                    {"text":"레그 컬","value":9},
                    {"text":"레그 프레스","value":10},
                    {"text":"레터럴 레이즈","value":11},
                    {"text":"렛풀다운","value":12},
                    {"text":"마운틴 클라이머","value":13},
                    {"text":"배구","value":14},
                    {"text":"배드민턴","value":15},
                    {"text":"버피 테스트","value":16},
                    {"text":"벤치 프레스","value":17},
                    {"text":"볼링","value":18},
                    {"text":"숄더 프레스","value":19},
                    {"text":"수상 스키","value":20},
                    {"text":"수영","value":21},
                    {"text":"스노보드","value":22},
                    {"text":"스노클링","value":23},
                    {"text":"스쿠버 다이빙","value":24},
                    {"text":"스쿼시","value":25},
                    {"text":"스쿼트","value":26},
                    {"text":"스트레칭","value":27},
                    {"text":"아이스 스케이팅","value":28},
                    {"text":"아이스 하키","value":29},
                    {"text":"암 익스텐션","value":30},
                    {"text":"암 컬","value":31},
                    {"text":"암벽 등반","value":32},
                    {"text":"야구","value":33},
                    {"text":"에어로빅","value":34},
                    {"text":"요가","value":35},
                    {"text":"윗몸일으키기","value":36},
                    {"text":"인라인 스케이팅","value":37},
                    {"text":"줄넘기","value":38},
                    {"text":"축구","value":39},
                    {"text":"크런치","value":40},
                    {"text":"탁구","value":41},
                    {"text":"턱걸이","value":42},
                    {"text":"테니스","value":43},
                    {"text":"팔굽혀펴기","value":44},
                    {"text":"팔벌려뛰기","value":45},
                    {"text":"프론트 레이즈","value":46},
                    {"text":"플랭크","value":47},
                    {"text":"필라테스","value":48},
                    {"text":"핸드볼","value":49},
                    {"text":"훌라후프","value":50}]
            }
        }
    }
</script>

<style scoped>
    .sports_sel{
        align-items: center;
        justify-content: center;
        display: flex;
        margin-top: 10px;
        margin-bottom: 30px;
    }
</style>
