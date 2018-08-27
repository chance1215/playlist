const baseURL ="https://lit-fortress-6467.herokuapp.com/object";
document.querySelector('#choose').addEventListener('click',function(event){








axios.get(baseURL)
.then(function(event){
  event.preventDefualt()
  alert('sup')
 })







})


axios.post(baseURL)
.then(function(response){
  console.log(response)
})





const button = querySelector('#submit').addEventListener('click',function(resopnse){


axios.get(baseURL)
.then(function(event){
  event.preventDefualt()
  alert('sup')



 })
})




const button = querySelector('#clear').addEventListener('click',function(resopnse){



axios.get(baseURL)
.then(function(event){
  event.preventDefualt()
  alert('sup')
 })
})
