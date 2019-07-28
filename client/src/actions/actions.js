export function loadFunds() {
    return function (dispatch) {
      fetch("http://localhost:3001/funds")
      .then( (response) => {
        console.log(response)
        return response.json();
      }).then((res) => {
        dispatch(fundsLoaded(res));
      });
    };
  }
  function fundsLoaded(res) {
    return {
      type: "FUNDS_LOADED",
      value: res
    };
  }

export function loadFundsSize() {
  return function (dispatch) {
    fetch("http://localhost:3001/funds-size")
    .then( (response) => {
      console.log(response)
      return response.json();
    }).then((res) => {
      dispatch(fundsSizeLoaded(res));
    });
  };
}
function fundsSizeLoaded(res) {
  return {
    type: "FUNDS_SIZE_LOADED",
    value: res
  };
}