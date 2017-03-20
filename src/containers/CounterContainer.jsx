import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import Counter from '../components/Counter';

const mapStateToProps = state => ({
  count: state.counter.current,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => {
    dispatch(increment());
  },
  onDecrement: () => {
    dispatch(decrement());
  },
});

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;
