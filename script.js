function formatCurrency(amount) {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(amount);
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

    document.getElementById('multipliedResult').innerText = formatCurrency(multipliedResult);
    document.getElementById('dividedResult').innerText = formatCurrency(dividedResult);
}

function copyToClipboard(elementId) {
    var resultText = document.getElementById(elementId).innerText;
    var textarea = document.createElement('textarea');
    textarea.value = resultText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('결과가 클립보드에 복사되었습니다.');
}
