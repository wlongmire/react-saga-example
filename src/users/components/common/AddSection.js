import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // #main-modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    z-index: 4;
    overflow: hidden;
}
  // .modal-content {
    margin: 10% auto;
    width: 60%;
    height: 40vw;
    color:black;
    display: grid;
    grid-template-rows: 15% 75%;
    background:white;
    overflow-y: scroll;
    box-shadow: 0 0 20px black;
    border-radius: 5px;
}
  // .modal-title{
    background: #dedede;
    text-align: center;
    padding: 1.5em;
    color: black;
    font-weight: bold;
}
});
