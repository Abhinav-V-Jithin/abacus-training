function random(n)
{
	return(Math.round(Math.random() * n));
}

function TakeTest()
{
	document.querySelectorAll('.status').forEach(headline =>	{
		headline.value="wrong";
	});
	document.querySelectorAll('.box-part').forEach(part =>
	{
		part.innerHTML = random(parseInt(document.querySelector('#select').value));
	});
	document.querySelector('#submit').onclick = () =>
	{
		let s1=0, s2=0, s3=0, s4=0, s5=0, s6=0, s7=0, s8=0, s9=0, s10=0;
		document.querySelectorAll('#s1').forEach(set1 =>
		{
			s1 += parseInt(set1.innerHTML);
		});
		if(document.querySelector('#s1-ans').value == s1)
		{
			document.querySelector('#s1-status').innerHTML = "correct";
			document.querySelector('#s1-status').style.color = "green";
		}
		document.querySelectorAll('#s2').forEach(set2 =>
		{
			s2 += parseInt(set2.innerHTML);
		});
		if(document.querySelector('#s2-ans').value == s2)
		{
			document.querySelector('#s2-status').innerHTML = "correct";
			document.querySelector('#s2-status').style.color = "green";
		}
		document.querySelectorAll('#s3').forEach(set3 =>
		{
			s3 += parseInt(set3.innerHTML);
		});
		if(document.querySelector('#s3-ans').value == s3)
		{
			document.querySelector('#s3-status').innerHTML = "correct";
			document.querySelector('#s3-status').style.color = "green";
		}

		document.querySelectorAll('#s4').forEach(set4 =>
		{
			s4 += parseInt(set4.innerHTML);
		});
		if(document.querySelector('#s4-ans').value == s4)
		{
			document.querySelector('#s4-status').innerHTML = "correct";
			document.querySelector('#s4-status').style.color = "green";
		}

		document.querySelectorAll('#s5').forEach(set5 =>
		{
			s5 += parseInt(set5.innerHTML);
		});
		if(document.querySelector('#s5-ans').value == s5)
		{
			document.querySelector('#s5-status').innerHTML = "correct";
			document.querySelector('#s5-status').style.color = "green";
		}

		document.querySelectorAll('#s6').forEach(set6 =>
		{
			s6 += parseInt(set6.innerHTML);
		});
		if(document.querySelector('#s6-ans').value == s6)
		{
			document.querySelector('#s6-status').innerHTML = "correct";
			document.querySelector('#s6-status').style.color = "green";
		}

		document.querySelectorAll('#s7').forEach(set7 =>
		{
			s7 += parseInt(set7.innerHTML);
		});
		if(document.querySelector('#s7-ans').value == s7)
		{
			document.querySelector('#s7-status').innerHTML = "correct";
			document.querySelector('#s7-status').style.color = "green";
		}

		document.querySelectorAll('#s8').forEach(set8 =>
		{
			s8 += parseInt(set8.innerHTML);
		});
		if(document.querySelector('#s8-ans').value == s8)
		{
			document.querySelector('#s8-status').innerHTML = "correct";
			document.querySelector('#s8-status').style.color = "green";
		}

		document.querySelectorAll('#s9').forEach(set9 =>
		{
			s9 += parseInt(set9.innerHTML);
		});
		if(document.querySelector('#s9-ans').value == s9)
		{
			document.querySelector('#s9-status').innerHTML = "correct";
			document.querySelector('#s9-status').style.color = "green";
		}

		document.querySelectorAll('#s10').forEach(set10 =>
		{
			s10 += parseInt(set10.innerHTML);
		});
		if(document.querySelector('#s10-ans').value == s10)
		{
			document.querySelector('#s10-status').innerHTML = "correct";
			document.querySelector('#s10-status').style.color = "green";
		}
		let score = 0;
		document.querySelectorAll('.status').forEach(status =>
		{
			console.log(status.innerHTML);
			if(status.innerHTML == "correct")
			{
				score += 1;
			}
		});
		document.querySelector('#score').innerHTML = `your total score: ${score}/10`;
	};
}
document.addEventListener('DOMContentLoaded', () =>
{
	TakeTest();
	document.querySelector('#retest').onclick = () =>
	{
		TakeTest();
	};
});
