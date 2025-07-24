import React from 'react'

const BtnNav = (props) => {
  return (
    <button className={`px-5 py-3 text-sm font-semibold bg-white rounded-full text-black text-nowrap ${props.hidden}`}>
        <a href="https://portal.aws.amazon.com/gp/aws/developer/registration/index.html?nc2=h_ct&src=header_signup">
            Cree una cuenta AWS
        </a>
    </button>
  )
}

export default BtnNav