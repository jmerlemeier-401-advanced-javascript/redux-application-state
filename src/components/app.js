import React from 'react';
import { connect } from 'react-redux';

import { actions } from '../store/reducers';

// ================= MAIN ======================
class App extends React.Component {
  render() {
    console.log(this.props.stuff.foo);
    return (
      <section>
        <div>
          {this.props.stuff.foo}
        </div>
        <button onClick={() => this.props.handleChange(Math.random())}>Stuff</button>
      </section>
    )
  }
}

//maps state of this component to props
const mapStateToProps = state => ({
  stuff: state.someStuff
})

//when we call handle change, we grab that num, pass to ur action, and dispatching action and passing to reducer. reducer will evaluate action and let us know the copy of the modified state.
const mapDispatchToProps = (dispatch, getState) => ({
  handleChange: num => dispatch(actions.changeName(num)), //num is a payload 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);