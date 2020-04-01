(function () {
    "use strict";
    setTimeout(function () {
        const shouldRedirect ={%= On(CurrentQuestion.Value HasNone {1}, "true", "false") %};
        if (shouldRedirect) {
            {% Dim suffix = CurrentADC.Var("surveySuffix") %}
            const params = [
                "Survey=" + encodeURIComponent(document.querySelector("input[name=Survey]").value),
                "Intvw=" + encodeURIComponent(document.querySelector("input[name=Intvw]").value),
                "Position=" + encodeURIComponent(document.querySelector("input[name=Position]").value),
                encodeURIComponent("{%:= CurrentQuestion.InputName() %}") + "=" + encodeURIComponent("{%:= CurrentQuestion.AvailableResponses[1].InputValue() %}")
           ];
            window.location.href = "{%:= CurrentADC.Var("masterUrl") %}&state{%:= suffix %}=1&params{%:=suffix%}=" +encodeURIComponent(params.join("&"));
        } else {
            document.forms[0].submit();
        }
    }, 0);
}());