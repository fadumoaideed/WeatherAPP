import React from "react";

const conditions = (props) => {
  return (
    <div>
      {props.error && <small>Please enter a valid city.</small>}

      {props.loading && <div />}

      {props.response.cod === 200 ? (
        <div>
          <p>
            <strong>{props.response.name}</strong>
          </p>
          <p>
            It is currently {Math.round(props.response.main.temp)} degrees out
            with {props.response.weather[0].description}.
          </p>
        </div>
      ) : null}
    </div>
  );
};
export default conditions;
