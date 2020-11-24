
function calculoMontos(){
    var monto = parseFloat(document.getElementById('txtmonto').value.replace(/\./g, ''));

    var liquido = monto*1.1111111111111112;
    var retliquido = liquido*0.1;
    var pagarliquido = liquido-retliquido;

    var bruto = monto;
    var retbruto = monto*0.1;
    var pagarbruto = bruto - retbruto;

    document.getElementById('txtpactadoliquido').value      =   liquido.toFixed();   
    document.getElementById('txtretencionliquido').value    =   retliquido.toFixed();
    document.getElementById('txtapagarliquido').value       =   pagarliquido.toFixed();
 
    document.getElementById('txtpactadobruto').value        =   bruto.toFixed();
    document.getElementById('txtretencionbruto').value      =   retbruto.toFixed();
    document.getElementById('txtapagarbruto').value         =   pagarbruto.toFixed();

    format(document.getElementById('txtpactadoliquido'));
    format(document.getElementById('txtretencionliquido'));
    format(document.getElementById('txtapagarliquido'));
    format(document.getElementById('txtpactadobruto'));
    format(document.getElementById('txtretencionbruto'));
    format(document.getElementById('txtapagarbruto'));
    format(document.getElementById('txtmonto'));
}
