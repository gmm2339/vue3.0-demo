import {ref} from "vue";
export  default  function   useAge(people){
     const age = ref('');
      const getAge=()=>{
          age.value = people.age;
      };
      return {
          age,
          getAge
      }
}