import { Button } from "./Button"
import {FilterType} from "./App"

type currentManeyType = {
  banknots: string
  value: number
  number: string
}
type objCurrentManey = {
  currentMoney: currentManeyType[]
  buttonFilterHandler:(nameButton:FilterType)=>(void)
}

const NewComponent = (props: objCurrentManey) => {
  return (<>
    <ul>
      {props.currentMoney.map((item, index) => {
        return (
          <li key={index + 1}>
            <span>{item.banknots + " "}</span>
            <span>{item.value + "  "}</span>
            <span>{item.number}</span>
          </li>
        )
      })
      }
    </ul>
    <div style={{ marginLeft: '40px' }}>
      <Button callback={() => props.buttonFilterHandler("all maney")} name="all maney" />
      <Button callback={() => props.buttonFilterHandler("Dollars")} name="Dollars" />
      <Button callback={() => props.buttonFilterHandler("RUBLS")} name="RUBLS" />
    </div>
  </>
  )
}

export default NewComponent