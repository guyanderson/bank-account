function Account(inputtedName, inputtedBeginBal, inputtedChange) {
  this.accountName = inputtedName;
  this.runningBal = inputtedBeginBal;
  this.inputtedChange = inputtedChange;
}
function showHide(show, hide,){
   $(show).show();
   $(hide).hide();
}
Account.prototype.transaction = function(inputtedWithdraw, inputtedDeposite){
  console.log(this.runningBal, typeof(inputtedWithdraw))
  if(this.inputtedChange === "withdraw"){
    console.log(this.runningBal -= inputtedWithdraw);
    return this.runningBal - inputtedWithdraw;

  }  else if (this.inputtedChange === "deposite"){
      return this.runningBal += inputtedDeposite ;
    }
}

$(document).ready(function(){

  var newAccount = new Account();
  var inputtedWithdraw;
  var inputtedDeposite;
  $("form#mainform").submit(function(event) {
    event.preventDefault();

  var inputtedName = $("input#name").val();
  var inputtedBeginBal = parseInt($("input#beginBal").val());
  inputtedWithdraw = parseInt($("input#withdraw").val());
  console.log(typeof(inputtedWithdraw))
  inputtedDeposite = parseInt($("input#deposite").val());
  var inputtedChange = $("input:radio[name=changeAmount]:checked").val();
  newAccount.accountName = inputtedName;
  newAccount.runningBal = inputtedBeginBal;
  newAccount.inputtedChange = inputtedChange;

  $("#changeAmount").click(function(){
    newAccount.transaction(inputtedWithdraw, inputtedDeposite)
    console.log(newAccount.runningBal);
  });


  $("#show-balance").append("$" + newAccount.runningBal);

  });


});
