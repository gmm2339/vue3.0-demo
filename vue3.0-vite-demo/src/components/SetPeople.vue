<template>
    <div>
        <div>{{name}}</div>
        <button @click="getName">姓名</button>
        <div>{{age}}</div>
        <button @click="getAge">年龄</button>
    </div>
</template>
<script>
    import {ref} from 'vue'
    export default {
        name: "SetPeople",
        setup(){
            const people={
                name: 'Tom',
                age: 18
            }
            const name = ref('')
            const getName=()=>{
                name.value = people.name;
            }
            const age = ref('')
            const getAge=()=>{
                age.value = people.age;
            }
            return {
                name,
                getName,
                age,
                getAge
            }
        }
    }
</script>

<style scoped>

</style>