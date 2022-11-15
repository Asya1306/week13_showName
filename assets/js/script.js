function showName() {
    let name = prompt("Как тебя зовут?", '');
    if (name === '') {
        return alert(`Привет, Инкогнито`);
    } else {
        return alert(`Привет, ${name}`);
    }
}