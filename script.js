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
    var resultString = '받아하는 돈: ' + formatCurrency(multipliedResult);

    var dividedResult = multipliedResult / 2;
    resultString += ', 공동계좌에 넣을 돈: ' + formatCurrency(dividedResult);

    document.getElementById('result').innerText = '결과: ' + resultString;
}

body {
    font-family: Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
}

.calculator {
    text-align: center;
}

label, input, select, button {
    margin: 5px;
    padding: 8px;
    font-size: 16px;
}

#result {
    margin-top: 10px;
}

/* 아이콘 스타일링 */
button {
    D:\계산기icon.jpg;
    background-size: 20px; /* 아이콘의 크기에 맞게 조절하세요 */
    padding-left: 30px; /* 아이콘의 크기에 맞게 조절하세요 */
}

/* 아이콘이 눌렸을 때의 스타일링 */
button:active {
    background-color: #ddd; /* 클릭 시 회색으로 변경 */
}
