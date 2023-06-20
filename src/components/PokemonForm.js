import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleForm,handleName,handleHp,handleFront,handleBack,hp,name,front,back}) {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          handleForm (e)
          console.log("submitting form...");
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={(e) => handleName(e)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={(e) => handleHp(e)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={front} onChange={(e) => handleFront(e)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={back} onChange={(e) => handleBack(e)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
