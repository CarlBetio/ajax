var dataUser = "user="+user+"&pass="+pass;
 $.ajax({
    type:'POST',
    url:'login.php',
    data: dataUser,
    success: function(data){
        alert(data);  
    }
});