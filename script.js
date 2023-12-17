
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
    
function copyToClipboard(elementId) {
    var resultText = document.getElementById(elementId).innerText;
    var cleanedResultText = resultText.replace('₩', '').trim(); // '₩' 기호를 제거합니다.
    var textarea = document.createElement('textarea');
    textarea.value = cleanedResultText;
    document.body.appendChild(textarea);
    textarea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? '성공적으로 복사되었습니다.' : '복사에 실패하였습니다.';
        alert(msg);
    } catch (err) {
        alert('이 브라우저는 클립보드 작업을 지원하지 않습니다.');
    }

    document.body.removeChild(textarea);
}

