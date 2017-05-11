function Account(inputtedName, inputtedBeginBal) {
  this.accountName = inputtedName;
  this.runningBal = inputtedBeginBal;
}
function showHide(show, hide,){
   $(show).show();
   $(hide).hide();
}
Account.prototype.transaction = function(inputtedWithdraw, inputteddeposit, inputtedChange){
  if(inputtedChange === "withdraw"){
     this.runningBal -= inputtedWithdraw;
  }  else if (inputtedChange === "deposit"){
     this.runningBal += inputteddeposit ;
    }
}

$(document).ready(function(){

  var newAccount = new Account();
  var inputtedWithdraw;
  var inputteddeposit;
  var inputtedChange;

  $("form#mainform").submit(function(event) {
    event.preventDefault();
  var inputtedName = $("input#name").val();
  var inputtedBeginBal = parseInt($("input#beginBal").val());
  newAccount.accountName = inputtedName;
  newAccount.runningBal = inputtedBeginBal;
  $("#show-balance").append("$" + newAccount.runningBal);
  });

  $("#changeAmount").click(function(){
    inputtedChange = $("input:radio[name=changeAmount]:checked").val();
    inputtedWithdraw = parseInt($("input#withdraw").val());
    inputteddeposit = parseInt($("input#deposit").val());
    newAccount.transaction(inputtedWithdraw, inputteddeposit, inputtedChange)
    $("#show-balance").text("$" + newAccount.runningBal);

  });

});
