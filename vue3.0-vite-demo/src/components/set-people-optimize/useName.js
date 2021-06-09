import {ref} from "vue";
export  default  function  useName(people){
    const name = ref('');
    const getName=()=>{
        name.value = people.name;
    };
    return {
        name,
        getName
    }
}