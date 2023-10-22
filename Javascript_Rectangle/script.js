const rectangle = document.querySelector("#center");

rectangle.addEventListener("mousemove", (details) => {
    const rectanglelocation = rectangle.getBoundingClientRect();
    const insiderectangleValue = parseInt(details.clientX - rectanglelocation.left) + 1
    if(insiderectangleValue < rectanglelocation.width/2){
        console.log("left: " + (rectanglelocation.width/2-insiderectangleValue));
        const redcolor = (gsap.utils.mapRange(0,rectanglelocation.width/2,1,0,insiderectangleValue))
        const titleColor = gsap.utils.mapRange(0,1,0,255,redcolor)
        rectangle.innerHTML = "Red Color Opacity: " + redcolor.toFixed(2)
        rectangle.style.color=`rgb(${titleColor},${titleColor},${titleColor})`
        console.log(redcolor);
        gsap.to(rectangle,{
            backgroundColor: `rgba(255,0,0,${redcolor})`,
            ease: Power4
        })
    }
    else{
        console.log("right: " + (insiderectangleValue-rectanglelocation.width/2));
        const blueColor = (gsap.utils.mapRange(rectanglelocation.width/2,rectanglelocation.width,0,1,insiderectangleValue))
        console.log(blueColor);
        gsap.to(rectangle,{
            backgroundColor: `rgba(0,0,255,${blueColor})`,
            ease: Power4
        })
        const titleColor = gsap.utils.mapRange(0,1,0,255,blueColor)
        rectangle.innerHTML = "Blue Color Opacity: " + blueColor.toFixed(2)
        rectangle.style.color=`rgb(${titleColor},${titleColor},${titleColor})`

    }
})
