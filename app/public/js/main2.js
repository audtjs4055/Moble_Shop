const c1 = document.getElementById("c1"),
    c2 = document.getElementById("c2"),
    c3 = document.getElementById("c3"),
    c4 = document.getElementById("c4"),
    c5 = document.getElementById("c5"),
    c6 = document.getElementById("c6"),
    c7 = document.getElementById("c7"),
    c8 = document.getElementById("c8"),
    p1 = document.getElementById("p1"),
    p2 = document.getElementById("p2"),
    p3 = document.getElementById("p3"),
    p4 = document.getElementById("p4"),
    p5 = document.getElementById("p5"),
    p6 = document.getElementById("p6"),
    p7 = document.getElementById("p7"),
    p8 = document.getElementById("p8");

    const color=document.querySelector("#change"); 

    
    

const getJSON = function(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      const status = xhr.status;
      if(status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
  };


  const C = document.getElementById("C");

 
  getJSON('http://api.openweathermap.org/data/2.5/weather?q=Cheonan&appid=707ff0c3902b644c6468659c800225c0&units=metric',
    function(err, data) {
    if(err !== null) {
      alert('예상치 못한 오류 발생.' + err);
    } else {

        if(data.main.temp<=11){
            c1.src = "image/winterc1.jpg";
            p1.innerHTML = "19000원";
            c1.onclick=function(){
                window.location="/winterc1";
            }
            c2.src = "image/winterc2.jpg";
            p2.innerHTML = "20000원";
            c2.onclick=function(){
                window.location="/winterc2";
            }
            c3.src = "image/winterc3.jpg";
            p3.innerHTML = "15000원";
            c3.onclick=function(){
                window.location="/winterc3";
            }
            c4.src = "image/winterc4.jpg";
            p4.innerHTML = "23000원";
            c4.onclick=function(){
                window.location="/winterc4";
            }
            c5.src = "image/winterc5.jpg";
            p5.innerHTML = "20000원";
            c5.onclick=function(){
                window.location="/winterc5";
            }
            c6.src = "image/winterc6.jpg";
            p6.innerHTML = "21000원";
            c6.onclick=function(){
                window.location="/winterc6";
            }
            c7.src = "image/C1.jpg";
            p7.innerHTML = "12000원";
            c7.onclick=function(){
                window.location="/purchase1";
            }
            c8.src = "image/Coat6.jpg";
            p8.innerHTML = "27000원";
            c8.onclick=function(){
                window.location="/Coat6";
            }
        }
        else if(11<data.main.temp<=20){
            c1.src = "image/C2.jpg";
            c1.onclick=function(){
                window.location="/purchase2";
            }
            c2.src = "image/C3.jpg";
            c2.onclick=function(){
                window.location="/purchase3";
            }
            c3.src = "image/C4.jpg";
            c3.onclick=function(){
                window.location="/purchase4";
            }
            c4.src = "image/C5.jpg";
            c4.onclick=function(){
                window.location="/purchase5";
            }
            
            c5.src = "image/C6.jpg";
            c5.onclick=function(){
                window.location="/purchase6";
            }
            c6.src = "image/C7.jpg";
            c6.onclick=function(){
                window.location="/purchase7";
            }
            c7.src = "image/Coat8.jpg";
            c7.onclick=function(){
                window.location="/Coat8";
            }
            c8.src = "image/Coat5.jpg";
            c8.onclick=function(){
                window.location="/Coat5";
            }
        }

      
        C.innerHTML = data.main.temp+"°";
//       alert(`현재
//         온도는 ${data.main.temp}°
//         풍속은 ${data.wind.speed}m/s
//         습도는 ${data.main.humidity}%
//   입니다.
//   오늘의
//         최고기온은 ${data.main.temp_max}°
//         최저기온은 ${data.main.temp_min}°
//   입니다.`)
    }
  });

  var a=0;
  const start = document.getElementById("start");

  change.addEventListener("click",function(){
    //a=prompt("입력해주세요","ex)1,2,3,4");
    if(color.innerHTML=="봄웜톤"){ //봄웜톤
      start.innerHTML="봄웜톤 추천 상품"
      color.onclick=function(){
        window.location="/main";
      }
      c1.src ="image/springwarm1.jpg";
      c2.src ="image/springwarm2.jpg";
      c3.src ="image/springwarm3.jpg";
      c4.src ="image/springwarm4.jpg";
      c5.src ="image/springwarm5.jpg";
      c6.src ="image/springwarm6.jpg";
      c7.src ="image/springwarm7.jpg";
      c8.src ="image/springwarm8.jpg";
      p1.innerHTML="15000원"
      p2.innerHTML="15000원"
      p3.innerHTML="15000원"
      p4.innerHTML="15000원"
      p5.innerHTML="15000원"
      p6.innerHTML="15000원"
      p7.innerHTML="15000원"
      p8.innerHTML="15000원"
      c1.onclick=function(){
        window.location="/springwarm1";
      }
      c2.onclick=function(){
        window.location="/springwarm2";
      }
      c3.onclick=function(){
        window.location="/springwarm3";
      }
      c4.onclick=function(){
        window.location="/springwarm4";
      }
      c5.onclick=function(){
        window.location="/springwarm5";
      }
      c6.onclick=function(){
        window.location="/springwarm6";
      }
      c7.onclick=function(){
        window.location="/springwarm7";
      }
      c8.onclick=function(){
        window.location="/springwarm8";
      }
    }
    else if(color.innerHTML=="가을웜톤"){//가을웜톤
      start.innerHTML="가을웜톤 추천 상품"
      color.onclick=function(){
        window.location="/main";
      }
      c1.src ="image/autumnwarm1.jpg";
      c2.src ="image/autumnwarm2.jpg";
      c3.src ="image/autumnwarm3.jpg";
      c4.src ="image/autumnwarm4.jpg";
      c5.src ="image/autumnwarm5.jpg";
      c6.src ="image/autumnwarm6.jpg";
      c7.src ="image/autumnwarm7.jpg";
      c8.src ="image/autumnwarm8.jpg";
      p1.innerHTML="15000원"
      p2.innerHTML="15000원"
      p3.innerHTML="15000원"
      p4.innerHTML="15000원"
      p5.innerHTML="15000원"
      p6.innerHTML="15000원"
      p7.innerHTML="15000원"
      p8.innerHTML="15000원"


      
      c1.onclick=function(){
        window.location="/autumnwarm1";
      }
      c2.onclick=function(){
        window.location="/autumnwarm2";
      }
      c3.onclick=function(){
        window.location="/autumnwarm3";
      }
      c4.onclick=function(){
        window.location="/autumnwarm4";
      }
      c5.onclick=function(){
        window.location="/autumnwarm5";
      }
      c6.onclick=function(){
        window.location="/autumnwarm6";
      }
      c7.onclick=function(){
        window.location="/sautumnwarm7";
      }
      c8.onclick=function(){
        window.location="/autumnwarm8";
      }
    }
    else if(color.innerHTML=="여름쿨톤"){//여름쿨톤
      start.innerHTML="여름쿨톤 추천 상품"
      color.onclick=function(){
        window.location="/main";
      }
      c1.src ="image/summercool1.jpg";
      c2.src ="image/summercool2.jpg";
      c3.src ="image/summercool3.jpg";
      c4.src ="image/summercool4.jpg";
      c5.src ="image/summercool5.jpg";
      c6.src ="image/summercool6.jpg";
      c7.src ="image/summercool7.jpg";
      c8.src ="image/summercool8.jpg";
      p1.innerHTML="15000원"
      p2.innerHTML="15000원"
      p3.innerHTML="15000원"
      p4.innerHTML="15000원"
      p5.innerHTML="15000원"
      p6.innerHTML="15000원"
      p7.innerHTML="15000원"
      p8.innerHTML="15000원"


      c1.onclick=function(){
        window.location="/summercool1";
      }
      c2.onclick=function(){
              window.location="/summercool2";
      }
      c3.onclick=function(){
              window.location="/summercool3";
      }
      c4.onclick=function(){
              window.location="/summercool4";
      }
      c5.onclick=function(){
              window.location="/summercool5";
      }
      c6.onclick=function(){
              window.location="/summercool6";
      }
      c7.onclick=function(){
              window.location="/summercool7";
      }
      c8.onclick=function(){
              window.location="/summercool8";
      }


    }
    else if(color.innerHTML=="겨울쿨톤"){//겨울쿨톤
      start.innerHTML="겨울쿨톤 추천 상품"
      color.onclick=function(){
        window.location="/main";
      }
      c1.src ="image/wintercool1.jpg";
      c2.src ="image/wintercool2.jpg";
      c3.src ="image/wintercool3.jpg";
      c4.src ="image/wintercool4.jpg";
      c5.src ="image/wintercool5.jpg";
      c6.src ="image/wintercool6.jpg";
      c7.src ="image/wintercool7.jpg";
      c8.src ="image/wintercool8.jpg";
      p1.innerHTML="15000원"
      p2.innerHTML="15000원"
      p3.innerHTML="15000원"
      p4.innerHTML="15000원"
      p5.innerHTML="15000원"
      p6.innerHTML="15000원"
      p7.innerHTML="15000원"
      p8.innerHTML="15000원"

      c1.onclick=function(){
        window.location="/wintercool1";
      }
      c2.onclick=function(){
            window.location="/wintercool2";
      }
      c3.onclick=function(){
            window.location="/wintercool3";
      }
      c4.onclick=function(){
            window.location="/wintercool4";
      }
      c5.onclick=function(){
            window.location="/wintercool5";
      }
      c6.onclick=function(){
            window.location="/wintercool";
      }
      c7.onclick=function(){
            window.location="/wintercool7";
      }
      c8.onclick=function(){
            window.location="/wintercool8";
      }
    }
    else{
      alert("퍼스널컬러를 입력해주세요");
    }

  
  })

