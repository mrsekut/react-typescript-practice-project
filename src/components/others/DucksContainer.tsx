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

  // dispatch使いたくない
  inc(amount: number) {
    this.props.incrementAmount(amount);
  }

  dec(amount: number) {
    this.props.decrementAmount(amount);
  }

  render() {
    return (
      <>
        <DucksComponent num={this.props.num} />
      </>
    );
  }
}
