export function loadFunds() {
    return function (dispatch) {
      fetch("http://localhost:3001/funds")
      .then( (response) => {
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

export function loadInvestors() {
  return function (dispatch) {
    fetch("http://localhost:3001/investors")
    .then( (response) => {
      return response.json();
    }).then((res) => {
      dispatch(investorsLoaded(res));
    });
  };
}
function investorsLoaded(res) {
  return {
    type: "INVESTORS_LOADED",
    value: res
  };
}

export function loadInvestorsInvID() {
  let url = window.location.href
  var urlsplit = url.split("/").slice(-1)[0];
  return function (dispatch) {
    fetch("http://localhost:3001/investors/invid/"+urlsplit)
    .then( (response) => {
      return response.json();
    }).then((res) => {
      dispatch(investorsLoadedInvID(res));
    });
  };
}
function investorsLoadedInvID(res) {
  return {
    type: "INVESTORS_INVID_LOADED",
    value: res
  };
}