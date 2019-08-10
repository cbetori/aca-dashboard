import axios from 'axios'

export function loadFunds() {
  return function (dispatch) {
    axios.get("/api/funds")
    .then(function (response) {
      dispatch(fundsLoaded(response.data));
      console.log(response);
    })
  }
}
  

// export function loadFunds() {
//     return function (dispatch) {
//       fetch("/api/funds")
//       .then( (response) => {
//         return response.json();
//       }).then((res) => {
//         dispatch(fundsLoaded(res));
//       });
//     };
//   }
  function fundsLoaded(res) {
    return {
      type: "FUNDS_LOADED",
      value: res
    };
  }

export function loadFundsSize() {
  return function (dispatch) {
    fetch("/api/funds-size")
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
    fetch("/api/investments")
    .then( (response) => {
      return response.json();
    }).then((res) => {
      dispatch(investmentsLoaded(res));
    }).catch((error)=>console.log(error.message))
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
    fetch("/api/cashflows/distributions")
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
    fetch("/api/investors")
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
    fetch("/api/investors/invid/"+urlsplit)
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

export function updateInvestorCashFlow(oldValue, newValue, row) {
  console.log(oldValue)
  console.log(newValue)
  let url = window.location.href
  var urlsplit = url.split("/").slice(-1)[0];
  // return function (dispatch) {
    fetch("/api/investors/invid/"+urlsplit+"/cf", {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({row})
    })
    .then((res) => res.json()
    .then(response => loadInvestorsInvID(response))
    .catch(error => console.error('Error:', error)))
}
//      .then((res) => res.json())
//     .then(response => console.log('Success:', JSON.stringify(response)))
//     .catch(error => console.error('Error:', error));
// {username: "Broly", password: "Peterson"}