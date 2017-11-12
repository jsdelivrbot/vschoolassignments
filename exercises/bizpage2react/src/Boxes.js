import React from "react";
import {Grid, gridInstance, Row, Col} from "react-bootstrap";


const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

function Boxes () {
  return (
//in Bootstrap, it adds JS lines "const gridInstance"with a closing parenthesis and semi-colon;
//This is JavaScript and we only need to cut and paste in JSX to my function within the "return" parentheses.



      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={3}><code>&lt;{'Box Number 1'} /&gt;</code><br />{dummySentences.slice(0, 6).join(' ')}</Col>
          <Col sm={6} md={3}><code>&lt;{'Box Number 2'} /&gt;</code><br />{dummySentences.slice(0, 4).join(' ')}</Col>
          <Col sm={6} md={3}><code>&lt;{'Box Number 3'} /&gt;</code><br />{dummySentences.slice(0, 6).join(' ')}</Col>
          <Col sm={6} md={3}><code>&lt;{'Box Number 4'} /&gt;</code><br />{dummySentences.slice(0, 2).join(' ')}</Col>
        </Row>
      </Grid>


  )
}

export default Boxes;
