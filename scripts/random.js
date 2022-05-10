// const btn = document.querySelector('button');




// function random(maxNum) {
//     return Math.floor(Math.random() * maxNum);
// }

// let colorArr = [];
// randomColorFunc();
// function randomColorFunc() {
//     for (let i = 0; i < 3; i++) {
//         let x = 255; // rgb
//         let color = random(x);
//         colorArr[colorArr.length] = color;
//     }    
//     return colorArr;
// }
// let color = `rgb(${colorArr})`
// let colorText = `<p style=\"color:${color}\";>${color}</p>`
// document.getElementById("test").innerHTML = colorText;
// console.log(color);
// btn.addEventListener('click',randomColorFunc());








    const words = document.querySelectorAll(".word");
    const wordsLength = words.length;
    console.log(wordsLength);
    let storeOutput = [];
    // let output = document.getElementById("shuffle-output").innerHTML;

    // for (let i = 0; i < wordsLength; i++) {
    //     output = words[i].innerHTML;
    //     console.log(typeof output)
    //     console.log(output)
    //     console.log(i);
    // }

    for (let i = 0; i < wordsLength; i++) {
        storeOutput[storeOutput.length] = i;
        console.log(storeOutput)
    }
    console.log(storeOutput)
