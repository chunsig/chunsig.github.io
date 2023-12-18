function formatCurrency(amount) {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(amount);
}

function calculate() {
    // ... 이하 생략
}

function calculate() {
    var amount = parseFloat(document.getElementById('amount').value);
    var ticketType = document.getElementById('ticketType').value;

    var baseValue;

    if (ticketType === 'lottery') {
        baseValue = 1500000;
    } else if (ticketType === 'ticket') {
        baseValue = 3000000;
    } else {
        alert('올바른 항목을 선택하세요.');
        return;
    }

    var multipliedResult = baseValue * amount;
    var dividedResult = multipliedResult / 2;

    // 결과를 따로 표시하는 div에 값 설정
    document.getElementById('received').innerText = '받아하는 돈: ' + formatCurrency(multipliedResult);
    document.getElementById('shared').innerText = '공동계좌에 넣을 돈: ' + formatCurrency(dividedResult);
}
    
