import React from "react";
import Wrapper from "../../views/Wrappers";
import InfoAboutStatus from "../InfoAboutStatus";
import { STATUSES, INFO_OF_STATUS } from "../../const";

const GettingResult = ({ wrapperStyle = '', status = '', children }) => {
  return (
    <Wrapper nameOfStyle={wrapperStyle}>
      {status === STATUSES.succsess ? (
        children
      ) : status === STATUSES.loading ? (
        <InfoAboutStatus text={INFO_OF_STATUS.loading} />
      ) : (
        <InfoAboutStatus text={INFO_OF_STATUS.error} />
      )}
    </Wrapper>
  )
}

export default GettingResult