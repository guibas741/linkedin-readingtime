function readingTime(text) {
  const averageWordsPerMinute = 200;
  if(text.length > 0) {
    const words =text.split(" ").length;  
    if(words <= 20) return "1";
    return Math.ceil(words / averageWordsPerMinute);
  }
  return null
}


var showMoreButton = document.getElementsByClassName('feed-shared-inline-show-more-text__see-more-less-toggle see-more t-14 t-black--light t-normal hoverable-link-text');
if(!!showMoreButton) {
  console.log({showMoreButton})
  for(var i=0; i<showMoreButton.length; i++) { 
    const postText = showMoreButton[i].previousElementSibling.innerText;
    console.log({postText})
    const timeValue = readingTime(postText);
    if(timeValue !== null) {
      var textNode = document.createTextNode(`(${timeValue} min)`);
      showMoreButton[i].appendChild(textNode);       
      //showMoreButton[i].previousElementSibling.style.background = "green"
    }
  }
}



