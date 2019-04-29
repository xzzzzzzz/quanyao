<template>
    <div class="position">
        <div class="address-list" v-for="(item,index) in addressList" :key="index">
            <div class="city">
                上海
            </div>
            <div class="area-list">
                <div class="area-item">
                    静安区
                </div>
                <div class="area-item">
                    静安区
                </div>
                <div class="area-item">
                    静安区
                </div>
                <div class="area-item">
                    静安区
                </div>
                <div class="area-item">
                    静安区
                </div>
                <div class="area-item">
                    静安区
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api/api.js'
export default {
    data () {
        return {
            addressList: []
        }
    },
    mounted() {
        this.get()
    },
    methods : {
        async get() {
            const params={}
            const data = await this.https(api.city(), params);
            if(data.code =='2000'){
                this.addressList = data.data
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import './static/styles/global';
.position{
    padding: px2rem(20);
    .address-list{
        .city{
            height:px2rem(30);
            line-height: px2rem(30);
            margin-bottom:px2rem(10);
        }
        .area-list{
            overflow: hidden;
            .area-item{
                float: left;
                width: 24%;
                box-sizing: border-box;
                text-align: center;
                border: 1px solid #ff6d02;
                padding: px2rem(10) 0;
                margin: 0 1% px2rem(10) 0;
                &:nth-child(4n){
                    margin-right:0;
                }
            }
        }
    }
}
</style>

