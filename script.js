var rollButton = document.getElementById("btn");
var text = document.getElementById("dice");

rollButton.addEventListener("click",function(){
  var result = Math.floor(Math.random() * 6) + 1;
    if(result == 1){
    text.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfIHKtmZgYnwFYn6yQPjq-4fw85pwbpY5CyG9h--P6A&s)";
    }
    else if (result == 2){
    text.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTLuMJFTUBiEN743p9rK_2rE8d-xKy8twSCc7lHsXiA&s)";
    }
    else if (result == 3){
    text.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6JfWSgJXwzsTepkgbUr3bdpBdU2zmnbT_NR_ReC-GaQ&s)";
    }
    else if (result == 4){
    text.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxok6EwasSr_XhmH4Emf7BFh-cMYzWcp4v_RsWwvcN6Q&s)";
    }
    else if (result == 5){
    text.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1yR8TFH0zpQxZaLnAqyqOJI8YFbdq2dE1XVhAtSCHrw&s)";
    } 
    else if (result == 6){
    text.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_WQ23MUzdX935ugZhRWMhmmHGw5mrJUmVs6QDJUbLA&s)";
    }
});


