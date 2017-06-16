var answers = ["Bob","Joe"]
var counter;

function buttonToggle(a)
{
	for(var i = 1;i<=answers.length;i++)
	{
		var buttonName = String(i)+"button";
		var element = document.getElementById(buttonName);
		if(i!=a && element!=null && element.innerHTML.length>2)
		{
			element.innerHTML = "";
		}
	}

	var realElement = document.getElementById(String(a)+"button");
	if(realElement.innerHTML.length<=1)
	{	
		realElement.innerHTML = answers[a-1]
		counter = 0;
		realElement.style.fontSize = String(counter+"px");
		var i = setInterval(function(){
			realElement.style.fontSize = String(counter)+"px";

			if(counter == 24)
			{	
				clearInterval(i)
			}

			counter+=1	
			
		},20);
	}

	else
	{
		counter = 24;
		var i = setInterval(function(){
			realElement.style.fontSize = String(counter)+"px";
		

			if(counter == 2)
			{
				realElement.innerHTML = ""
				clearInterval(i)
			}
			counter-=1;
			},20);
	}
	
}
