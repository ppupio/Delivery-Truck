import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
    }

    * {
    scrollbar-width: none;
    scrollbar-color: #4e5e7e #283a52;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background: #283a52;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #4e5e7e;
    border-radius: 7px;
    border: 0px solid #4e5e7e;
  }

    :root {
        --grey-6: #0D0D0D;
        --grey-5: #333333;
        --grey-4: #828282;
        --grey-3: #D9D9D9;
        --grey-2: #E0E0E0;
        --grey-1: #F2F2F2;
        --grey-0: #F5F5F5;
        --green-4: #1BF5B7;
        --green-3: #14D169;
        --green-2: #12E639;
        --green-1: #21FC08;
        --green-0: #6DF207;
        --green: #006400;
        --red: #8b0000;
    }

    body {
        background-color: #ffffff;
        color: var(--grey-0);
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
    }

    h1 {
        font-size: 50px;
    }

    h2 {
        font-size: 30px;
    }

    h3 {
        font-size: 25px;
    }

    h4 {
        font-size: 20px;
    }

    h5 {
        font-size: 15px;
    }

    button {
        cursor: pointer;
    }
`;
