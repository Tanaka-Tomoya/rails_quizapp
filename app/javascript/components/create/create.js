import React from 'react';
// import Form from './form';
import styled from 'styled-components';

export default class Create extends React.Component {
  onSubmitEvent(values) {
    // console.log(values)
    // this.props.createQuestion(values);
    // this.props.history.push('/');
  }
  render() {
    return (
      <CreateMain>
        <p>create page</p>
      </CreateMain>
    );
  }
}
const CreateMain = styled.div`
  height: 1000px;
  display: grid;
  grid-template-rows: 20px auto 70px;
  grid-template-columns: 30% 40% 30%;
  grid-template-areas:
      "nav space side "
      "nav main side "
      "footer footer footer ";
`
