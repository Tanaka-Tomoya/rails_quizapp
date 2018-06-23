// import React from 'react';
// import { Field, reduxForm } from 'redux-form';
// import styled from 'styled-components';
// import MenuItem from 'material-ui/MenuItem';
// import Text from '../general/text';
// import Select from '../general/select';
//
// class Form extends React.Component {
//   render() {
//     return (
//       <FormContent>
//         <Field name="title" type="text" component={Text} label="question"/>
// 				<Field name="a" type="text" component={Text} label="A"/>
// 				<Field name="b" type="text" component={Text} label="B"/>
// 				<Field name="c" type="text" component={Text} label="C"/>
// 				<Field name="d" type="text" component={Text} label="D"/>
// 				<Field name="answer" component={Select} label="Answer">
// 					<MenuItem value="a" primaryText="a"/>
// 					<MenuItem value="b" primaryText="b"/>
// 					<MenuItem value="c" primaryText="c"/>
// 					<MenuItem value="d" primaryText="d"/>
// 				</Field>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </FormContent>
//     );
//   }
// }
//
// export default reduxForm({
//   form: 'Form'
// })(Form)
//
// const FormContent = styled.form`
//   grid-area: main;
// `
