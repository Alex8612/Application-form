    import styled, { css } from 'styled-components'

const btn = (light, dark) => css`
  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  color: white;
  &:visited {
    color: white;
  }
  background-image: linear-gradient(${light}, ${dark});
  border: 1px solid ${dark};
  &:hover {
    background-image: linear-gradient(${light}, ${dark});
    &[disabled] {
      background-image: linear-gradient(${light}, ${dark});
    }
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const btnDefault = css`
  ${btn('#ffffff', '#d5d5d5')} color: #555;
`

const btnPrimary = btn('#4f93ce', '#285f8f')


export default styled.div`
  font-family: sans-serif;

  header {
      text-align:left;
      color:#00FFFF;
      font-size:3em;
      margin-left:30px;
  }

  footer {
      text-align:center;
      color:#C0C0C0;
      font-size:1em;
      margin-left:30px;
  }

  .insideForm {
      display:inline-block;
      position: relative;
      padding: 12px 20px;
      margin: 8px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;

      input[type=text],
      input[type=number],
      input[type=date],
      input[type=file],
      textarea {
          width: 50%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 4px;
          resize: vertical;
                }
            }

  .col-35 {
      float: left;
      width: 35%;
      margin-top: 12px;
        }

    .col-45 {
      float: left;
      width: 45%;
      margin-top: 12px;
    }

    .col-80 {
      float: left;
      width: 80%;
      margin-top: 12px;
    }


    .row:after {
      content: "";
      display: table;
      clear: both;
    }

  .button2{
     background-color:  #555555;
     border: none;
     color: white;
     padding: 5px 5px 5px 5px;
     text-align: center;
     text-decoration: none;
     display: inline-block;
     font-size: 15px;
     margin-bottom:50px;
     width:100px;
     margin-left:100px;
  }

  .button3{
     background-color:  #555555;
     border: none;
     color: white;
     padding: 15px 15px;
     text-align: center;
     text-decoration: none;
     font-size: 16px;
     margin-bottom:30px;
     width:100px;
     margin:100px,0px,0px,150px;
  }

  h1 {
    text-align: center;
    color: #989898;
  }

  h2 {
    text-align: center;
    color: #989898;
  }

  & > div {
    text-align: center;
  }

  a {
    display: block;
    text-align: center;
    color: #222;
    margin-bottom: 10px;
  }

  p {
    max-width: 500px;
    margin: 10px auto;
    & > a {
      display: inline;
    }
  }

  .loading {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    margin: 50px;
  }

  form,
  div.form {
    text-align: left;
    max-width: 800px;
    margin: 10px auto;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 3px;
    position: relative;



    & > div {
      display: flex;
      flex-flow: column nowrap;
      line-height: 2em;
      margin: 5px;
      position: relative;
      color: #989898;

      & > label {
        color: #505050;
        width: 690px;
        min-width: 60px;
        font-size: 1em;
        line-height: 32px;
        margin-bottom:10px;
      }

      & > input,
      & > select{
        flex: 1;
        padding: 3px 5px;
        width: 80%;
        font-size: 1em;
        margin: 10px 25px 25px 25px;
        border: 1px solid #ccc;
        border-radius: 3px;
        color: #989898;
      }
      & > input[type='date'] {
            width: 80%;
            color: #989898;
      }
      & > input[type="radio"] {
         width: 50%;
         color: #989898;
      }
      & > input[type="file"] {
          border: 1px solid #ccc;
          border-radius: 4px;
          color: #989898;
      }

      & > div {
        margin-left: 16px;
        & > label {
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
      }

      & > span {
        line-height: 22px;
        color: #800;
        font-weight: bold;
        font-size: 15px;
      }
    }
        & > .buttons {
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          margin-top: 15px;
        }


    .error {
      font-weight: bold;
      color: #800;
      flex-flow: row nowrap;
      justify-content: center;
    }

    .submitting {
      display: block;
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      padding: 0;
      text-align: center;
      background: rgba(0, 0, 0, 0.4);
      color: white;
      z-index: 10;
      font-weight: bold;
      font-size: 0.8em;
    }
    .saving {
      font-size: 0.8em;
      font-weight: bold;
      color: darkblue;
      margin: 0 0 0 8px;
      flex-flow: row nowrap;
    }

    pre {
      position: relative;
      border: 1px solid #ccc;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
      padding: 20px;
    }


  button {
    margin: 0 10px;
    &[type='button'] {
      ${btnDefault};
    }
  }
`
