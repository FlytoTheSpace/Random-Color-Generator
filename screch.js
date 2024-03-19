
const body = document.getElementsByTagName('body')[0]
const $ = (query)=>document.querySelector(query)
/**
 * @returns A Number in-between 0 and 255
 */
const random = ()=>{
  return Math.floor(Math.random() * 255);
}

const setColor = (color)=>{
  if ( color === 'random' ){
    const red = random();
    const green = random();
    const blue = random();
    const color = `rgb(${red}, ${green}, ${blue})`; // Construct the RGB color string
    body.style.background = color;
    return null
  }

  body.style.background = color
}


$('#red').onclick = () => setColor('red');
$('#green').onclick = () => setColor('lightGreen');
$('#blue').onclick = () => setColor('blue');
$('#random').onclick = () => setColor('random')