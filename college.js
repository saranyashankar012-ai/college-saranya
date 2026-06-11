document.querySelectorAll("a").forEach(link => {
link.addEventListener("click", function(e){

e.preventDefault();

const target =
document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior: "smooth"
});

});
});
document.querySelectorAll(".accordion-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{

        let content = btn.nextElementSibling;

        if(content.style.display==="block"){
            content.style.display="none";
        }else{
            content.style.display="block";
        }

    });
});
function submitApplication() {
    alert("Thank you for your interest. Application submitted successfully!");
}