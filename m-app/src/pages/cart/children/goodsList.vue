<template>
    <div class="recom-wrap">
        <ul class="recom-menu">
            <li class="item" v-for="(item) in list.recom_list" :key="item.action.path">
                <div class="showimg"><img :src="item.image_url" alt=""></div>
                <p class="goodsName">{{item.name}}</p>
                <em class="price">{{item.price}}</em>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'recom-list' ,
    props : {
        list : Object
    },

    created(){
        
    }
}
</script>

<style lang="scss" scoped>
    .recom-wrap{
        padding: 0 10px;
        box-sizing: border-box;
        .recom-menu{
            .item{
                width : 50%;
                float : left;
                .showimg{
                    width : 100%;
                    img{
                        width : 100%;
                        display: block;
                    }
                }
            }
        }
    }
</style>



