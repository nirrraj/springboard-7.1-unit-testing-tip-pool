describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function (){
        //initialization logic
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

    //test submitPaymentInfo
    it('should add payment info to allPayments',function(){
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    });

    //test createCurPayment
    it('should create a new payment on createCurPayment()', function(){
        let expectedPayment = {
          billAmt: '100',
          tipAmt: '20',
          tipPercent: 20,
        }
    
        expect(createCurPayment()).toEqual(expectedPayment); //values equal
      });

    //appendPaymentTable
      it('should add row to payment table', function(){
        submitServerInfo();
        appendPaymentTable(createCurPayment());

        let currentRows = document.querySelectorAll('#paymentTable tbody tr td');

        expect(currentRows.length).toEqual(4);
      });

    //updateSummary
    it('should add row to summary table', function(){
        submitServerInfo();
        updateSummary();

        let currentRows = document.querySelectorAll('#summaryTable tbody tr td');

        expect(currentRows.length).toEqual(3);
    });

    it('should add a delete button for new payment table row', function(){
        submitServerInfo();
        appendPaymentTable(createCurPayment());
    
        let currentRows = document.querySelectorAll('#paymentTable tbody tr td');
    
        expect(currentRows[3].innerText).toEqual('X');
      });

    afterEach(function (){
        //teardown logic
        paymentId = 0;
        allPayments = {};
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        billAmtInput.value = '';
        tipAmtInput.value = '';
    });
});