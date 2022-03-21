function Order(pizza, toppings, crust){
    this.pizza=pizza;
    this.toppings=toppings;
    this.crust=crust;
}
$(document).ready(function(){
    

    $("#deliver").click(function(){

        $(".yes").show()
        $("#formpizza").hide()

        function myPizza(){
            const pizzaCost = document.getElementById("pizza").value;
            return parseInt(pizzaCost);
        }
        function myToppings(){
            const toppingsCost = document.getElementById("toppings").value;
            return parseInt(toppingsCost);
        }
        function myCrust(){
            const crustCost = document.getElementById("crust").value;
            return parseInt(crustCost);
        }
        let cost =  new Order(myPizza(), myToppings(), myCrust())
        
        var totalCost = cost.pizza + cost.toppings + cost.crust 
        // alert(totalCost)
    
       
        $("#ok").append("your total ammount is"  + " " + totalCost + " " + "you can pick your product at any branch of sweetbite pizza" );
        
    })
    $("#no").click(function(){
        $("#ok").show()
        $(".yes").hide()
        
    })
    $("#yes").click(function(){
        $("#ok").hide()
        $("#form2").show()
        $(".yes").hide()

        
    })

    $("#finalorder").click(function(){
        $("#ok").hide()
        $("#form2").show()
        $(".yes").hide()
        $("#yes").hide()
         
        function myPizza(){
            const pizzaCost = document.getElementById("pizza").value;
            return parseInt(pizzaCost);
        }
        function myToppings(){
            const toppingsCost = document.getElementById("toppings").value;
            return parseInt(toppingsCost);
        }
        function myCrust(){
            const crustCost = document.getElementById("crust").value;
            return parseInt(crustCost);
        }
        let cost =  new Order(myPizza(), myToppings(), myCrust())
        
        var totalCost = cost.pizza + cost.toppings + cost.crust 

        var newCost = totalCost + 300 
        
        let customer = $("input#name").val();
            let phone = $("input#phone").val();
            let area = $("input#place").val();
    
            if ($("input#name").val() && $("input#phone").val() && $("input#place").val()!=""){
               alert ("hello" + " " + customer +" " + "we have received your order your total cost is" + " " 
               + newCost + " " + "the product will be delivered to" + " " + area + " " + "thanks for choosing to shop with us")
              }
              else {
                alert("Please fill in your delivery details");
               
              }
        

    })
})