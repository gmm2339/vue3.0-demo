<template>
    <div>
        <div>----------------------------</div>
        <div>{{name}}</div>
        <button @click="getName">姓名</button>
        <div>{{age}}</div>
        <button @click="getAge">年龄</button>
    </div>
</template>

<script>
     import {ref} from 'vue'
     import  useName from './set-people-optimize/useName'
     import  useAge from './set-people-optimize/useAge'
    export default {
        name: "SetPeopleOptimize",
        props:{
            people: {
                type: Object,
                required: true
            },
        },
        setup(props){
            console.log(props);
            let people=props.people;
            let {name ,getName}  = useName(people);
            let {age ,getAge}  = useAge(people);
            return {
                name,
                getName,
                age,
                getAge
            }
        },
    }
</script>

<style scoped>

</style>