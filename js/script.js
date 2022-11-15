const input = document.querySelector("input");
const btn = document.querySelectorAll(".btn");
const btn_reset =  document.querySelector(".btn_reset");
const btn_del =  document.querySelector(".btn_del");
const btn_result =  document.querySelector(".btn_result");

let formula ;

// 모든 btn
function clickBtn(e){
    e.preventDefault();
  
    formula = input.value;

    if(formula.substring(0,1) == 0){
        input.value = formula.substring(1, input.value.length);
    };

    input.value += this.value;
};



// result(=) 버튼
function clickResult(){
    input.value = eval(formula);
};



// reset 버튼
function clickReset(){
    input.value = 0
};



// del 버튼
function clickDel(){
   formula = input.value.substring(0, input.value.length-1);
   input.value = formula;
};



btn.forEach(btn => {
    btn.addEventListener("click",clickBtn);
});
btn_result.addEventListener("click", clickResult);
btn_reset.addEventListener("click", clickReset);
btn_del.addEventListener("click", clickDel);

