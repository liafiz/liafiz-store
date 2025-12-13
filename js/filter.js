// filter.js - placeholder
function filterPlatform(platform){
  const cards = document.querySelectorAll('.card');
  cards.forEach(c=>{
    if(platform==='all') c.style.display='';
    else {
      c.style.display = (c.dataset.platform===platform) ? '' : 'none';
    }
  });
}
