// trial Container
import * as React from 'react';

import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { ReduxAction, ReduxState } from '../../store';
import { decrementAmount, incrementAmount } from '../../modules/DucksModule';
import DucksComponent from './DucksComponent';

const mapStateToProps = (state: ReduxState) => ({
  num: state.reducer.num
});

const mapDispatchToProps = (dispatch: Dispatch<ReduxAction>) =>
  bindActionCreators({ decrementAmount, incrementAmount }, dispatch);

@(connect(
  mapStateToProps,
  mapDispatchToProps
) as any)
export default class DucksContainer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
        <DucksComponent num={this.props.num} />
        <button onClick={() => this.props.incrementAmount(1)}>+</button>
        <button onClick={() => this.props.decrementAmount(1)}>-</button>
      </>
    );
  }
}
