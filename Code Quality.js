Code Quality level 1

Ques



const getData = async() =>{
let fetchedData = await fetch ("https://jsonplaceholder.typicode.com/todos/1");
let data = await fetchedData.json();
return data;
}