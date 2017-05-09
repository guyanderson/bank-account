function Account(name, inputtedBeginBal) {
  this.name = name;
  this.runningBal = inputtedBeginBal;
}

Account.prototype.change = function(){
  // if(inputtedChange === 0){
  //   return this.runningBal - inputtedWithdraw;
  // }
  console.log("TEST");
}

$(document).ready(function(){
  $("#changeAmount").click(function(newAccount, inputtedWithdraw, inputtedChange){
    $("#show-balance").append(newAccount.change());
  });
  $("form#mainform").submit(function(event) {
      event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedBeginBal = parseInt($("input#beginBal").val());
    var inputtedWithdraw = parseInt($("input#withdraw").val());
    var inputtedDeposite = parseInt($("input#deposite").val());
    var inputtedChange = $("input:radio[name=changeAmount]:checked").val();

    var newAccount = new Account(inputtedName, inputtedBeginBal);
    $("#show-balance").append(newAccount.change());

    console.log(newAccount.runningBal);

  });
});
