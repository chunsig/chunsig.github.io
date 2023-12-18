function formatCurrency(amount) {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(amount);
}

function calculate() {
    var amount = parseFloat(document.getElementById('amount').value);
    var ticketType = document.getElementById('ticketType').value;

    var baseValue;
    var maxLotteryCount = 50;

    if (ticketType === 'lottery') {
        if (amount <= 0 || amount > maxLotteryCount) {
            alert('로또 개수는 1개부터 ' + maxLotteryCount + '개까지 가능합니다.');
            return;
        }
        baseValue = 1500000;
    } else if (ticketType === 'ticket') {
        baseValue = 3000000;
    } else {
        alert('올바른 항목을 선택하세요.');
        return;
    }

    var multipliedResult = baseValue * amount;
    var dividedResult = multipliedResult / 2;

    document.getElementById('received').innerText = '받아하는 돈: ' + formatCurrency(multipliedResult);
    document.getElementById('shared').innerText = '공동계좌에 넣을 돈: ' + formatCurrency(dividedResult);
}
