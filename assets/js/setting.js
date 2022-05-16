

const color= [
  {

  	name:'light blue',
  	code:'#3e99f5',
  	url:'assets/css/light-blue.css'
  },

   {

  	name:'pink',
  	code:'#fb839e',
  	url:'assets/css/pink.css'
  },

  {

  	name:'light green',
  	code:'#0dcdbd',
  	url:'assets/css/light-green.css'
  },
  
  {

  	name:'red',
  	code:'#cc3b3b',
  	url:'assets/css/red.css'
  },

  {

  	name:'yellow',
  	code:'#ff9800',
  	url:'assets/css/yellow.css'
  }

]

$(document).ready(function(){
	setColors();
	function setColors(){
		for (var i = 0; i <color.length; i++) {
			const span =document.createElement("span");
			span.style.backgroundColor=color[i].code;
			$('.colors').append(span);
		}
	
	}
	$('.colors span').click(function(){
		const index=$(this).index();
		$('.alternate-style').attr("href",color[index].url);
	})
})