import { Dispatch, SetStateAction } from 'react'

function toggleBooleanState(
  setBooleanState: Dispatch<SetStateAction<boolean>>,
) {
  setBooleanState((prevState) => !prevState)
}

export default toggleBooleanState
