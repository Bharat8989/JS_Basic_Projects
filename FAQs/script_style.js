const style = document.createElement('style');
style.textContent = `
body {
    background-color: antiquewhite;
    padding: 40px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6rem;
    margin: 0;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.accordion {
    background-color: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.accordion:hover {
    background-color: #f0f0f0;
}

.question {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.icon {
    margin-left: 16px;
    transition: transform 0.3s;
}

.icon.active {
    transform: rotate(180deg);
}

.answer {
    color: #666;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.answer p {
    margin: 0;
}
`;
document.head.appendChild(style);
