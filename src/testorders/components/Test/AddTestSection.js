import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#test-section': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'textAlign': 'center'
  },
  'priority-type-section': {
    'width': [{ 'unit': '%H', 'value': 0.7 }],
    'margin': [{ 'unit': 'em', 'value': 1.5 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr'
  },
  'priority_type': {
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr',
    'textAlign': 'left',
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 1 }]
  },
  'checkbox-title': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'textAlign': 'left',
    'position': 'relative',
    'left': [{ 'unit': 'em', 'value': 2 }],
    'marginTop': [{ 'unit': 'em', 'value': 2 }],
    'fontWeight': 'bold',
    'color': 'gray'
  },
  // .header{
    min-height: 10%;
    background: #f84445;
}

.header p {
    color: white;
    font-weight: 900;
    padding: 1em;
}

.maintenance-section{
    font-size: medium;
    padding: 2em;
}

.table-element{
    width: 80%;
}

.visit-type-section, .maintenance-type-section{
    width: 70%;
    margin: 1.5em auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.label, .checkbox-value{
    display: inline-block;
    font-size: small;
}
.location-title{
    font-size: small;
    font-weight: bold;
    color: gray;
}

.scheduled-title{
    font-size: small;
    font-weight: bold;
    color: gray;
    position: relative;
    left: 2em;
    text-align: left;
}


.visit_type, .maintenance_type, .doctor_type{
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: left;
    position: relative;
    left: 1em;
}

.checkbox-title{
    font-size: 15px;
    text-align: left;
    position: relative;
    left:2em;
    margin-top: 2em;
    font-weight: bold;
    color: gray;
}

.doctor-type-section{
    width: 90%;
    margin: 1.5em auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
.scheduled-time{
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr 1fr;
    width: 56vw;
    grid-column-gap: 2em;
}

.scheduled-time-section{
    margin-bottom: 1em;
}
});
