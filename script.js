let radius;
let circumference;
let area;
const PI=3.14
document.getElementById("circlebtn").onclick = function() {
    radius = document.getElementById("radius").value;
    circumference = 2 * PI * radius;
    area = PI * radius * radius;
    console.log("radius entered: " + radius);
    console.log("circumference: " + circumference);
    console.log("area:"+ area)
    document.getElementById("greeting").innerText = "The circumference = " + circumference;
    document.getElementById("area").textContent = "The area = " + area;
}

    let length;
    let breadth;
    let area1;       
    let perimeter1 ;
document.getElementById("recbtn").onclick = function() {


    length=document.getElementById("length").value;
    width=document.getElementById("width").value;
    area1=length*width;
    perimeter1=2*(Number(length)+Number(width));
    console.log("length entered: " + length);
    console.log("width entered: " + width);
    console.log("area:"+ area1)
    console.log("perimeter:"+ perimeter1)
    document.getElementById("rectangle-area").innerText = "The area = " + area1;
    document.getElementById("rectangle-perimeter").textContent = "The perimeter = " + perimeter1;
  

}

let base;
let height;
let side_1;
let side_2;
let area2;
let perimeter2;
document.getElementById("trianglebtn").onclick = function() {
    base=Number(document.getElementById("base").value);
    height=Number(document.getElementById("height").value);
    side_1=Number(document.getElementById("side_1").value);
    side_2=Number(document.getElementById("side_2").value);
    area2=0.5*base*height;
    perimeter2=base+side_1+side_2;
    console.log("base entered: " + base);
    console.log("height entered: " + height);
    console.log("area:"+ area2)
    console.log("perimeter:"+ perimeter2)
    document.getElementById("triangle-area").innerText = "The area = " + area2;
    document.getElementById("triangle-perimeter").textContent = "The perimeter = " + perimeter2;
}