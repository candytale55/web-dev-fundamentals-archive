
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumaRec(nums, n){
    if (n <=0){  /*Queremos que cuando el array esté vacío, la función devuelva un cero*/
        return 0;
    } else {
        return sumaRec(nums, n-1) + nums[n-1]; 
    }
}

console.log("Suma Recursiva: " +sumaRec(nums, nums.length));



function sumaIter(nums){
    let sum = 0;
    for (var i = 0; i<nums.length; i++){
        sum += nums[i];
    }
    return sum;
}
console.log("Suma Iterativa: " + sumaIter(nums));



console.log("Usando reduce :"+ nums.reduce((acc, index) => acc + index, 0)); 


/*
La recursividad es bastante peculiar porque suele funcionar autoejecutando funciones con un ámbito menos al problema padre. Es por eso que en toda solución recursiva contamos con 2 elementos:

Un caso base: es el caso al que toda función recursiva tiene que acabar llegando para dar por resuelto el caso más simple del problema que queremos resolver. Si no definimos un caso base dentro de nuestra solución recursiva llamaremos a nuestra función infinitas veces hasta que acabemos con todos los recursos del sistema.

Un caso recursivo: Que suele ser una función que es capaz de autoinvocarse. La clave de esta autoinvocación es que los elementos que le pasemos tendrán que ser menores que los del problema padre ya que si no nunca podríamos llegar al caso base.
*/