describe("Helpers test (with setup and tear-down)", function() {

    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
      });
    


    //sumPaymentTotal
    it('should add up all tips', function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
    });

    it('should add up all tips', function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmtInput.value = 300;
        tipAmtInput.value = 60;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(80);
    });

    it('should add up entire bill', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 300;
        tipAmtInput.value = 60;
        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(400);
    });

    it('should sum total tip percent', function(){
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 300;
        tipAmtInput.value = 60;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });

    //calculate tip percent
    it('should recalculate tip percent', function(){
        expect(calculateTipPercent(100, 20)).toEqual(20);
        expect(calculateTipPercent(300, 60)).toEqual(20);
    });


    //appendTd
    it('should append new td in row', function(){
        let newRow = document.createElement('tr');

        appendTd(newRow, 'this is a new row');

        expect(newRow.children.length).toEqual(1);
        expect(newRow.firstChild.innerHTML).toEqual('this is a new row');
    });

    afterEach(function (){
        //teardown logic
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});