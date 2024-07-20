// Selecting all required items
const filterItem=document.querySelector(".items");
const filterImage=document.querySelectorAll(".image");

window.onload =() =>{ //once window loaded
            filterItem.onclick=(selectedItem)=>{ // when user clicked on filter item div

            if (selectedItem.target.classList.contains("item")) {//if click elem has .item class
               filterItem.querySelector(".active").classList.remove("active");
               selectedItem.target.classList.add("active");
               let filterName=selectedItem.target.getAttribute("data-name");
               filterImage.forEach((image)=>{
               	let filterImages=image.getAttribute("data-name");
               	if ((filterImages==filterName)|| filterName=="all") {
               		image.classList.remove("hide");
               		image.classList.add("show");
               	}
               	else{
               		image.classList.add("hide");
               		image.classList.remove("show");
               	}
               });
            }
       }
for (let index=0; index < filterImage.length; index++) {
   filterImage[index].setAttribute("onclick","preview(this)");//adding on click attr on imgs

}
}
// Selecting all required elements
const previewBox=document.querySelector(".preview-box");
previewImg=previewBox.querySelector("img");
categoryName=previewBox.querySelector(".title p");
closeIcon=previewBox.querySelector(".icon");
shadow=document.querySelector(".shadow");
// Image preview Function
function preview(element) {
   document.querySelector("body").style.overflow="hidden"
   let selectedPrevImg=element.querySelector("img").src;
   let selectedImgCategory=element.getAttribute("data-name");
   categoryName.textContent=selectedImgCategory;
   previewImg.src=selectedPrevImg;
   previewBox.classList.add("show");
   shadow.classList.add("show");
   closeIcon.onclick=()=>{
        previewBox.classList.remove("show");
        shadow.classList.remove("show");
        document.querySelector("body").style.overflow="scroll"
   }
}
