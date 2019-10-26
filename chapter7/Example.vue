<template>
    <div class="example">
        <spam class="title">{{text}}</spam>
    </div>
</template>

<script>
export default {
    name:'Example',
    data(){
        return{
            text:'example'
        }
    }
}
</script>

<style lang="stylus" scoped>
    span.title {color: #ffbb00;}
</style>