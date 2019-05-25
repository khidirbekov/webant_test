<template>
    <div>
        <section v-if="errored">
            <div class="error">
                <img src="../assets/Shape.png" id="error">
                <h1>Oh shucks!</h1>
                <p>Slow or no internet connection.
                    <br>
                    Please check your internet settings
                </p>
            </div>
        </section>

        <section v-else>
            <div v-if="loading" class="loading">Loading...</div>
            <section v-else class="container">
                    <div class="item" v-for="(image, index) in images" :key="image.id" :ref="index" v-on:click="getIdElem(index);">
                        <img :src="imagePath + image.image.contentUrl"/>

                    </div>
                <div class="nav">
                    <el-pagination
                    @current-change="handleCurrentChange" 
                    background
                    layout="prev, pager, next"
                    :total="pages*10">
                </el-pagination> 
                </div>
                
                    <div v-if="modal" class="modal" v-on:click="modal = false;">
                        <div class="modal-container">
                            <div class="img-container">
                                <img :src="imagePath + images[id_elem].image.contentUrl" />
                            </div>
                            <p>{{images[id_elem].name}}</p>
                            <span>{{images[id_elem].description}}</span>
                        </div>
                    </div> 
            </section>
        </section>
    </div>
</template>

<script>
    import axios from "axios";
   
    export default {
        methods: {
            handleCurrentChange(val) {
                this.page = val;
                let id_page = this.page;

                axios.get("https://cors-anywhere.herokuapp.com/http://gallery.dev.webant.ru/api/photos?new=false&popular=true&page=" + id_page +"&limit=15","accept: application/json")
                .then(response => {this.images = response.data.data;
                    this.pages = response.data.countOfPages;
                    console.log(response.data.data);
                })
                .catch(error => {
                console.log(error);
                this.errored = true;
                })
                .finally(() => (this.loading = false));
            },

            getIdElem(index){
                this.id_elem = index;
                this.modal = true;
            }
        },
        data() {
            return {
                imagePath: "http://gallery.dev.webant.ru/media/",
                images: [],
                loading: true,
                errored: false,
                pages: 0,
                page: [1],
                modal: false,
                id_elem: 0
            }
        },
        mounted() {
            let id_page = this.page;

            axios.get("https://cors-anywhere.herokuapp.com/http://gallery.dev.webant.ru/api/photos?new=false&popular=true&page=" + id_page +"&limit=15","accept: application/json")
            .then(response => {this.images = response.data.data;
                this.pages = response.data.countOfPages;
            })
            .catch(error => {
            console.log(error);
            this.errored = true;
            })
            .finally(() => (this.loading = false));

        }

    }

</script>

<style scoped>
  
</style>