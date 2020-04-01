(function () {
    "use strict";
    setTimeout(function () {
        const shouldRedirect ={%= On(CurrentQuestion.Value HasNone {1}, "true", "false") %};
        if (shouldRedirect) {
            window.location.href = "{%:= CurrentADC.Var("masterUrl") %}";
        } else {
            document.forms[0].submit();
        }
    }, 0);
}());