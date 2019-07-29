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

export function loadInvestments() {
  return function (dispatch) {
    fetch("http://localhost:3001/investments")
    .then( (response) => {
      return response.json();
    }).then((res) => {
      dispatch(investmentsLoaded(res));
    });
  };
}
function investmentsLoaded(res) {
  return {
    type: "INVESTMENTS_LOADED",
    value: res
  };
}

export function loadDistributions() {
  return function (dispatch) {
    fetch("http://localhost:3001/cashflows/distributions")
    .then( (response) => {
      return response.json();
    }).then((res) => {
      dispatch(distributionsLoaded(res));
    });
  };
}
function distributionsLoaded(res) {
  return {
    type: "DISTRIBUTIONS_LOADED",
    value: res
  };
}