function saveFM()
{

    
    var player_name=document.getElementById("player_name").value;
    
    var q1=$("input[type='radio'][name='q1']:checked").val();
    var q2=$("input[type='radio'][name='q2']:checked").val();
    var q3=$("input[type='radio'][name='q3']:checked").val();
    var q4=$("input[type='radio'][name='q4']:checked").val();
    var q5=$("input[type='radio'][name='q5']:checked").val();
    

    if (( player_name == '') || (typeof q1 == 'undefined') || (typeof q2 == 'undefined') || (typeof q3 == 'undefined') || (typeof q4 == 'undefined') || (typeof q5 == 'undefined'))
    {alert("All Question is Mandatory");
    }else{
       
        result(q1,q2,q3,q4,q5,player_name);

        window.open("result.html", "_self");
        
    }
    
}

function result(q1,q2,q3,q4,q5,player_name)
{
    var result=0; 

    if(q1==="ans3")
    { result=result+1;
    localStorage.setItem("q1","Right"); 
    }else{
        localStorage.setItem("q1","Wrong");  
    }

    if(q2==="ans1")
    { result=result+1;
    localStorage.setItem("q2","Right"); 
    }else{
        localStorage.setItem("q2","Wrong");  
    }

    if(q3==="ans3")
    { result=result+1;
    localStorage.setItem("q3","Right"); 
    }else{
        localStorage.setItem("q3","Wrong");  
    }

    if(q4==="ans1")
    { result=result+1;
    localStorage.setItem("q4","Right"); 
    }else{
        localStorage.setItem("q4","Wrong");  
    }

    if(q5==="ans3")
    { result=result+1;
    localStorage.setItem("q5","Right"); 
    }else{
        localStorage.setItem("q5","Wrong");  
    }

    localStorage.setItem("result","( "+player_name+" ) "+result+"/5");  
}