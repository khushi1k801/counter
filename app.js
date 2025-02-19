let count = 0;

let value = document.querySelector("#value");
let btns = document.querySelectorAll("button");

btns.forEach( function (btn) {
btn.addEventListener("click" , function (e) {
const styles = e.currentTarget.classList ;
if(styles.contains("decrease")){
    count--;
}else if(styles.contains("increase")){
    count++;
}else if(styles.contains("reset")){
    count = 0;
}
if(count > 0){
    value.style.color = "green" ; 
}
else if(count < 0){
    value.style.color = "red" ;
}
else{
    value.style.color = "#222" ;
}
value.textContent = count ;
})
});
