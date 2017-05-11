function Account(inputtedName, inputtedBeginBal) {
  this.accountName = inputtedName;
  this.runningBal = inputtedBeginBal;
}
function showHide(show, hide,){
   $(show).show();
   $(hide).hide();
}
Account.prototype.transaction = function(inputtedTransactionAmount, inputtedChange){
  if(inputtedChange === "withdraw"){
     this.runningBal -= inputtedTransactionAmount;
  }  else if (inputtedChange === "deposit"){
     this.runningBal += inputtedTransactionAmount;
    }
}

$(document).ready(function(){

  var newAccount = new Account();
  var inputtedTransactionAmount;
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
    inputtedTransactionAmount = parseInt($("input#transactionAmount").val());
    newAccount.transaction(inputtedTransactionAmount, inputtedChange)
    $("#show-balance").text("$" + newAccount.runningBal);
    $("input#transactionAmount").val("");
  });
});
