<template>
    <div class="post_msg">
        <vs-button @click="popupActivo=true" :color="colorx" type="flat" size="small">운동일지 작성</vs-button>
        <vs-popup class="exercise" title="운동일지 작성" :active.sync="popupActivo">
            <div class="post_msg_exer">
                <form>
                    <div>
                        <input class="button_class" type="button" v-on:click.prevent="addRow" value="운동 추가">
                        <input class="button_class" id="exer_submit" type="submit" value="작성">
                    </div>
                    <table class="exer_input">
                        <tbody >
                        <tr v-for="exerInput in exerInputs" :key="exerInput.index">
                            <td>
                                <div class="exer_sel" >
                                    <vs-select
                                            placeholder="운동 선택"
                                            autocomplete
                                            class="selectExercise"
                                            v-model="exerInput.exercise"

                                    >
                                        <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options" />
                                    </vs-select>
                                </div>
                            </td>
                            <td>세트: <input type="number" v-model="exerInput.setCnt" class="exer_num" :id="index"></td>
                            <td>회수: <input type="number" v-model="exerInput.cnt" class="exer_num"></td>
                            <td>분: <input type="number" v-model="exerInput.time" class="exer_num"></td>
                            <td>
                                <input class="button_class" id="delete" type="button" v-on:click="removeElement(index);" style="cursor: pointer" value="삭제">
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <div class="exer_upload_image">
                        <vs-upload  text="사진을 추가하세요" action="서버URL입력" @on-success="successUpload" />
                    </div>
                    <div class="exer_textarea">
                        <vs-textarea label="내용을 입력하세요" v-model="textarea" />
                    </div>
                </form>
            </div>
        </vs-popup>
    </div>
</template>

<script>
    export default {
        name: "PostMsg",
        components: {},
        data() {
            return {
                colorx: '#808080',
                popupActivo: false,
                point: '#25b7d3',
                exerInputs: [],
                textarea: "",
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
        },
        methods:{
            successUpload(){
                this.$vs.notify({color:'success',
                    title:'사진이 업로드 되었습니다.',
                })
            },
            addRow: function() {
                this.exerInputs.push({
                    index: 0,
                    setCnt: 0,
                    cnt: 0,
                    exercise: "",
                    time: 0
                });
            },
            removeElement: function(index) {
                this.exerInputs.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
    .post_msg{
        margin-top: 50px;
        margin-bottom: 30px;
        align-items: center;
        justify-content: center;
        display: inline-block;
    }
    .exer_sel{
        display: inline-block;
    }
    .exer_num{
        width: 50px;
    }
    .exer_input{
        margin: 10px;
    }
    #exer_submit{
        float:right;
    }

    .button_class{
        font-size: 15px;
        font-weight: bold;
        background-color: #25b6d2;
        border: none;
        color: white;
        width: 90px;
        height: 25px;
        border-radius: 4px;
    }
    #delete{
        background-color: #808080;
    }
</style>