// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );


    
    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();

function TotalCostChanged()
{
    Calculate();
}

function ProvidentFundContributionChanged()
{
    Calculate()
}

function TaxChanged() {
    Calculate()
}

function UifChanged() {
    Calculate()
}

function LunchChanged() {
    Calculate()
}

function Calculate()
{
    var totalCost = parseFloat(document.getElementById("TotalCost").value);
    var providentFundContribution = parseFloat(document.getElementById("ProvidentFundContribution").value);
    var providentFund = totalCost * (providentFundContribution / 100);
    var basicSalary = totalCost - providentFund;
    var tax = parseFloat(document.getElementById("Tax").value);
    var uif = parseFloat(document.getElementById("Uif").value);
    var lunch = parseFloat(document.getElementById("Lunch").value);
    var nettSalary = basicSalary - tax - uif - lunch;


    document.getElementById("ProvidentFund").innerHTML = "R " + CurrencyFormatted(providentFund);
    document.getElementById("BasicSalary").innerHTML = "R " + CurrencyFormatted(basicSalary);
    document.getElementById("NettSalary").innerHTML = "R " + CurrencyFormatted(nettSalary);
}

function CurrencyFormatted(amount) {
   var i = parseFloat(amount);
    if (isNaN(i)) { i = 0.00; }
    var minus = '';
    if (i < 0) { minus = '-'; }
    i = Math.abs(i);
    i = parseInt((i + .005) * 100);
    i = i / 100;
    s = new String(i);
    if (s.indexOf('.') < 0) { s += '.00'; }
    if (s.indexOf('.') == (s.length - 2)) { s += '0'; }
    s = minus + s;
    return s;
}