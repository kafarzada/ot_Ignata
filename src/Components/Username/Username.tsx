import React from 'react';


type UserNamePropsType = {
    firstName: string,
    lastName: string,
    patronymic?: string
  }
  
  const  Username = (props: UserNamePropsType) => {
    return (
       <div>{`${props.firstName} ${props.lastName} ${props.patronymic}`}</div>
    )
  }

export default Username;