const style = document.createElement('style');
style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    .container {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form-container {
        box-shadow: -1px 3px 12px 2px;
        width: 100%;
        max-width: 450px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 40px;
        background-color: #fff;
    }
    .form-container form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .form-container form h1 {
        text-align: center;
        margin-bottom: 30px;
    }
    .basic-btn {
        width: 100%;
        padding: 17px;
        margin: 8px 0;
        border: none;
        border-radius: 8px;
        background-color: #F0F0F0;
        outline: none;
    }
    .form-container form button {
        padding: 10px 25px;
        border-radius: 8px;
        font-size: 16px;
        border: none;
        color: white;
        background: #512da8;
        cursor: pointer;
        transition: background-color 0.5s;
    }
    .form-container form button.signupbtn {
        background-color: #F0F0F0;
        color: black;
    }
    textarea.basic-btn {
        resize: none;
    }
    @media screen and (max-width: 900px) {
        .form-container {
            width: 350px;
            padding: 35px 30px;
        }
    }
    @media screen and (max-width: 400px) {
        .form-container {
            width: 300px;
            padding: 25px 20px;
        }
        .basic-btn {
            padding: 10px;
        }
    }
`;

// Appending the style element to the document head
document.head.appendChild(style);