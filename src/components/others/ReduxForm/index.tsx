import * as React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

type Props = {
  formState: any;
} & InjectedFormProps;

class PostForm extends React.Component<Props, {}> {
  render() {
    // const formState = this.props.formState; // これでアクセスできる
    // const value = formState.values.name;
    return (
      <form>
        <Field name="name" component="input" type="text" />
        {/* <div>name: {value}</div> */}
      </form>
    );
  }
}

const mapStateToProps = (state: any) => ({
  formState: state.form.postForm // <== ★こいつを書く
});

export default connect(mapStateToProps)(
  reduxForm<{}, Props>({
    form: 'postForm'
  })(PostForm)
);
